import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

export default client;
