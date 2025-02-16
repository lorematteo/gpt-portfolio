import { useState } from 'react';

interface ParsedData {
  message: {
    content: {
      parts: string[];
    };
  };
}

const useChat = () => {
  const [response, setResponse] = useState('Hello! How can I assist you today?');
  const [loading, setLoading] = useState(false);
  const [writing, setWriting] = useState(false);

  const sendChatMessage = async (message: string) => {
    if (!message) {
      console.error('Message is required');
      return;
    }
    if (loading) {
      console.error('Chat is already loading');
      return;
    }
    if (writing) {
      console.error('Chat is already writing');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      setLoading(false);

      if (!response.ok) {
        throw new Error('Failed to fetch chat response');
      }

      await processStream(response.body);
    } catch (error) {
      console.error('Error sending chat message:', error);
    } finally {
      setLoading(false);
    }
  };

  const processStream = async (readableStream: ReadableStream<Uint8Array> | null) => {
    setWriting(true);
    const reader = readableStream?.getReader();
    const decoder = new TextDecoder();
    let fullBotMessage = '';

    if (!reader) {
      console.error('Failed to get reader from stream');
      return;
    }

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });
        const lines = chunkText.split('\n').filter((line) => line.startsWith('data: '));

        for (const line of lines) {
          const jsonString = line.replace(/^data: /, '');
          const parsedData = JSON.parse(jsonString) as ParsedData;
          const botMessage = parsedData.message.content.parts[0];
          fullBotMessage = botMessage;
          setResponse(fullBotMessage);
        }
      }
    } catch (error) {
      console.error('Error processing stream:', error);
    } finally {
      reader.releaseLock();
      setWriting(false);
    }
  };

  return {
    response,
    isLoading: loading,
    isWriting: writing,
    sendChatMessage,
  };
};

export default useChat;
