import { useState } from "react";
import HelpSidebar from "../../components/HelpCenter/HelpSidebar";
import ChatPanel from "../../components/HelpCenter/ChatPanel";

const HelpCenterTickets = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="h-[100%] w-full flex bg-white overflow-hidden gap-5 ">
     
      <div className="w-[400px] shrink-0">
        <HelpSidebar onSelect={() => setChatOpen(true)} />
      </div>

    
      {chatOpen && (
        <div className="flex-1">
          <ChatPanel onClose={() => setChatOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default HelpCenterTickets;
