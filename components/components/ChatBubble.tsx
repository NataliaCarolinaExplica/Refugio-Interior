import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

interface Props {
  messages: Message[];
  onSend: (text: string) => void;
}

export function ChatBubble({ messages, onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "8px" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "6px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "12px",
                backgroundColor: msg.role === "user" ? "#d1fae5" : "#e0e7ff",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribí acá…"
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}
