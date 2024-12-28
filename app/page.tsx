"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import orbitalImg from "@/public/orbital.png"
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import botImg from "@/public/bot.png"
import human1 from "@/public/human1.jpeg"
import human2 from "@/public/human2.jpeg"
import logo from "@/public/logo.png"
import Link from "next/link";

export default function Home() {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className="home flex items-center gap-5 h-[100%]">
      <Image
        src={orbitalImg}
        alt="Orbital Img"
        className="absolute bottom-0 left-0 opacity-[0.05] animate-rotateOrbital -z-1"
      />
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center">
        <h1 className="text-8xl bg-gradient-to-r from-blue-color to-pink-color bg-clip-text font-extrabold text-transparent">Jarvo AI</h1>
        <h2>Powered by Google Gemini AI</h2>
        <h3 className="font-semibold max-w-[70%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ut hic fuga suscipit iste qui ipsum nobis distinctio accusantium repudiandae.</h3>
        <a href="/dashboard" className="transition-colors duration-150 rounded-2xl bg-blue-color hover:bg-white hover:text-blue-color px-4 py-2 inline-block cursor-pointer">
          Get Started
        </a>
      </div>
      
      {/* Right */}
      <div className="flex-1 flex justify-center items-center h-[100%]">

        <div className="imgContainer relative flex justify-center items-center bg-botBG-color border-r-10 w-[80%] h-[50%] rounded-3xl">

          <div className="bgContainer w-[100%] h-[100%] overflow-hidden absolute top-0 left-0 border-r-10">
            <div className="bg-bot-bg-img opacity-20 w-[200%] h-[100%] bg-auto bg-[100%] animate-slide-bg">
            </div>
          </div>
          <Image
            src={botImg}
            alt="bot Img"
            className="w-[100%] h-[100%] object-contain animate-botAnimate"
          />
          <div className="chat absolute -bottom-5 -right-5 flex items-center gap-5 p-3 text-lg rounded-lg bg-chatBG-color border-r-10">
            <Image
              src={typingStatus === "human1" ? human1 : typingStatus === "human2" ? human2 : botImg}
              alt="Bot Img"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <TypeAnimation
              sequence={[
                'Human1: Chemical formula of water?',
                2000, () => {
                  setTypingStatus("bot")
                },
                `Robot: H₂O is the chemical formula of water.`,
                2000, () => {
                  setTypingStatus("human2")
                },
                "Human2: World's most populated country?",
                2000, () => {
                  setTypingStatus("bot")
                },
                "Robot: India is the world's most populated country.",
                2000, () => {
                  setTypingStatus("human1")
                }
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>

      <div className="terms absolute bottom-5 left-[50%] transform -translate-x-[50%] flex flex-col items-center gap-5">
        <Image
          src={logo}
          alt="logo"
          className="h-5 w-5"
        />
        <div className="links flex gap-5 text-gray-300 text-xs">
          <a href="/">Terms of Service</a>
          <span>|</span>
          <a href="/">Privacy Policy</a>
        </div>
      </div>

    </div>
  );
}
