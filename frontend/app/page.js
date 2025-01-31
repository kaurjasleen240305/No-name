import Image from "next/image";
import "./globals.css";
import { Quote } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="flex flex-col items-center mb-20">
      <span className="logo">Zecure-Fi</span>
      <Quote className="quote">A zero-knowledge proof based finance protocol integrated with autonomous AI agent </Quote>
    </div>
  );
}
