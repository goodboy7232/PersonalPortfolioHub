import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 bg-card border border-border rounded-lg shadow-lg w-80 h-96"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">Chat with Us</h3>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 h-full flex items-center justify-center text-muted-foreground">
              <p className="text-center">
                Chat feature coming soon!<br />
                For now, please use our contact form or call us directly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Button
          onClick={toggleChat}
          size="icon"
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent/80 text-accent-foreground shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  );
}
