import "./TrentGPT.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { ChatMessageObj } from "../types/interfaces";
import { useRef, useState, FormEvent, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import { FaRegStopCircle } from "react-icons/fa";
import ChatMessage from "../components/ChatMessage/ChatMessage";

const DEFAULT_PROMPT =
  "Hello, my name is TrentGPT, I am the AI embodiment of Trent Mcfarlane. I'm here to help you understand more about me. Ask me anything!";
const DEFAULT_CHAT: ChatMessageObj[] = [
  {
    role: "system",
    content: DEFAULT_PROMPT,
  },
];

export default function TrentGPT() {
  const [input, setInput] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatMessageObj[]>(DEFAULT_CHAT);
  const [loading, setLoading] = useState<boolean>(false);

  const chatLogEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function fetchAIResponse(userInput: string) {
    console.log("User input:", userInput);
    // Simulate an AI response fetch, replace with actual API call
    return `Placeholder: I will send this to Trent and get back to you soon!`;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (input === "" || loading) return;

    setChatLog((prev) => [...prev, { role: "user", content: input }]);

    setInput("");
    inputRef?.current?.focus();

    setLoading(true);
    try {
      const aiResponse = await fetchAIResponse(input);
      setChatLog((prev) => [...prev, { role: "system", content: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatLogEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  return (
    <>
      <div className="home relative flex flex-col w-full overflow-hidden">
        <Sidebar />

        <div className="chatbox-container flex-1 w-full flex flex-col overflow-hidden pl-64">
          <main className="chatbox relative flex-1 w-full flex flex-col overflow-hidden">
            <div className="chat-log flex-1 w-full overflow-y-auto">
              {chatLog.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              <div
                ref={chatLogEndRef}
                className="emtpy-space w-full h-32"
              ></div>
            </div>

            <div className="chatbox-input-holder">
              <form
                onSubmit={handleSubmit}
                className="flex gap-x-2 items-center bg-chatinputBlack p-3 rounded shadow-lg w-11/12 h-14"
                style={{
                  width: "95%",
                  boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
                  height: "56px",
                }}
              >
                <input
                  ref={inputRef}
                  autoFocus
                  className="chat-input-textarea"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                />
                {loading ? (
                  <FaRegStopCircle />
                ) : (
                  <button
                    type="submit"
                    disabled={input === ""}
                    className="outline-none border-none disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <IoMdSend className="w-5 h-5 text-gray-300" />
                  </button>
                )}
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
