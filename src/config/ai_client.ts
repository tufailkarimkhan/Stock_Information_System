import * as dotenv from 'dotenv';
import { OpenAI } from 'openai';
import { tavily } from '@tavily/core';

// 1. Force dotenv to load the custom file right here, right now
dotenv.config({ path: './.Dev.env' });


export default class AIClient {

 static openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

 static tvly =  tavily({apiKey: process.env.TAVELY_API_KEY!});

}