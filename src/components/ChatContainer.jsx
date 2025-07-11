import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { formatMessageTime } from "../lib/utils";
import "./ChatContainer.css";   // (unchanged—CSS below no longer needs avatar rules)

const ChatContainer = () => {
  const {
    messages = [],
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();

  const endRef = useRef(null);

  /* load + socket */
  useEffect(() => {
    if (!selectedUser) return;
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser]);

  /* scroll down on new message */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (isMessagesLoading) {
    return (
      <section className="chat-wrap chat-wrap--loading">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </section>
    );
  }

  return (
    <section className="chat-wrap">
      <ChatHeader />

      <div className="chat-messages">
        {messages.map((m) => {
          const mine = m.senderId === authUser._id;
          return (
            <div key={m._id} className={`msg-row ${mine ? "me" : "them"}`}>
              {/* bubble */}
              <div className="msg-bubble">
                {m.text && <p>{m.text}</p>}
                {m.image && <p>[image removed]</p>}
                <time className="msg-time">{formatMessageTime(m.createdAt)}</time>
              </div>
            </div>
          );
        })}
        <div ref={endRef} />
      </div>

      <MessageInput />
    </section>
  );
};

export default ChatContainer;