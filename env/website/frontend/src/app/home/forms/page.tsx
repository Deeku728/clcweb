// pages/workshop-registration.tsx
"use client";

import React, { useState } from "react";

interface Registration {
  timestamp: string;
  fullName: string;
  email: string;
  whatsappNumber: string;
  referral: string;
  preferredLanguage: string;
  background: string;
  preferredDates: string;
  careerGoal: string;
  aiExperience: string;
  consent: boolean;
  workshopEmail?: string;
  workshopStatus?: string;
  teamLeader?: string;
  srBDE?: string;
  meetingStatus?: string;
  enrollmentStatus?: string;
  remarks?: string;
}

const WorkshopRegistration: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [form, setForm] = useState<Partial<Registration>>({
    timestamp: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox"
        ? (e.target instanceof HTMLInputElement ? e.target.checked : false)
        : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.whatsappNumber || !form.consent) {
      alert("Please fill required fields and consent to continue.");
      return;
    }
    setRegistrations([...registrations, form as Registration]);
    setForm({ timestamp: new Date().toISOString() }); // reset form
    alert("Registration submitted successfully!");
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">AI Workshop Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1">
            Full Name* <span className="text-gray-500">(For certificate & tracking)</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">
            Email Address* <span className="text-gray-500">(Primary communication channel)</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block font-semibold mb-1">
            WhatsApp Number* <span className="text-gray-500">(For reminders, badge, follow-up)</span>
          </label>
          <input
            type="tel"
            name="whatsappNumber"
            value={form.whatsappNumber || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Referral */}
        <div>
          <label className="block font-semibold mb-1">How did you know about this AI Workshop..?</label>
          <input
            type="text"
            name="referral"
            value={form.referral || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Preferred Language */}
        <div>
          <label className="block font-semibold mb-1">Your Preferred Language for Workshop..?</label>
          <select
            name="preferredLanguage"
            value={form.preferredLanguage || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Background */}
        <div>
          <label className="block font-semibold mb-1">Educational / Work Background*</label>
          <input
            type="text"
            name="background"
            value={form.background || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder='e.g., "B.Tech Final Year", "Fresher"'
          />
        </div>

        {/* Preferred Dates */}
        <div>
          <label className="block font-semibold mb-1">
            Choose your preferred Date(s) for the live workshop
          </label>
          <input
            type="text"
            name="preferredDates"
            value={form.preferredDates || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="You may attend more than one date"
          />
        </div>

        {/* Career Goal */}
        <div>
          <label className="block font-semibold mb-1">What is your current career goal?</label>
          <input
            type="text"
            name="careerGoal"
            value={form.careerGoal || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* AI Experience */}
        <div>
          <label className="block font-semibold mb-1">Have you ever used an AI tool before?</label>
          <select
            name="aiExperience"
            value={form.aiExperience || ""}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Consent */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent || false}
            onChange={handleChange}
            required
          />
          <label>I consent to receive communications regarding this workshop.</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Registration
        </button>
      </form>

      {/* Registration Table */}
      {registrations.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Workshop Registrations</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Timestamp</th>
                  <th className="border p-2">Full Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">WhatsApp</th>
                  <th className="border p-2">Referral</th>
                  <th className="border p-2">Language</th>
                  <th className="border p-2">Background</th>
                  <th className="border p-2">Preferred Dates</th>
                  <th className="border p-2">Career Goal</th>
                  <th className="border p-2">AI Experience</th>
                  <th className="border p-2">Consent</th>
                  <th className="border p-2">Workshop Status</th>
                  <th className="border p-2">Team Leader</th>
                  <th className="border p-2">Sr. BDE</th>
                  <th className="border p-2">Meeting Status</th>
                  <th className="border p-2">Enrollment Status</th>
                  <th className="border p-2">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, idx) => (
                  <tr key={idx} className="text-sm">
                    <td className="border p-1">{reg.timestamp}</td>
                    <td className="border p-1">{reg.fullName}</td>
                    <td className="border p-1">{reg.email}</td>
                    <td className="border p-1">{reg.whatsappNumber}</td>
                    <td className="border p-1">{reg.referral}</td>
                    <td className="border p-1">{reg.preferredLanguage}</td>
                    <td className="border p-1">{reg.background}</td>
                    <td className="border p-1">{reg.preferredDates}</td>
                    <td className="border p-1">{reg.careerGoal}</td>
                    <td className="border p-1">{reg.aiExperience}</td>
                    <td className="border p-1">{reg.consent ? "Yes" : "No"}</td>
                    <td className="border p-1">{reg.workshopStatus || ""}</td>
                    <td className="border p-1">{reg.teamLeader || ""}</td>
                    <td className="border p-1">{reg.srBDE || ""}</td>
                    <td className="border p-1">{reg.meetingStatus || ""}</td>
                    <td className="border p-1">{reg.enrollmentStatus || ""}</td>
                    <td className="border p-1">{reg.remarks || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
};

export default WorkshopRegistration;
