import { NextResponse } from "next/server"
import { together, streamText } from "@/app/utils/ai"
import  FirecrawlApp, { ScrapeResponse} from "@mendable/firecrawl-js";


export async function GET() {
  const app = new FirecrawlApp({apiKey:process.env.FIRECRAWL_API_KEY});
  const scrapeResult = await app.scrapeUrl('firecrawl.dev', { formats: ['markdown', 'html'] }) as ScrapeResponse;

  if(!scrapeResult.success){
    return NextResponse.json({error:scrapeResult.error}, {status: 500})
  }
  try{
    const result = await streamText({
      model: together("meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8"),
      prompt: `Summarize the following HTML content:\n${scrapeResult.html}`,
    });

    const stream = new ReadableStream({
    async start (controller){
      for await (const textPart of result.textStream) {
        controller.enqueue(new TextEncoder().encode(textPart));
      }
      controller.close();
    }
    });
    return new NextResponse(stream, {
      headers:{'Content-type' : 'text/plain'}
      }); 
    }catch(error) {
      console.error("AI processing error", error);
      return NextResponse.json({error:" Ai processing  failed"});
  }
}