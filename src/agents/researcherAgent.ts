import WebSearch from "../tools/WebSearch.ts";

export default class ResearcherAgent {
    
   static async getCompanyNews(ticker:any) {
        const news = await WebSearch.search(`${ticker} stock news and future outlook`, 'basic');
        return news.results[0]?.content || "No recent news found.";
    }
}

