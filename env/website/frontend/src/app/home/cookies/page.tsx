// pages/cookies-policy.tsx
"use client";

import React from "react";

const CookiesPolicy: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Cookies Policy</h1>

      <p className="mb-4">
        Last updated: September 5, 2025
      </p>

      <p className="mb-6">
        This Cookies Policy explains how Career Lab Consulting (“we”, “us”, or “our”) uses cookies and similar technologies to recognize you when you visit our website at <a href="https://www.careerlabconsulting.com" className="text-blue-600 underline">https://www.careerlabconsulting.com</a>.
        It explains what these technologies are, why we use them, and your rights to control our use of them.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What are cookies?</h2>
      <p className="mb-4">
        Cookies are small data files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide functionality, and collect analytics information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why do we use cookies?</h2>
      <p className="mb-4">
        We use cookies to improve your experience on our website. Some cookies are essential for technical reasons and website functionality, while others help us analyze website traffic, deliver personalized content, and display targeted advertisements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Types of cookies we use</h2>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>
          <strong>Essential cookies:</strong> Required for basic website functionality, such as navigating pages and accessing secure areas.
        </li>
        <li>
          <strong>Performance and functionality cookies:</strong> Enhance website performance and enable additional features, non-essential but helpful for a better experience.
        </li>
        <li>
          <strong>Analytics and customization cookies:</strong> Collect information about how visitors use the website and help improve our services.
        </li>
        <li>
          <strong>Advertising cookies:</strong> Make advertising more relevant to your interests and measure the effectiveness of campaigns.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Third-party cookies</h2>
      <p className="mb-4">
        We may use trusted third-party cookies to help us understand website usage and deliver relevant advertisements. Examples include:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Google Analytics – for website analytics and traffic insights.</li>
        <li>Advertising partners – for personalized advertising and campaign measurement.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">How can you control cookies?</h2>
      <p className="mb-4">
        You can decide to accept or reject cookies by adjusting your browser settings or using the cookie controls provided on our website. Blocking certain cookies may affect the functionality and features of the site.
      </p>
      <p className="mb-4">
        Most web browsers allow you to manage cookie preferences. You can block cookies, delete existing cookies, or receive alerts when cookies are being set. Essential cookies cannot be disabled without affecting basic functionality.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to this Cookies Policy</h2>
      <p className="mb-4">
        We may update this Cookies Policy from time to time to reflect changes in technology, legal requirements, or business practices. Please revisit this page periodically to stay informed.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact us</h2>
      <p className="mb-6">
        If you have questions about our use of cookies, please contact us at <a href="mailto:info@careerlabconsulting.com" className="text-blue-600 underline">contact@careerlabconsulting.com</a>.
      </p>

      <p className="text-gray-500 text-sm">
        © 2025 – Career Lab Consulting. All rights reserved.
      </p>
    </main>
  );
};

export default CookiesPolicy;
