import { useState } from "react"
import { useLocation } from "react-router-dom";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    // {
    //   id: 1,
    //   text: "Hey! How are you doing today?",
    //   isSent: false,
    //   timestamp: new Date(Date.now() - 300000),
    // },
    // {
    //   id: 2,
    //   text: "I'm doing great, thanks for asking! Just working on some projects.",
    //   isSent: true,
    //   timestamp: new Date(Date.now() - 240000),
    // },
    // {
    //   id: 3,
    //   text: "That sounds awesome! What kind of projects are you working on?",
    //   isSent: false,
    //   timestamp: new Date(Date.now() - 180000),
    // },
    // {
    //   id: 4,
    //   text: "Building a new chat application with React. It's been really fun!",
    //   isSent: true,
    //   timestamp: new Date(Date.now() - 120000),
    // },
  ])
  const [newMessage, setNewMessage] = useState("")

  const location = useLocation();
  const { formData } = location.state || {};

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        isSent: true,
        timestamp: new Date(),
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Global Chat</h1>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">{formData.name}</span>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isSent
                  ? "bg-green-500 text-white border border-green-600"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.isSent ? "text-green-100" : "text-gray-500"}`}>
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-400 px-6 py-4 fixed bottom-0 left-0 right-0">
        <div className="flex gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
