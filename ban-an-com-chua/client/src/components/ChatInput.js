import { useState } from 'react';

const ChatInput = () => {
  const [textArea, setTextArea] = useState();

  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value)
  }

  return (
    <div className={"chat-input"}>
      <textarea name="" id="" rows="3" onChange={handleTextAreaChange}>{textArea}</textarea>
      <button class="secondary-button">Enter</button>
    </div>
  );
}

export default ChatInput;