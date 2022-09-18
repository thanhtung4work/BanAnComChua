import Chat from "./Chat";
import ChatInput from "./ChatInput";

const ChatDisplay = () => {
  return (
    <div className={"chat-display"}>
      <Chat />
      <ChatInput />
    </div>
  );
}

export default ChatDisplay;