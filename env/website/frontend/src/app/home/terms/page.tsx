"use client";

import React from "react";
import { motion } from "framer-motion";

const TermsOfUsePage: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24 px-6">
      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600 text-center"
        >
          Terms of Use
        </motion.h1>

        {/* Effective Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 mb-12 text-center"
        >
          Effective Date: September 2025
        </motion.p>

        <div className="space-y-8 text-gray-700">

          <section>
            <h2 className="text-2xl font-bold mb-2">1. Use of Our Website</h2>
            <ul className="list-disc list-inside">
              <li>You may use our website and services only for lawful purposes.</li>
              <li>Do not violate laws, attempt unauthorized access, distribute illegal content, or disrupt our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">2. Intellectual Property</h2>
            <p>All content, logos, graphics, software, and materials on this website are owned by CLC or our licensors and protected by law.</p>
            <ul className="list-disc list-inside">
              <li>Do not reproduce, distribute, or publicly display any content without written permission.</li>
              <li>Do not modify or create derivative works or use our intellectual property for commercial purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">3. Accounts and Security</h2>
            <ul className="list-disc list-inside">
              <li>You are responsible for your login credentials and all activity under your account.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">4. Third-Party Links and Services</h2>
            <p>We may include links to third-party websites or services. We do not control these sites and are not responsible for their content, privacy, or availability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">5. Limitation of Liability</h2>
            <p>CLC shall not be liable for:</p>
            <ul className="list-disc list-inside">
              <li>Any direct, indirect, incidental, consequential, or special damages.</li>
              <li>Loss of data, profits, or business interruption.</li>
            </ul>
            <p>Our services are provided “as-is” and “as-available” without warranties of any kind.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">6. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless CLC, its affiliates, officers, and employees from any claims or expenses arising from your use of the website or violation of these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">7. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of the courts in India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">8. Changes to Terms</h2>
            <p>CLC may update these Terms periodically. Continued use of the website constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
            <ul className="list-disc list-inside">
              <li>Career Lab Consulting Pvt Ltd</li>
              <li>Email: <a href="mailto:legal@careerlabconsulting.com" className="text-blue-600 underline">info@careerlabconsulting.com</a></li>
              <li>Phone: +91-XXXXXXXXXX</li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  );
};

export default TermsOfUsePage;
