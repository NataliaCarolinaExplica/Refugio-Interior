import { useState } from "react";
import { ChatBubble } from "./components/ChatBubble";
import { StageIndicator } from "./components/StageIndicator";
import { BreathingExercise } from "./components/BreathingExercise";
import { getGeminiResponse } from "./services/geminiService";
import { Stage } from "./types";

export default function App() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [stage, setStage] = useState<Stage>("landing");
  const [showConsent, setShowConsent] = useState(true);

  const handleUserInput = async (input: string) => {
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    const response = await getGeminiResponse(input, stage);
    setMessages([...newMessages, { role: "assistant", text: response }]);
  };

  return (
    <div className="app-container">
      {showConsent ? (
        <div className="consent-screen">
          <h2>Refugio Interior</h2>
          <p>
            Este espacio no diagnostica ni reemplaza un proceso terapéutico. Es una herramienta de
            autoexploración y orientación emocional.
          </p>
          <button onClick={() => setShowConsent(false)}>Comenzar</button>
        </div>
      ) : (
        <>
          <StageIndicator stage={stage} />
          <BreathingExercise />
          <ChatBubble messages={messages} onSend={handleUserInput} />
        </>
      )}
    </div>
  );
}
