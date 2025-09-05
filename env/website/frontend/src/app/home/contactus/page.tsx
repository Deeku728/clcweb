"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/YourPage" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/YourProfile" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/YourProfile" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/YourProfile" }
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24 px-6">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Have questions or want to work with us? Fill out the form below or reach us through the provided contact details.
        </p>

        {/* Grid: Form + Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-blue-700">Get in Touch</h2>
              <p className="text-gray-700">
                We’d love to hear from you! Reach out to us via email, phone, or social media.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-gray-700">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
                <span><p>D-43, 1st Floor, Sector 28, Noida, Uttar Pradesh 201303</p>
          <p>A-32, 2nd Floor, Shantipura Main Rd, Phase 2, Electronic City, Bengaluru, Karnataka 560100</p>
          </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-green-600 w-6 h-6" />
                <span> +91 87002 36923</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-600 w-6 h-6" />
                <span>Info@careerlabconsulting.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition text-2xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 h-96 w-full rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="location-map"
            src="https://maps.google.com/maps?q=tech%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
