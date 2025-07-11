import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

import "./HomePage.css";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="homepage">
      <div className="homepage__wrapper">
        <div className="homepage__container">
          <div className="homepage__inner">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;