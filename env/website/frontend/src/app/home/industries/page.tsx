"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users2, Cpu, Bot, Rocket } from "lucide-react";

const industriesData = [
  {
    title: "Banking & Finance",
    points: ["KYC automation", "Fraud detection", "Credit decision workbenches"],
    icon: <Cpu className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Healthcare",
    points: ["Clinical note summarization", "RAG over guidelines", "Prior authorization copilots"],
    icon: <Bot className="w-10 h-10 text-purple-600" />
  },
  {
    title: "Retail",
    points: ["Product discovery search", "Personalized promotions", "Store ops copilots"],
    icon: <Rocket className="w-10 h-10 text-red-600" />
  },
  {
    title: "Manufacturing",
    points: ["Quality inspection CV", "Maintenance copilots", "Supplier intelligence"],
    icon: <Users2 className="w-10 h-10 text-green-600" />
  },
];

const IndustriesPage: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
          Industries We Serve
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
          Tailored AI and IT solutions across multiple industries for enhanced productivity and innovation.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industriesData.map((industry, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * idx, duration: 0.6 }} className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
              <ul className="text-gray-700 list-disc list-inside">
                {industry.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;
