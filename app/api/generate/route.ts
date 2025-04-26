import FirecrawlApp, { ScrapeResponse } from '@mendable/firecrawl-js';
import { NextResponse } from 'next/server';

export async function GET (){
const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });

const scrapeResult = await app.scrapeUrl('firecrawl.dev', { formats: ['markdown', 'html'] }) as ScrapeResponse;

if (!scrapeResult.success) {
  return  NextResponse.json({error:scrapeResult.error}, {status:500});
}

return NextResponse.json({html:scrapeResult.html});
}
