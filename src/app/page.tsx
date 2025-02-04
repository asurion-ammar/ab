"use client";

import { useState, useEffect } from "react";
import { gtmEvent } from "../lib/gtm-event";

export default function Home() {
  const [buttonVariant, setButtonVariant] = useState<"blue" | "green">("blue");

  useEffect(() => {
    // Assign users randomly to "green" or "blue" button
    const variant = Math.random() < 0.5 ? "green" : "blue";
    setButtonVariant(variant);

    // Send A/B test event to Google Tag Manager
    gtmEvent("ab_test_assignment", {
      experiment: "button_color_test",
      variant: variant,
    });
  }, []);

  const handleClick = () => {
    gtmEvent("button_clicked", {
      experiment: "button_color_test",
      variant: buttonVariant,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter text..."
          className="border p-2 rounded w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Button 1
          </button>
          <button
            className={`px-4 py-2 rounded text-white ${
              buttonVariant === "green"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={handleClick}
          >
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
}
