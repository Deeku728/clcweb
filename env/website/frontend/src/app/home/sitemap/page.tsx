"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SitemapPage: React.FC = () => {
  const links = ["Home", "About Us", "Services", "Solutions", "Industries", "Resources", "Careers", "Contact Us"];
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
          Sitemap
        </motion.h1>
        <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {links.map((link) => (
            <li key={link}>
              <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-blue-700 hover:underline">{link}</Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default SitemapPage;
