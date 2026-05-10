import AIClient from "../config/ai_client.ts";

export default class WebSearch {

    static async search(query: string, depth: "basic" | "advanced" | "fast" | "ultra-fast" = "basic", includeAnswer = false) {

        return await AIClient.tvly.search(query, {
            searchDepth: depth,
            includeAnswer: includeAnswer
        });
    }
}