"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Crown, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const quotes = [
  {
    text: "The only way to do great work is to love what you do. ",
    author: "Steve Jobs",
    explanation:
      "This quote emphasizes the importance of passion in one's work. When you love your job, it doesn't feel like work, leading to greater creativity, dedication, and ultimately, better results.",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    explanation:
      "This highlights the crucial role of innovation in leadership. Leaders are those who think differently and push boundaries, while followers simply adhere to established norms.",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    explanation:
      "This quote encourages continuous learning and risk-taking. 'Stay hungry' means always be eager to learn more, while 'stay foolish' suggests maintaining a willingness to take risks and think outside the box.",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    explanation:
      "This is a call to authenticity and following your own path. It reminds us that life is short and we should spend it pursuing our own dreams and values, not conforming to others' expectations.",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    explanation:
      "This quote emphasizes that good design goes beyond aesthetics. It's about functionality, user experience, and how well something serves its purpose, not just its visual appeal.",
  },
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const generateQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === currentQuote);
    setCurrentQuote(newQuote);
    setDisplayedText("");
    setIndex(0);
  };

  useEffect(() => {
    if (index < currentQuote.text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + currentQuote.text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index, currentQuote.text]);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap");
        body {
          font-family: "Playfair Display", serif;
          background-color: #000000;
          color: #ffffff;
        }
      `}</style>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <header className="py-4 bg-[#1a1a1a] border-b border-[#333333]">
          <h1 className="text-2xl text-center">Timeless Wisdom</h1>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
          <Crown className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-8 text-white" />
          <blockquote className="mb-4 max-w-2xl relative px-4 sm:px-0">
            <p className="text-2xl sm:text-4xl mb-2 leading-relaxed italic min-h-[100px] sm:min-h-[150px]">
              &ldquo;{displayedText}&rdquo;
            </p>
            <footer className="text-lg sm:text-xl text-[#bdbdbd]">
              - {currentQuote.author}
            </footer>
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  className="absolute -right-2 sm:-right-8 top-0 text-white hover:text-[#bdbdbd] transition-colors"
                  aria-label="Show explanation"
                >
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#1a1a1a] text-white border-[#333333] w-[90vw] max-w-lg sm:w-full">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl mb-4">Quote Explanation</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <blockquote className="text-lg sm:text-xl italic">&ldquo;{currentQuote.text}&rdquo;</blockquote>
                  <p className="text-sm sm:text-base text-[#bdbdbd]">{currentQuote.explanation}</p>
                </div>
              </DialogContent>
            </Dialog>
          </blockquote>

          <Button
            onClick={() => generateQuote()}
            className="text-lg sm:text-xl py-4 sm:py-6 px-6 sm:px-8 bg-white text-black hover:bg-[#e0e0e0] transition-colors mb-4"
          >
            Generate New Quote
          </Button>
        </main>
        <footer className="py-4 bg-[#1a1a1a] text-center text-xs sm:text-sm border-t border-[#333333] text-[#bdbdbd]">
          &copy; {new Date().getFullYear()} Timeless Wisdom. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}
