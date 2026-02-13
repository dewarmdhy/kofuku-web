
import { GoogleGenAI, Modality } from "@google/genai";
import { ChatMessage } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getKofukuResponse = async (userMessage: string, history: ChatMessage[] = []) => {
  try {
    // Convert history to Gemini format
    const contents = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    
    // Add the latest message if not in history
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: `Anda adalah Kofuku, konsultan wellness (persona dokter wanita) yang ramah dan profesional.
        ATURAN UTAMA:
        1. JAWABAN SANGAT SINGKAT: Maksimal 2 kalimat saja.
        2. INTERAKTIF 2-ARAH: Selalu akhiri jawaban Anda dengan satu pertanyaan singkat yang relevan untuk memancing interaksi pengguna.
        3. BAHASA: Gunakan Bahasa Indonesia yang hangat, empatik, dan profesional (seperti dokter pribadi).
        4. TOPIK: Fokus pada kesehatan fisik, mental, dan keseimbangan hidup di kantor.
        5. Tagline: "Say Yes to Health, Say Yes to Kofuku".
        
        Contoh interaksi:
        User: "Saya lelah hari ini."
        Kofuku: "Saya mengerti, tekanan pekerjaan memang bisa menguras energi. Apakah Anda sudah sempat minum air putih yang cukup siang ini?"`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, ada sedikit gangguan. Bagaimana perasaan Anda sekarang?";
  }
};

export const generateKofukuSpeech = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }], // Removed the "Say professionally" prefix here as it's now in the system instruction for text generation
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
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
