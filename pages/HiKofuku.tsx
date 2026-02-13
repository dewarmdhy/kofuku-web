
import React, { useState, useRef, useEffect } from 'react';
import { 
  Mic, 
  Send, 
  Sparkles, 
  History, 
  MoreVertical,
  ChevronRight,
  Smile,
  Info
} from 'lucide-react';
import { ChatMessage } from '../types';
import { getKofukuResponse } from '../geminiService';

const HiKofuku: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: '1', 
      text: 'Halo! Aku Kofuku, konsultan wellness personalmu. Tekan tombol mikrofon atau ketik pesanmu untuk mulai konsultasi 😊', 
      sender: 'kofuku', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsThinking(true);

    const responseText = await getKofukuResponse(text);
    
    const kofukuMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText || "Maaf, saya tidak bisa merespon saat ini.",
      sender: 'kofuku',
      timestamp: new Date()
    };

    setIsThinking(false);
    setMessages(prev => [...prev, kofukuMsg]);
  };

  const toggleListen = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // In a real app, we'd use Web Speech API here
      setTimeout(() => {
        setIsListening(false);
        handleSend("Berikan saya tips mengelola stres kerja");
      }, 3000);
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col animate-in fade-in zoom-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary font-heading flex items-center gap-2">
            Hi Kofuku <Sparkles className="text-secondary" />
          </h2>
          <p className="text-mediumGrey">Konsultan Wellness Personalmu</p>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 text-mediumGrey hover:text-primary transition-all">
            <History size={20} />
          </button>
          <button className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 text-mediumGrey">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col relative">
        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-50/30"
        >
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-surface text-charcoal border border-secondary/20 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-[10px] mt-2 opacity-60 ${msg.sender === 'user' ? 'text-white' : 'text-mediumGrey'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-surface p-4 rounded-2xl border border-secondary/20 rounded-tl-none flex gap-2 items-center">
                <span className="w-2 h-2 bg-secondary rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Topics - Horizontal Scroll */}
        <div className="px-6 py-3 border-t border-gray-50 flex gap-2 overflow-x-auto custom-scrollbar no-scrollbar">
          {["Rekomendasi Makan", "Tips Olahraga", "Kelola Stres", "Cek Kesehatan", "Pola Tidur"].map((topic, idx) => (
            <button 
              key={idx}
              onClick={() => handleSend(topic)}
              className="whitespace-nowrap px-4 py-2 bg-primary-light text-primary text-xs font-bold rounded-full hover:bg-primary hover:text-white transition-all border border-primary/10"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex items-center gap-4 relative">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan apa saja seputar kesehatanmu..."
                className="w-full pl-6 pr-14 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary text-sm shadow-inner"
              />
              <button 
                onClick={() => handleSend()}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
            
            <div className="flex items-center">
              <button 
                onClick={toggleListen}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                  isListening 
                    ? 'bg-error text-white animate-pulse' 
                    : 'bg-secondary text-white shadow-lg hover:scale-105 active:scale-95 animate-pulse-gold'
                }`}
              >
                <Mic size={24} />
              </button>
            </div>
          </div>
          <p className="text-center text-[10px] text-mediumGrey mt-4 font-medium flex items-center justify-center gap-1">
            <Info size={12} /> Konsultasi ini di-backup oleh AI Wellness Kofuku. Tetap konsultasikan ke medis jika diperlukan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiKofuku;
