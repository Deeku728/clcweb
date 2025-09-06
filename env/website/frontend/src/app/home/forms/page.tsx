// pages/forms.tsx
"use client";

import React, { useState } from "react";
import WorkshopRegistration from "./workshop/page";
import { motion } from "framer-motion";

/* ---------- Reusable Components ---------- */
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="backdrop-blur-lg bg-white/80 border border-gray-200 shadow-2xl rounded-3xl p-10 w-full max-w-2xl mx-auto"
  >
    {children}
  </motion.div>
);

const Input: React.FC<{ label: string; type?: string; required?: boolean }> = ({
  label,
  type = "text",
  required = false,
}) => (
  <div className="relative">
    <input
      type={type}
      required={required}
      placeholder=" "
      className="peer w-full border border-gray-300 rounded-xl p-4 pt-6 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50"
    />
    <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-600">
      {label}
    </label>
  </div>
);

const TextArea: React.FC<{ label: string; required?: boolean }> = ({
  label,
  required = false,
}) => (
  <div className="relative">
    <textarea
      required={required}
      placeholder=" "
      rows={4}
      className="peer w-full border border-gray-300 rounded-xl p-4 pt-6 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50"
    />
    <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-600">
      {label}
    </label>
  </div>
);

const Select: React.FC<{ label: string; options: string[]; required?: boolean }> = ({
  label,
  options,
  required = false,
}) => (
  <div className="relative">
    <select
      required={required}
      className="peer w-full border border-gray-300 rounded-xl p-4 pt-6 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 appearance-none"
    >
      <option value="" disabled selected hidden></option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:text-blue-600">
      {label}
    </label>
  </div>
);

/* ---------- Forms ---------- */
const GeneralQueryForm: React.FC = () => (
  <Card>
    <h2 className="text-3xl font-bold text-blue-700 mb-8">💬 General Query</h2>
    <form className="space-y-6">
      <Input label="Full Name *" required />
      <Input label="Email *" type="email" required />
      <TextArea label="Your Query *" required />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-green-300 hover:scale-[1.02] transition-transform"
      >
        🚀 Submit Query
      </button>
    </form>
  </Card>
);

const EventRegistrationForm: React.FC = () => (
  <Card>
    <h2 className="text-3xl font-bold text-purple-700 mb-8">🎟️ Event Registration</h2>
    <form className="space-y-6">
      <Input label="Full Name *" required />
      <Input label="Email *" type="email" required />
      <Select
        label="Event Name *"
        options={["AI Hackathon", "Data Science Bootcamp", "Tech Meetup"]}
        required
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-purple-300 hover:scale-[1.02] transition-transform"
      >
        🎯 Register Now
      </button>
    </form>
  </Card>
);

/* ---------- Main Page ---------- */
const FormsPage: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"workshop" | "query" | "event">("workshop");

  const buttons = [
    { id: "workshop", label: "📘 Workshop Registration", color: "blue" },
    { id: "query", label: "💬 General Query", color: "green" },
    { id: "event", label: "🎟️ Event Registration", color: "purple" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight"
      >
        ✨ Choose Your Form
      </motion.h1>

      {/* Buttons */}
      <div className="flex justify-center flex-wrap gap-6 mb-16">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveForm(btn.id as any)}
            className={`px-8 py-4 rounded-2xl font-semibold shadow-lg transition-transform hover:scale-105 ${
              activeForm === btn.id
                ? `bg-gradient-to-r from-${btn.color}-500 to-${btn.color}-700 text-white`
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Render Selected Form */}
      {activeForm === "workshop" && <WorkshopRegistration />}
      {activeForm === "query" && <GeneralQueryForm />}
      {activeForm === "event" && <EventRegistrationForm />}
    </main>
  );
};

export default FormsPage;
