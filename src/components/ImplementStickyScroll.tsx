"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicContent = [
  {
    "title": "Soothing Symphony",
    "description": "Immerse yourself in a tranquil journey with this collection of calming melodies. Let the gentle notes wash over you, easing your mind and lifting your spirits."
  },
  {
    "title": "Energetic Beats",
    "description": "Get ready to groove with these high-energy tracks that'll keep you moving and motivated. From pulsating rhythms to infectious hooks, this playlist is your ultimate source of adrenaline."
  },
  {
    "title": "Mellow Vibes",
    "description": "Unwind and relax with this selection of laid-back tunes. Perfect for lazy afternoons or cozy evenings, these tracks will envelop you in a cocoon of warmth and serenity."
  },
  {
    "title": "Epic Soundscapes",
    "description": "Embark on an epic adventure with these cinematic masterpieces. From sweeping orchestral arrangements to powerful crescendos, let your imagination run wild as you traverse vast musical landscapes."
  },
  {
    "title": "Retro Grooves",
    "description": "Take a trip down memory lane with this nostalgic playlist of retro hits. Whether you're a fan of the '80s, '90s, or beyond, these timeless classics will transport you to a bygone era."
  }
]

function ImplementStickyScroll() {
  return (
    <div>
      <StickyScroll content={musicContent}/>
    </div>
  )
}

export default ImplementStickyScroll