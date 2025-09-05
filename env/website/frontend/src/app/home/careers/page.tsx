"use client";
import React from "react";
import { motion } from "framer-motion";

const careersData = [
  { role: "AI Engineer", location: "Remote / India", link: "/careers/ai-engineer" },
  { role: "Cloud Solutions Architect", location: "Bangalore, India", link: "/careers/cloud-architect" },
  { role: "Product Manager", location: "Mumbai, India", link: "/careers/product-manager" },
  { role: "Data Scientist", location: "Remote / USA", link: "/careers/data-scientist" },
];

const CareersPage: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
          Careers at CLC
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
          Join our team of innovators and shape the future of AI, IT, and enterprise solutions worldwide.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careersData.map((career, idx) => (
            <motion.a key={idx} href={career.link} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * idx, duration: 0.6 }} className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer block text-left">
              <h3 className="text-2xl font-bold mb-2">{career.role}</h3>
              <p className="text-gray-700">{career.location}</p>
              <p className="text-blue-700 mt-2 font-semibold">Apply Now →</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
