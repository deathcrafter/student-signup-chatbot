import Chatbot from "react-chatbot-kit";
import MessageParser from "../../chatbot/MessageParser";
import config from "../../chatbot/config";
import ActionProvider from "../../chatbot/ActionProvider";
import "react-chatbot-kit/build/main.css";

function ChatbotPage() {
  return (
    <div className="chat-bot-div">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotPage;
