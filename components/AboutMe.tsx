"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 bg-grey-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-text-primary mb-12 text-center"
        >
          My Story
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden border border-moss/30">
              <Image
                src="/Me.jpg"
                alt="Tommy Minter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              I've been fascinated by computers and video games for as long as I can remember. I grew up watching my older brothers play, too young to join in but completely absorbed. From the outside it felt like magic, entire worlds unfolding, characters inspiring every emotion imaginable, and a screen pulling in even the adults around me. That sense of wonder never left.
            </p>
            <p>
              I'd love to say I followed that fascination straight into programming, but that isn't how things went.
            </p>
            <p>
              I spent many years cooking, probably more than I planned. I wasn't a strong student early on, and being told I was bad at math and science convinced me that programming simply wasn't for me. So I leaned into my other passion, cooking. I enjoyed it and I was good at it, but deep down I knew it wasn't the path I wanted for the rest of my life.
            </p>
            <p>
              Eventually, with the world on pause and encouragement from my brothers, friends, and partner, I took the first step. During the pandemic I taught myself everything I could, small projects, online courses, late nights relearning the basics I once thought I couldn't grasp. That eventually led me to a bootcamp where I built momentum and confidence.
            </p>
            <p>
              When the world opened back up I went back to the kitchen, but my brother Phillip saw what I was trying to ignore, that I wasn't happy and that programming, especially for games, was still calling me. Pursuing that made sense. It always had.
            </p>
            <p>
              So I enrolled in Vancouver Film School's Programming for Games, Web, and Mobile program. It ended up being one of the best decisions I've ever made. I learned that not only am I smart enough to chase this dream, I'm actually pretty good at it. And more importantly, I rediscovered the feeling I had as a kid watching those games: excitement, curiosity, and possibility.
            </p>
            <p>
              I still have a lot to learn and I want to keep growing, but now I'm armed with the knowledge, experience, and confidence to build the career I've always wanted. I'm excited for what comes next and I can't wait to be part of this industry.
            </p>
            <p className="text-text-primary font-medium pt-4">
              Thanks for reading,<br />
              Tommy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
