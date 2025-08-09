import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, X } from "lucide-react";
import toast from "react-hot-toast";
import Profileimage from "../../assets/HelpCenter/HelpProfile.png";
import { IoMdSend } from "react-icons/io";
import { COLORS, FONTS } from "../../constants/ui constants";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdLanguage, MdPerson } from "react-icons/md";
import { FaDesktop, FaGlobe } from "react-icons/fa";
import whatsappBg from '../../assets/Helpcenter/whatsappbg.jpg';


const ICON_COLOR = "#6366F1";
interface ChatPanelProps {
  onClose: () => void;
}

interface Message {
  id: number;
  content: string;
  sender: "user" | "admin";
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi there, How are you?", sender: "admin" },
    {
      id: 2,
      content: "Waiting for your reply. As I have to go back soon.",
      sender: "admin",
    },
    { id: 3, content: "Hi, I am coming there in few minutes.", sender: "user" },
    { id: 4, content: "Thank you very much.", sender: "admin" },
  ]);

  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      content: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="h-full w-full flex overflow-hidden bg-white shadow-xl relative">
      
      <div className="flex flex-col flex-1 relative transition-all duration-300">
        
        <div className="p-4 border-b bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={Profileimage}
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              alt="User"
              onClick={() => setShowProfile(true)}
            />
            <div>
              <h2 style={{ ...FONTS.bold_heading, fontSize: "18px" }}>
                Chandran R
              </h2>
              <p style={{ ...FONTS.description, fontSize: "14px" }}>
                Institute Admin
              </p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-600 hover:text-black"
            >
              <MoreVertical size={20} />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-green-200 rounded-tl-[10px] rounded-br-[10px] shadow-lg rounded border text-sm z-20">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    toast.success("Ticket closed");
                    onClose();
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Close Ticket
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          ref={chatRef}
           style={{ backgroundImage: `url(${whatsappBg})` }}
  className="flex-1 overflow-y-auto p-4 space-y-3 bg-repeat bg-center"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded shadow text-sm ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-800"
                }`}
                style={{
                  fontFamily: FONTS.description.fontFamily,
                  fontWeight: FONTS.description.fontWeight,
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

   
        <div className="p-4 border-t bg-white flex items-center gap-3 shrink-0">
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 p-2 border rounded-[10px] outline-none"
            style={FONTS.description}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full"
            style={{ backgroundColor: COLORS.button, color: "white" }}
          >
            <IoMdSend className="w-5 h-5" />
          </button>
        </div>
      </div>

{showProfile && (
  <div
    className="absolute inset-0 bg-white bg-opacity-60  transition-opacity duration-300 z-10"
    onClick={() => setShowProfile(false)}
  />
)}


<div
  className={`absolute top-0 right-0 h-full w-[350px] bg-white shadow-xl rounded-l-md overflow-hidden flex flex-col transform transition-transform duration-300 z-20 ${
    showProfile ? "translate-x-0" : "translate-x-full"
  }`}
>
  
 <div className="flex flex-col h-full">
   
      <div className="p-5 border-b flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={Profileimage}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 style={{ ...FONTS.bold_heading, fontSize: "18px" }}>Chandran R</h2>
            <p style={{ ...FONTS.description, fontSize: "16px" }}>Institute Admin</p>
          </div>
        </div>
        <button onClick={() => setShowProfile(false)}>
          <X size={20} />
        </button>
      </div>


      <div className="flex-1 overflow-y-auto px-6 py-4 text-sm space-y-6">
        
       
        <div>
          <h3 className="font-semibold text-gray-700 mb-4" style={FONTS.models}>Basic Details</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MdPerson color={ICON_COLOR} /> <strong>Name:</strong> John Doe
            </p>
            <p className="flex items-center gap-2">
              <MdEmail color={ICON_COLOR} /> <strong>Email:</strong> john.doe@example.com
            </p>
            <p className="flex items-center gap-2">
              <MdPhone color={ICON_COLOR} /> <strong>Phone:</strong> +91 98765 45678
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn color={ICON_COLOR} /> <strong>Location:</strong> New York, USA
            </p>
            <p className="flex items-center gap-2">
              <MdAccessTime color={ICON_COLOR} /> <strong>Location Time:</strong> Mon - Fri 9 AM - 5 PM
            </p>
            <p className="flex items-center gap-2">
              <MdLanguage color={ICON_COLOR} /> <strong>Language:</strong> English
            </p>
          </div>
        </div>

      
        <div>
          <h3 className="font-semibold text-gray-700 mb-4" style={FONTS.models}>Device Details</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaGlobe color={ICON_COLOR} /> <strong>IP Address:</strong> 192.168.1.1
            </p>
            <p className="flex items-center gap-2">
              <FaDesktop color={ICON_COLOR} /> <strong>Operating System:</strong> Windows 10
            </p>
            <p className="flex items-center gap-2">
              <MdLanguage color={ICON_COLOR} /> <strong>Browser:</strong> Chrome
            </p>
          </div>
        </div>
    </div>
    </div>
    </div></div>
  );
};

export default ChatPanel;
