import { useState } from "react";
import { Send } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import "./MessageInput.css";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { sendMessage } = useChatStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const ok = await sendMessage({ text: text.trim() });
    if (ok) setText("");
  };

  return (
    <div className="msg-input-wrap">
      <form onSubmit={handleSubmit} className="msg-form">
        <input
          type="text"
          className="msg-input"
          placeholder="Type a message…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" className="icon-btn send-btn">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;