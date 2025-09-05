// src/app/about/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Users2 } from "lucide-react";

const AboutPage: React.FC = () => {

  // --- AboutUs component inside this page ---
  const AboutUs: React.FC = () => {
    return (
      <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24 px-6">

        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700"
          >
            About Career Lab Consulting
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Established in 2015, Career Lab Consulting Pvt Ltd is a pioneer in Artificial Intelligence innovation, dedicated to building next-generation solutions for a global workforce. Career Lab specializes in Artificial Intelligence, Generative AI, and Agentic AI—delivering intelligent automation, decision-making systems, and scalable AI solutions that empower enterprises to transform their business operations and drive exponential growth.
          </motion.p>

          {/* Highlights / Mission & Contact */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Stylized Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  AI
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Stylized Logo</h3>
              <p className="text-gray-700">
                A green geometric logo resembling overlapping lines forms the central focus, representing innovation and growth.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-blue-500 font-bold text-2xl">
                  AI
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-700">
                A glowing neon sign displaying 'AI' on a dark textured wall, evoking cutting-edge technology.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="mb-4">
                <Users2 className="w-12 h-12 mx-auto text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                We specialize in artificial intelligence, delivering intelligent automation and scalable solutions to empower enterprises and drive growth.
              </p>
            </motion.div>
          </div>

          {/* AI Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-3xl mx-auto text-left bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl p-8 shadow-lg"
          >
            <p className="text-lg md:text-xl font-semibold mb-4">
              At CLC, we help organizations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>✅ Reimagine processes with Generative AI tools</li>
              <li>✅ Deploy Agentic AI systems for automation & efficiency</li>
              <li>✅ Create AI-driven career roadmaps for teams and leaders</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-purple-700">
              👉 The question is no longer “Should we adopt AI?”<br />
              It’s “How fast can we integrate it into our business to stay ahead?”
            </p>
            <p className="mt-4 text-gray-800 font-medium">
              Let’s build the future of work together.
            </p>
          </motion.div>
        </div>
      </section>
    );
  };

  return <AboutUs />;
};

export default AboutPage;
