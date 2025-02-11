import { NextRequest, NextResponse } from 'next/server';

import client from '@/config/mistral';

interface RequestBody {
  message?: string;
}

export async function POST(req: NextRequest) {
  const body: RequestBody = (await req.json()) as RequestBody;
  const { message } = body;

  if (!message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const encoder = new TextEncoder();
  let fullResponse = '';

  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        const stream = await client.agents.stream({
          agentId: 'ag:d794050f:20250211:matteogpt:20eb8a15',
          messages: [{ role: 'user', content: message }],
        });

        for await (const chunk of stream) {
          try {
            const content = chunk.data.choices[0].delta?.content || '';

            fullResponse += typeof content === 'string' ? content : JSON.stringify(content); // Accumulate the full response

            // Construct the JSON data with the concatenated response
            const sseData = JSON.stringify({
              message: {
                content: { parts: [fullResponse] },
              },
            });

            // Send the data back in SSE format
            controller.enqueue(encoder.encode(`data: ${sseData}\n\n`));

            // Close the stream if the response is fully complete
            if (chunk.data.choices[0].finishReason === 'stop') {
              controller.close();
              break;
            }
          } catch (err) {
            console.error('Error processing chunk', err);
            controller.error(err);
            controller.close();
            break;
          }
        }
        controller.close();
      } catch (err) {
        console.error('Error in MistralAI stream', err);
        controller.error(err);
        controller.close();
      }
    },
  });

  return new NextResponse(readableStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
