import { MessageSquare } from "lucide-react";
import "./NoChatSelected.css";

const NoChatSelected = () => {
  return (
    <div className="no-chat">
      <div className="no-chat__inner">
        <div className="no-chat__icon-wrap">
          <div className="no-chat__icon-bg">
            <MessageSquare className="no-chat__icon" />
          </div>
        </div>
        <h2 className="no-chat__title">Welcome to Chatty!</h2>
        <p className="no-chat__subtitle">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;