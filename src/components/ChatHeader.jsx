import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import "./ChatHeader.css";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <header className="chat-header">
      <div className="chat-header__inner">
        <div className="chat-header__left">
          <div className="chat-header__avatar">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="chat-header__avatar-img"
            />
          </div>
          <div className="chat-header__user">
            <h3 className="chat-header__name">{selectedUser.fullName}</h3>
            <p className="chat-header__status">
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <button
          className="chat-header__close"
          onClick={() => setSelectedUser(null)}
          aria-label="Close chat"
        >
          <X />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;