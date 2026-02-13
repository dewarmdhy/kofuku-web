
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getKofukuResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are Kofuku, a friendly and professional female wellness consultant for an Indonesian workplace wellness platform. 
        Your goal is to provide holistic, encouraging, and medically-sound advice regarding Physical, Mental, Social, Financial, Career, and Work-life balance.
        Always speak in warm, professional Bahasa Indonesia. 
        Keep responses concise and helpful. 
        If asked for medical diagnosis, kindly suggest consulting a real doctor within the Kofuku platform.
        Current branding tagline: "Say Yes to Health, Say Yes to Kofuku".`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, Kofuku sedang mengalami gangguan teknis. Mari coba lagi sebentar lagi 😊";
  }
};
