// pages/workshop/page.tsx
"use client";

import React, { useState } from "react";

const WorkshopRegistration: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  // Helper: Get next N workshop dates (Tue=2, Fri=5, Sun=0)
  const getUpcomingWorkshops = (count: number) => {
    const days = [2, 5, 0]; // Tue, Fri, Sun
    const today = new Date();
    const upcoming: { day: string; date: Date }[] = [];
    let current = new Date(today);

    while (upcoming.length < count) {
      current.setDate(current.getDate() + 1); // move forward day by day
      const dayNum = current.getDay();
      if (days.includes(dayNum)) {
        const dayName =
          dayNum === 0 ? "Sunday" : dayNum === 2 ? "Tuesday" : "Friday";
        upcoming.push({ day: dayName, date: new Date(current) });
      }
    }
    return upcoming;
  };

  const workshopDates = getUpcomingWorkshops(3);

  // Handle form submit
// inside handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const raw = Object.fromEntries(formData.entries());

  // Map frontend → backend
  const data = {
    full_name: raw.FullName,
    email: raw.Email,
    whatsapp: raw.WhatsApp,
    referral_source: raw.ReferralSource || "",
    language: raw.Language || "",
    background: raw.Background,
    workshop_date: raw.WorkshopDate,
    career_goal: raw.CareerGoal || "",
    ai_experience: raw.AIExperience || "",
    consent: raw.Consent === "on", // checkbox → boolean
  };

  try {
    const res = await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ Registration successful!");
    } else {
      const err = await res.json();
      console.error(err);
      alert("❌ Error: " + JSON.stringify(err));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Failed to connect to server.");
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-3">
           AI Workshop Registration
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in your details below to secure your spot. <br />
          You’ll receive confirmation + reminders via WhatsApp & Email.
        </p>

        <form className="space-y-7" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              Full Name * <span className="text-sm text-gray-500">(For certificate & tracking)</span>
            </label>
            <input
              type="text"
              name="FullName"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              Email Address * <span className="text-sm text-gray-500">(Primary communication channel)</span>
            </label>
            <input
              type="email"
              name="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              required
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              WhatsApp Number * <span className="text-sm text-gray-500">(For reminders, badge, follow-up)</span>
            </label>
            <input
              type="tel"
              name="WhatsApp"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              required
            />
          </div>

          {/* How did you know */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              How did you know about this AI Workshop..?
            </label>
            <select
              name="ReferralSource"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            >
              <option value="">Select</option>
              <option value="Friends">Friends</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Instagram">Instagram</option>
              <option value="College">College</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              Your Preferred Language for Workshop..?
            </label>
            <select
              name="Language"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            >
              <option value="">Select</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Bilingual">Bilingual</option>
            </select>
          </div>

          {/* Background */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              Educational / Work Background *
            </label>
            <input
              type="text"
              name="Background"
              placeholder="E.g. B.Tech Final Year, Fresher"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
              required
            />
          </div>

          {/* Preferred Dates */}
          <div>
            <label className="block font-semibold mb-3 text-gray-800">
              Choose your preferred Date for the live workshop *
            </label>
            <div className="space-y-3">
              {workshopDates.map(({ day, date }, idx) => {
                const formatted = `${day} (${date.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })})`;

                return (
                  <label
                    key={idx}
                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer shadow-sm transition hover:shadow-md ${
                      idx === 0 ? "bg-green-50 border-green-400" : "bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="WorkshopDate"
                      value={formatted}
                      checked={selectedDate === formatted}
                      onChange={() => setSelectedDate(formatted)}
                      required
                      className="h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-800 font-medium">
                      {formatted}
                      {idx === 0 && (
                        <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                          Next Session
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Career Goal */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              What is your current career goal?
            </label>
            <select
              name="CareerGoal"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            >
              <option value="">Select</option>
              <option value="Get Internship">Get Internship</option>
              <option value="Get Job">Get Job</option>
              <option value="Higher Studies">Higher Studies</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
            </select>
          </div>

          {/* AI Tool Used */}
          <div>
            <label className="block font-semibold mb-2 text-gray-800">
              Have you ever used an AI tool before?
            </label>
            <select
              name="AIExperience"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="Consent"
              required
              className="mt-1 h-5 w-5 text-blue-600 rounded"
            />
            <span className="text-gray-700 text-sm leading-5">
              I consent to receive reminders and updates via WhatsApp/Email
            </span>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-12 py-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-0.5"
            >
              Register Now 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkshopRegistration;
