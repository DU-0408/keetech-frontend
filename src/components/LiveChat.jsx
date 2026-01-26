import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const quickOptions = [
  { id: 1, label: "Get a Quote", keyword: "quote" },
  { id: 2, label: "Maintenance & Service", keyword: "maintenance" },
  { id: 3, label: "New Installation", keyword: "installation" },
  { id: 4, label: "Emergency Support", keyword: "emergency" },
  { id: 5, label: "Business Hours", keyword: "hours" },
];

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset chat when opened
  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setShowOptions(true);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('quote')) {
      return "For a detailed quote, I'd recommend filling out our quote form or calling us at +91 98874 00555. Our team will provide a customized estimate based on your specific needs.";
    }
    if (lowerMsg.includes('maintenance') || lowerMsg.includes('service')) {
      return "We offer comprehensive maintenance packages including 24/7 emergency support. Would you like me to connect you with our service team?";
    }
    if (lowerMsg.includes('installation') || lowerMsg.includes('install')) {
      return "Our installation process is tailored to each project. Typical timelines range from 4-16 weeks depending on complexity. Would you like to schedule a consultation?";
    }
    if (lowerMsg.includes('emergency') || lowerMsg.includes('urgent')) {
      return "For emergencies, please call our 24/7 hotline at +91 98874 00555 immediately. Our technicians are available around the clock.";
    }
    if (lowerMsg.includes('hours') || lowerMsg.includes('open')) {
      return "Our office is open Monday-Friday, 8 AM to 6 PM. However, our emergency support is available 24/7!";
    }
    
    return "Thank you for your message! A member of our team will get back to you shortly. For immediate assistance, call us at +91 98874 00555.";
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
    
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: option.label,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        message: getBotResponse(option.keyword),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setShowOptions(true);
    }, 1500);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setShowOptions(false);

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        message: getBotResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setShowOptions(true);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 max-w-[calc(100vw-3rem)] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">KEE-Tech Support</p>
                <p className="text-primary-foreground/70 text-sm">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {/* Welcome Message */}
            <div className="flex justify-start chat-bubble">
              <div className="max-w-[80%] p-3 rounded-2xl bg-secondary text-foreground rounded-bl-md">
                <p className="text-sm">Hi! 👋 How can I help you today?</p>
              </div>
            </div>

            {/* Chat Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} chat-bubble`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-secondary text-foreground rounded-bl-md'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-md p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Options - appear after messages */}
            {showOptions && !isTyping && (
              <div className="flex flex-wrap gap-2">
                {quickOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="px-3 py-2 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="rounded-xl"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-primary hover:bg-primary/90 rounded-xl flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chat-float-btn w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
          isOpen 
            ? 'bg-foreground text-background' 
            : 'bg-primary text-primary-foreground animate-pulse-glow'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default LiveChat;
