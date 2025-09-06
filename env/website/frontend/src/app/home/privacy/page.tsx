// pages/privacy-policy.tsx
"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">Last Updated: September 5, 2025</p>

      <p className="mb-4">
        Career Lab Consulting (“we”, “us”, or “our”) is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and share your personal information when you interact with our website, services, and applications (“Services”).
      </p>
      <p className="mb-6">
        By using our Services, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use our Services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Information You Provide:</strong> Name, email, phone, mailing address, account login details, payment info via secure processors, job title, company info, and any other information you voluntarily provide.</li>
          <li><strong>Information Collected Automatically:</strong> IP address, browser type, device information, usage data, and analytics.</li>
          <li><strong>Social Media Login Data:</strong> Public profile info if you register using social media accounts.</li>
          <li><strong>Sensitive Information:</strong> We do not process sensitive personal information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Account creation, authentication, and management</li>
          <li>Providing, delivering, and improving our Services</li>
          <li>Responding to inquiries or customer support requests</li>
          <li>Sending administrative or service-related communications</li>
          <li>Managing orders, payments, returns, and exchanges</li>
          <li>Enabling user-to-user communications (if applicable)</li>
          <li>Conducting surveys or requesting feedback</li>
          <li>Protecting our Services and monitoring fraud</li>
          <li>Delivering targeted advertising and marketing communications (with your consent)</li>
          <li>Analyzing trends and improving Services and marketing campaigns</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Legal Bases for Processing</h2>
        <p className="text-gray-700 mb-2">
          Depending on your location, we may rely on legal bases such as:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Consent</li>
          <li>Contractual necessity</li>
          <li>Legal obligations</li>
          <li>Legitimate interests</li>
          <li>Vital interests</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Service Providers (payment processors, email services, hosting, analytics)</li>
          <li>Business Partners & Affiliates</li>
          <li>In connection with Business Transfers (mergers, acquisitions)</li>
          <li>Other Users (public interactions)</li>
          <li>With Your Consent for any other purposes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
        <p className="text-gray-700">
          We use cookies, pixels, and similar technologies to enhance user experience, analyze traffic, and deliver personalized content. You can manage or disable cookies in your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. AI-Based Services</h2>
        <p className="text-gray-700">
          Some Services may use AI technologies. Any personal data provided to AI features will be handled according to this Privacy Policy. AI outputs are not used for automated decision-making without human oversight.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
        <p className="text-gray-700">
          We retain personal information only as long as necessary to provide Services or comply with legal obligations. Information no longer needed will be deleted or anonymized.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
        <p className="text-gray-700">
          We implement reasonable technical and organizational measures to protect your data, but no method of transmission or storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Children’s Privacy</h2>
        <p className="text-gray-700">
          Our Services are not for children under 18. If you believe we have collected data from a minor, contact us to request deletion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Your Privacy Rights</h2>
        <p className="text-gray-700 mb-2">
          Depending on your location, you may have rights such as accessing, updating, or deleting your data, opting out of marketing, and controlling cookies.
        </p>
        <p className="text-gray-700">
          To exercise these rights, contact us at <a href="Info@careerlabconsulting.com" className="text-blue-600 underline">Info@careerlabconsulting.com</a> or via our contact form.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Updates to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy periodically. Changes will be posted with an updated “Last Updated” date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
        <p className="text-gray-700">
          For questions, concerns, or to exercise your privacy rights, contact us:  
          <br />
          <strong>Email:</strong> <a href="mailto:Info@careerlabconsulting.com" className="text-blue-600 underline">Info@careerlabconsulting.com</a>  
          <br />
          <strong>Contact Form:</strong> <a href="/contactus/page" className="text-blue-600 underline"></a>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
