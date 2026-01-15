
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChat: React.FC = () => {
  // Solo renderizar si hay API key disponible
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'HANDSHAKE ESTABLISHED. Soy el asistente de seguridad de Denny. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading || !apiKey) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Eres un asistente de IA para el portafolio de Denny Sánchez. 
          Denny es un Analista de Seguridad SOC (Security Operations Center). 
          Tu tono es técnico, profesional y futurista. 
          Ayuda a los visitantes a conocer sus habilidades (SIEM, Wireshark, Kali Linux), 
          sus certificaciones (CompTIA Security+, CySA+, LetsDefend) y su experiencia. 
          Si alguien pregunta algo no relacionado con Denny o ciberseguridad, redirige cortésmente a temas de seguridad. 
          Responde en español de forma concisa.`,
          temperature: 0.7,
        },
      });

      const botText = response.text || 'Error en el enlace de datos. Reintente...';
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'ERROR DE PROTOCOLO: No se pudo conectar con el núcleo central.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Si no hay API key, no renderizar el componente
  if (!apiKey) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-mono">
      {isOpen ? (
        <div className="mb-4 flex h-[450px] w-[320px] md:w-[400px] flex-col rounded-xl border border-primary/30 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-primary/20 bg-primary/10 p-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[18px]">security</span>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Sec-Bot v1.0.4</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-primary/20 text-white border border-primary/20' 
                    : 'bg-white/5 text-gray-300 border border-white/10'
                }`}>
                  <div className="flex items-center gap-2 mb-1 opacity-50">
                    <span className="text-[8px] uppercase font-bold tracking-tighter">
                      {m.role === 'user' ? 'GUEST' : 'SYSTEM'}
                    </span>
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10 animate-pulse">
                  <span className="text-[8px] text-gray-500">ANALIZANDO...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-black border border-white/10 rounded px-3 py-2 text-xs text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="h-9 w-9 flex items-center justify-center rounded bg-primary text-black hover:bg-gray-400 transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-black shadow-[0_0_20px_rgba(153,153,153,0.3)] hover:shadow-[0_0_30px_rgba(153,153,153,0.5)] transition-all hover:scale-110 active:scale-95"
        >
          <span className="material-symbols-outlined text-[28px] animate-pulse">support_agent</span>
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-black"></div>
          {/* Label Tooltip */}
          <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-white/10 px-3 py-1 rounded text-[10px] text-white whitespace-nowrap pointer-events-none">
            PROTOCOL: ASSISTANT
          </div>
        </button>
      )}
    </div>
  );
};

export default AIChat;
