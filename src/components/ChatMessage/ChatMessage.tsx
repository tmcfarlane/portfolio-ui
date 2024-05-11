import { ChatMessageObj } from "../../types/interfaces";
import "./ChatMessage.css";

interface Props {
  message: ChatMessageObj;
}

const ChatMessage = ({ message }: Props) => {
  return (
    <div
      className={`flex gap-2 mb-4 ${
        message.role === "system" ? "chatgpt" : "justify-end"
      }`}
    >
      {message.role === "system" && (
        <svg
          className="w-10 h-10 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 7.5C10 7.22386 10.2239 7 10.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H10.5C10.2239 8 10 7.77614 10 7.5Z"
            fill="#FFFFFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V11C21 11.7615 20.5744 12.4235 19.9482 12.7614C18.9078 16.6111 15.8838 19.5 12 19.5C8.11621 19.5 5.09218 16.6111 4.05182 12.7614C3.42556 12.4236 3 11.7615 3 11V7ZM5 6H19C19.5523 6 20 6.44772 20 7V11C20 11.5523 19.5523 12 19 12H15.6651C15.5689 12 15.4732 11.9861 15.381 11.9588L12.8523 11.2096C12.296 11.0447 11.704 11.0447 11.1477 11.2096L8.61902 11.9588C8.5268 11.9861 8.43112 12 8.33494 12H5C4.44772 12 4 11.5523 4 11V7C4 6.44772 4.44772 6 5 6ZM5.16602 13C6.22971 16.2565 8.83396 18.5 12 18.5C15.1661 18.5 17.7703 16.2565 18.834 13H15.6651C15.4727 13 15.2813 12.9722 15.0969 12.9176L12.5682 12.1683C12.1974 12.0585 11.8026 12.0585 11.4318 12.1683L8.90311 12.9176C8.71867 12.9722 8.52731 13 8.33494 13H5.16602Z"
            fill="#FFFFFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 14.5C10.2761 14.5 10.5 14.7239 10.5 15L10.5003 15.0027C10.5003 15.0027 10.5014 15.0073 10.5034 15.0122C10.5074 15.022 10.5171 15.0405 10.5389 15.0663C10.5845 15.1202 10.6701 15.1902 10.8094 15.2599C11.0883 15.3993 11.5085 15.5 12 15.5C12.4915 15.5 12.9117 15.3993 13.1906 15.2599C13.3299 15.1902 13.4155 15.1202 13.4611 15.0663C13.4829 15.0405 13.4926 15.022 13.4966 15.0122C13.4986 15.0073 13.4997 15.0027 13.4997 15.0027L13.5 15C13.5 14.7239 13.7239 14.5 14 14.5C14.2761 14.5 14.5 14.7239 14.5 15C14.5 15.5676 14.0529 15.9468 13.6378 16.1543C13.1928 16.3768 12.6131 16.5 12 16.5C11.3869 16.5 10.8072 16.3768 10.3622 16.1543C9.9471 15.9468 9.5 15.5676 9.5 15C9.5 14.7239 9.72386 14.5 10 14.5Z"
            fill="#FFFFFF"
          />
        </svg>
      )}

      <div className={"w-[60%] p-1 rounded bg-gray-700"}>
        <div
          className={`text-[12px] ${
            message.role === "user" ? "text-right" : ""
          }`}
        >
          {message.content}
        </div>
      </div>

      {message.role === "user" && (
        <div
          className="
          w-[24px] h-[24px] rounded-full"
        >
          <div className="w-full h-full rounded-full" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
