"use client";

import React from "react";
import { motion } from "framer-motion";

const DisclaimerPage: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 text-center"
        >
          Disclaimer
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
            <h2 className="text-2xl font-bold mb-2">1. No Professional Advice</h2>
            <p>All content is for informational purposes only. It does not constitute professional, legal, financial, or business advice. Consult professionals before making decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">2. Limitation of Liability</h2>
            <p>CLC is not liable for direct, indirect, incidental, consequential, or special damages, loss of profits, revenue, or data, or decisions made based on website content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">3. Third-Party Content</h2>
            <p>Our website may include third-party content. CLC does not endorse or assume responsibility for third-party content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">4. Accuracy of Information</h2>
            <p>While reasonable efforts are made to provide accurate information, CLC makes no guarantees regarding completeness or reliability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">5. External Links</h2>
            <p>Our website may contain links to external websites. CLC is not responsible for their content, privacy practices, or policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">6. Changes to Disclaimer</h2>
            <p>CLC may update this Disclaimer at any time. Updates will be posted on this page, and continued use constitutes acceptance of changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">7. Contact Information</h2>
            <ul className="list-disc list-inside">
              <li>Career Lab Consulting Pvt Ltd</li>
              <li>Email: <a href="mailto:legal@careerlabconsulting.com" className="text-blue-600 underline">legal@careerlabconsulting.com</a></li>
              <li>Phone:+91 87002 36923</li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  );
};

export default DisclaimerPage;
