import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { BsThreeDotsVertical } from "react-icons/bs";
import { ChevronDown, Send, Paperclip, X } from 'lucide-react'

interface Ticket {
  id: string
  user: string
  avatar: string
  title: string
  timestamp: string
  status: 'Opened' | 'Closed'
  priority: 'Low' | 'Medium' | 'High'
}

interface Message {
  id: string
  ticketId: string
  sender: string
  content: string
  timestamp: string
  isUser: boolean
}

interface UserProfile {
  name: string
  email: string
  phone: string
  location: string
  locationTime: string
  language: string
  ipAddress: string
  operatingSystem: string
  browser: string
  role: string
}

const tickets: Ticket[] = [
  {
    id: '1',
    user: 'Chandran',
    avatar: '/placeholder.svg?height=40&width=40',
    title: 'Testing Purpose',
    timestamp: '4 Month Ago',
    status: 'Opened',
    priority: 'Low'
  },
  {
    id: '2',
    user: 'Chandran',
    avatar: '/placeholder.svg?height=40&width=40',
    title: 'Test the Ticket Management System',
    timestamp: '4 Month Ago',
    status: 'Opened',
    priority: 'Medium'
  },
  {
    id: '3',
    user: 'Chandran',
    avatar: '/placeholder.svg?height=40&width=40',
    title: 'Testing Purpose',
    timestamp: '2 Month Ago',
    status: 'Opened',
    priority: 'Low'
  },
  {
    id: '4',
    user: 'Chandran',
    avatar: '/placeholder.svg?height=40&width=40',
    title: 'Testing Purpose',
    timestamp: '4 Month Ago',
    status: 'Opened',
    priority: 'Low'
  }
]

const userProfiles: Record<string, UserProfile> = {
  'Chandran': {
    name: 'Chandran R',
    email: 'chandran.r@example.com',
    phone: '+91 98765 45678',
    location: 'New York, USA',
    locationTime: 'Mon - Fri 9 AM - 5 PM',
    language: 'English',
    ipAddress: '192.168.1.1',
    operatingSystem: 'Windows 10',
    browser: 'Chrome',
    role: 'Institute Admin'
  }
}

const initialTicketMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1-1',
      ticketId: '1',
      sender: 'Support',
      content: 'Hi there, how can I assist you with your testing today?',
      timestamp: '10:15 AM',
      isUser: false
    },
    {
      id: '1-2',
      ticketId: '1',
      sender: 'Chandran',
      content: 'I need help with setting up test cases for the new authentication module.',
      timestamp: '10:17 AM',
      isUser: true
    },
    {
      id: '1-3',
      ticketId: '1',
      sender: 'Support',
      content: 'I can definitely help with that. Could you share more details about what specific test scenarios you need to cover?',
      timestamp: '10:19 AM',
      isUser: false
    },
    {
      id: '1-4',
      ticketId: '1',
      sender: 'Chandran',
      content: 'We need to test login with valid/invalid credentials, password reset flow, and session timeout functionality.',
      timestamp: '10:22 AM',
      isUser: true
    },
    {
      id: '1-5',
      ticketId: '1',
      sender: 'Support',
      content: 'Got it. I\'ll prepare test cases for these scenarios. Would you like me to include edge cases like special characters in passwords?',
      timestamp: '10:25 AM',
      isUser: false
    },
    {
      id: '1-6',
      ticketId: '1',
      sender: 'Chandran',
      content: 'Yes, please include those edge cases. Also, we need to verify the error messages are user-friendly.',
      timestamp: '10:28 AM',
      isUser: true
    }
  ],
  '2': [
    {
      id: '2-1',
      ticketId: '2',
      sender: 'Support',
      content: 'Hello, I understand you\'re testing the ticket management system. How can I help?',
      timestamp: '9:30 AM',
      isUser: false
    },
    {
      id: '2-2',
      ticketId: '2',
      sender: 'Chandran',
      content: 'We\'re experiencing issues with ticket assignment notifications. They don\'t always reach the assigned agent.',
      timestamp: '9:32 AM',
      isUser: true
    },
    {
      id: '2-3',
      ticketId: '2',
      sender: 'Support',
      content: 'I see. Are you using email notifications or in-app notifications? And is this happening for all agents or specific ones?',
      timestamp: '9:35 AM',
      isUser: false
    },
    {
      id: '2-4',
      ticketId: '2',
      sender: 'Chandran',
      content: 'Both types seem affected. It appears random - sometimes notifications work, sometimes they don\'t. No pattern by agent.',
      timestamp: '9:38 AM',
      isUser: true
    },
    {
      id: '2-5',
      ticketId: '2',
      sender: 'Support',
      content: 'Thanks for the details. I\'ll check our notification logs. In the meantime, could you provide timestamps of specific failed notifications?',
      timestamp: '9:42 AM',
      isUser: false
    },
    {
      id: '2-6',
      ticketId: '2',
      sender: 'Chandran',
      content: 'Here are three examples from yesterday: Ticket #4567 at 2:15 PM, #4568 at 3:30 PM, and #4570 at 4:45 PM.',
      timestamp: '9:45 AM',
      isUser: true
    },
    {
      id: '2-7',
      ticketId: '2',
      sender: 'Support',
      content: 'Appreciate the examples. I\'ve found the issue - there was a queue processing delay during those times. We\'re implementing a fix that should be deployed by EOD today.',
      timestamp: '10:00 AM',
      isUser: false
    }
  ],
  '3': [
    {
      id: '3-1',
      ticketId: '3',
      sender: 'Support',
      content: 'Good morning! Regarding your testing purpose ticket from 2 months ago - is this still an active issue?',
      timestamp: '11:05 AM',
      isUser: false
    },
    {
      id: '3-2',
      ticketId: '3',
      sender: 'Chandran',
      content: 'Yes, we need to revisit the performance testing for the reporting module under heavy load conditions.',
      timestamp: '11:07 AM',
      isUser: true
    },
    {
      id: '3-3',
      ticketId: '3',
      sender: 'Support',
      content: 'Understood. We\'ve made some optimizations since your last test. What load parameters would you like to test with this time?',
      timestamp: '11:10 AM',
      isUser: false
    },
    {
      id: '3-4',
      ticketId: '3',
      sender: 'Chandran',
      content: 'We need to simulate 500 concurrent users generating reports with complex filters. Last time the system slowed significantly at 300 users.',
      timestamp: '11:12 AM',
      isUser: true
    },
    {
      id: '3-5',
      ticketId: '3',
      sender: 'Support',
      content: 'Our recent database indexing improvements should help. I\'ll prepare a test environment with monitoring tools so we can identify any remaining bottlenecks.',
      timestamp: '11:15 AM',
      isUser: false
    },
    {
      id: '3-6',
      ticketId: '3',
      sender: 'Chandran',
      content: 'Perfect. Please include response time metrics for each report type. We need this data for our compliance documentation.',
      timestamp: '11:18 AM',
      isUser: true
    }
  ],
  '4': [
    {
      id: '4-1',
      ticketId: '4',
      sender: 'Support',
      content: 'Hi Chandran, I see you opened a ticket about notification testing. What specifically would you like to verify?',
      timestamp: '2:00 PM',
      isUser: false
    },
    {
      id: '4-2',
      ticketId: '4',
      sender: 'Chandran',
      content: 'We need to confirm all notification types are working after the recent platform update: assignment alerts, status changes, and due date reminders.',
      timestamp: '2:02 PM',
      isUser: true
    },
    {
      id: '4-3',
      ticketId: '4',
      sender: 'Support',
      content: 'I can help test these. Would you like to do this together in a test environment, or should I run through the scenarios and share results?',
      timestamp: '2:05 PM',
      isUser: false
    },
    {
      id: '4-4',
      ticketId: '4',
      sender: 'Chandran',
      content: 'Let\'s do it together - I can share my screen. Are you available now?',
      timestamp: '2:06 PM',
      isUser: true
    },
    {
      id: '4-5',
      ticketId: '4',
      sender: 'Support',
      content: 'Yes, I\'m available. I\'ll set up the test environment. Please initiate the screen share when ready.',
      timestamp: '2:08 PM',
      isUser: false
    },
    {
      id: '4-6',
      ticketId: '4',
      sender: 'Chandran',
      content: 'Great, joining now. First, let\'s test the ticket assignment flow between different departments.',
      timestamp: '2:10 PM',
      isUser: true
    },
    {
      id: '4-7',
      ticketId: '4',
      sender: 'Support',
      content: 'I see the notification came through instantly on your end. Let me check the email delivery logs... yes, the email was also sent successfully.',
      timestamp: '2:15 PM',
      isUser: false
    },
    {
      id: '4-8',
      ticketId: '4',
      sender: 'Chandran',
      content: 'Excellent. Now let\'s test the escalation notifications when a ticket approaches its SLA deadline.',
      timestamp: '2:17 PM',
      isUser: true
    }
  ]
};

const HelpcenterTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(tickets[0])
  const [messageInput, setMessageInput] = useState<string>('')
  const [ticketMessages, setTicketMessages] = useState<Record<string, Message[]>>(initialTicketMessages)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [selectedUserProfile, setSelectedUserProfile] = useState<UserProfile | null>(null)

 const handleSendMessage = () => {
  if (messageInput.trim()) {
    const timestamp = new Date().toISOString(); // ISO format for timestamp
    const userId = "66152b8fe43cda58126a2356";  // Hardcoded or dynamic
    const ticketId = selectedTicket.id; // Assuming this is your UUID

    const formattedMessage = {
      senderType: "Users",
      text: messageInput,
      ticket_id: ticketId,
      timestamp,
      user: userId
    };

    console.log(formattedMessage); // 👉 logs to console
 
    // Local UI update
    const newMessage: Message = {
      id: `${ticketId}-${Date.now()}`,
      ticketId,
      sender: selectedTicket.user,
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true
    };

    setTicketMessages(prev => ({
      ...prev,
      [ticketId]: [...(prev[ticketId] || []), newMessage]
    }));

    setMessageInput('');
  }
};

  const handleAvatarClick = (userName: string) => {
    const profile = userProfiles[userName]
    if (profile) {
      setSelectedUserProfile(profile)
      setIsProfileModalOpen(true)
    }
  }

  return (
    <div className="flex gap-2 bg-white ">
      {/* Left Sidebar */}
      <div className="max-h-screen  bg-white border border-gray-100 transition-shadow duration-200 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
        {/* Search Bar */}
        <div className="p-3 border-gray-200">
          <Input 
            placeholder="Search"
            className="w-full rounded-lg bg-gray-50 border-[#999999]"
          />
        </div>
        {/* Tickets List */}
        <ScrollArea className="flex-1 p-3 scrollbar-hide bg-white h-[calc(100vh-73px)]">
          <div className="p-1 bg-white ">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className={`p-3 cursor-pointer my-2 bg-white rounded-xl border border-gray-100 transition-shadow duration-200 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] border-l-4 ${
                  selectedTicket.id === ticket.id 
                    ? 'bg-gray-50 border-l-[#68b39f]'
                    : 'hover:bg-gray-50 border-l-transparent'
                }`}
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className="flex items-start space-x-3 ">
                  <div className="relative ">
                    <Avatar 
                      className="w-10 h-10 cursor-pointer hover:ring-2 hover:ring-[#68b39f] transition-all"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAvatarClick(ticket.user)
                      }}
                    >
                      <AvatarImage src={ticket.avatar || "/placeholder.svg"} alt={ticket.user} />
                      <AvatarFallback className="bg-orange-400 text-white">{ticket.user[0]}</AvatarFallback>
                    </Avatar>
                    
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm text-gray-900">
                        {ticket.user}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {ticket.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {ticket.title}
                    </p>
                   <div className="flex items-center mt-8 ml-8 space-x-2">
                    {/* Status Badge */}
                    <Badge
                      className="px-4 py-1 text-white bg-[#68b39f] text-sm font-medium h-auto rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
                    >
                      {ticket.status}
                    </Badge>
                                      
                    {/* Priority Badge */}
                    <Badge
                      variant="outline"
                      className={`px-4 py-1 text-sm font-medium h-auto rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none
                        ${
                          ticket.priority === 'Low'
                            ? 'border-[#68b39f] text-[#68b39f] bg-white'
                            : ticket.priority === 'Medium'
                            ? 'border-[#68b39f] text-[#68b39f] bg-white'
                            : 'border-red-300 text-red-600 bg-red-50'
                        }
                      `}
                    >
                      {ticket.priority}
                    </Badge>
                  </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-screen bg-white">
        {/* Chat Header */}
        <div className="shrink-0 bg-white border-b rounded-xl border-gray-400 px-6 py-4 transition-shadow duration-200 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar 
                className="w-10 h-10 cursor-pointer hover:ring-2 hover:ring-[#68b39f] transition-all"
                onClick={() => handleAvatarClick(selectedTicket.user)}
              >
                <AvatarImage src={selectedTicket.avatar || "/placeholder.svg"} alt={selectedTicket.user} />
                <AvatarFallback className="bg-orange-400 text-white">{selectedTicket.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-gray-900">{selectedTicket.user} R</h2>
                <p className="text-sm text-gray-500">Institute Admin</p>
              </div>
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-4 bg-white">
          <div className="space-y-4">
            {ticketMessages[selectedTicket.id]?.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
                  {!message.isUser && (
                    <Avatar className="w-8 h-8 mb-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Support" />
                      <AvatarFallback className="bg-blue-500 text-white text-xs">S</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="space-y-1">
                    <div
                      className={`px-4 py-3 rounded-2xl   bg-white border border-gray-100 transition-shadow duration-200 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] ${
                        message.isUser
                          ? 'bg-[#68b39f] text-white rounded-br-md'
                          : 'bg-white text-gray-900 rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    {message.timestamp && (
                      <p className={`text-xs px-2 ${
                        message.isUser ? 'text-right text-gray-500' : 'text-left text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    )}
                  </div>
                  {message.isUser && (
                    <Avatar 
                      className="w-8 h-8 mb-1 cursor-pointer hover:ring-2 hover:ring-[#68b39f] transition-all"
                      onClick={() => handleAvatarClick(selectedTicket.user)}
                    >
                      <AvatarImage src={selectedTicket.avatar || "/placeholder.svg"} alt={selectedTicket.user} />
                      <AvatarFallback className="bg-orange-400 text-white">{selectedTicket.user[0]}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="shrink-0 xbg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 rounded-full bg-gray-50 border-gray-200 px-4"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-[#68b39f] hover:bg-teal-600 rounded-full p-3"
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="max-w-md mt-70 ml-70 bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
          <div className="relative">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 rounded-full bg-gray-100 hover:bg-gray-200 w-8 h-8 p-0"
              onClick={() => setIsProfileModalOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center space-x-3 mb-6">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt={selectedUserProfile?.name} />
                  <AvatarFallback className="bg-orange-400 text-white text-lg">
                    {selectedUserProfile?.name?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-[#242731]">{selectedUserProfile?.name}</h3>
                  <p className="text-sm text-[#999999]">{selectedUserProfile?.role}</p>
                </div>
              </div>

              {/* Basic Details */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#242731] mb-4">Basic Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#242731] mb-1 block">Name</label>
                    <Input 
                      value={selectedUserProfile?.name || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Email</label>
                    <Input 
                      value={selectedUserProfile?.email || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Phone</label>
                    <Input 
                      value={selectedUserProfile?.phone || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Location</label>
                    <Input 
                      value={selectedUserProfile?.location || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Location Time</label>
                    <Input 
                      value={selectedUserProfile?.locationTime || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Language</label>
                    <Input 
                      value={selectedUserProfile?.language || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                </div>
              </div>

              {/* Device Details */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Device Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">IP Address</label>
                    <Input 
                      value={selectedUserProfile?.ipAddress || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Operating System</label>
                    <Input 
                      value={selectedUserProfile?.operatingSystem || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm text-gray-600 mb-1 block">Browser</label>
                    <Input 
                      value={selectedUserProfile?.browser || ''} 
                      readOnly 
                      className="bg-white border-[#999999] text-sm text-[#999999]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default HelpcenterTickets;
