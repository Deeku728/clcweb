"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Rocket } from "lucide-react";

const solutionsData = [
  { icon: <Cpu className="w-10 h-10 text-blue-600" />, title: "AI Platforms", desc: "End-to-end AI platforms for enterprises to innovate faster." },
  { icon: <Bot className="w-10 h-10 text-purple-600" />, title: "Agentic AI", desc: "Autonomous AI agents for real-time decision-making and automation." },
  { icon: <Rocket className="w-10 h-10 text-red-600" />, title: "Cloud Solutions", desc: "Secure, scalable cloud infrastructure with DevOps automation." },
];

const SolutionsPage: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-purple-50 via-white to-blue-50 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
          Our Solutions
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
          Innovative AI-driven solutions designed to transform enterprise operations and accelerate growth.
        </motion.p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * idx, duration: 0.6 }} className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-700">{solution.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-transform">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPage;
