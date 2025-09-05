"use client";
import React from "react";
import { motion } from "framer-motion";

const resources = [
  { title: "Whitepapers", desc: "Insights on AI, cloud, and enterprise IT.", link: "/resources/whitepapers" },
  { title: "Case Studies", desc: "Real-world implementations of AI solutions.", link: "/resources/case-studies" },
  { title: "Blogs", desc: "Latest trends and thought leadership articles.", link: "/resources/blogs" },
  { title: "Webinars", desc: "Interactive sessions with industry experts.", link: "/resources/webinars" },
];

const ResourcesPage: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
          Resources
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
          Explore our knowledge base, case studies, webinars, and blogs to understand the future of AI in business.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, idx) => (
            <motion.a key={idx} href={res.link} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * idx, duration: 0.6 }} className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform cursor-pointer block text-left">
              <h3 className="text-2xl font-bold mb-2">{res.title}</h3>
              <p className="text-gray-700">{res.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
