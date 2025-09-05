"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const GrievancePage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", grievance: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Grievance submitted: ${JSON.stringify(form)}`);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-red-50 via-white to-red-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold mb-6 text-red-700">
          Raise a Grievance
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-gray-700 mb-12">
          Please fill in the form below. Our team will review your concern and get back to you promptly.
        </motion.p>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl grid gap-6">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none" />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none" />
          <textarea name="grievance" placeholder="Your Grievance" value={form.grievance} onChange={handleChange} required className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none h-32" />
          <button type="submit" className="bg-red-600 text-white py-3 px-6 rounded-full font-semibold hover:scale-105 transition-transform">Submit</button>
        </motion.form>
      </div>
    </section>
  );
};

export default GrievancePage;
