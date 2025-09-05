"use client";
import React from "react";
import { Cpu, Server, Bot, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const servicesData = [
  {
    icon: <Cpu className="w-10 h-10 text-blue-600" />,
    title: "IT Consulting",
    desc: "Enterprise architecture, strategy, cloud adoption, security & compliance."
  },
  {
    icon: <Server className="w-10 h-10 text-green-600" />,
    title: "IT Services",
    desc: "Platform engineering, APIs, data platforms, and managed operations."
  },
  {
    icon: <Bot className="w-10 h-10 text-purple-600" />,
    title: "AI Services",
    desc: "Generative AI, RAG, NLP, MLOps, and evaluation-first delivery."
  },
  {
    icon: <Rocket className="w-10 h-10 text-red-600" />,
    title: "Agentic AI",
    desc: "Multi-agent systems, orchestration, guardrails, and audits."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24 px-6">
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
        >
          From strategy to production, we deliver next-generation IT and AI services for global enterprises.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl shadow-lg"
        >
          <p className="text-xl md:text-2xl font-semibold mb-2">
            Want to explore our services in detail?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
