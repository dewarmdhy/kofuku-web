
import { GoogleGenAI, Modality } from "@google/genai";

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

export const generateKofukuSpeech = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say professionally and warmly as a doctor: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, // Kore is a professional female voice
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

export const transcribeAudio = async (base64Audio: string, mimeType: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            { inlineData: { data: base64Audio, mimeType } },
            { text: "Transkripsikan rekaman suara ini ke dalam teks Bahasa Indonesia. Berikan hasilnya hanya berupa teks transkripsi tanpa komentar tambahan." }
          ]
        }
      ]
    });
    return response.text;
  } catch (error) {
    console.error("STT Error:", error);
    return null;
  }
};
