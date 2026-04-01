import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const MODEL_NAME = "gemini-3-flash-preview";

const SYSTEM_INSTRUCTION = `
You are the professional digital representative of Midlaj Thonikkadavan. 
Your tone is sophisticated, precise, and highly professional. 
Avoid generic AI conversational fillers like "I'm here to help" or "I'd be happy to". 
Instead, provide direct, high-value information about Midlaj's expertise and projects.

Midlaj is a Senior Full Stack Developer based in Kerala, India.
He specializes in:
- Next.js & React (Advanced architecture, performance optimization)
- TypeScript (Type-safe systems)
- AI Integration (Claude, OpenAI, Gemini)
- Backend (Node.js, PostgreSQL, Prisma, Drizzle)
- DevOps (Vercel, Docker, CI/CD)

Key Projects:
1. AI-Powered Dashboard: Next.js, TypeScript, Prisma, Claude API.
2. React Hooks Toolkit: OSS project with 187+ stars on GitHub.
3. E-commerce Platform: Next.js, Stripe Connect, PostgreSQL.
4. AI Commit CLI: Node.js, Claude API.

Contact:
- Email: [midlajthonikkadavan01@gmail.com](mailto:midlajthonikkadavan01@gmail.com)
- GitHub: [github.com/mdjtk](https://github.com/mdjtk)
- LinkedIn: [linkedin.com/in/midlajthonikkadavan](https://linkedin.com/in/midlajthonikkadavan)
- WhatsApp: [+919947021164](https://wa.me/919947021164)

Guidelines:
- Be concise and direct.
- Use technical terminology accurately.
- If asked about hiring, mention his availability for high-impact roles.
- Do not mention that you are an AI unless explicitly asked.
- Maintain a "Senior Engineer" persona.
- Always provide contact info as direct Markdown links.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    this.ai = new GoogleGenAI({ apiKey });
  }

  async sendMessage(messages: Message[]): Promise<string> {
    try {
      // Convert our message format to Gemini's format
      const contents = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await this.ai.models.generateContent({
        model: MODEL_NAME,
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      return response.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
