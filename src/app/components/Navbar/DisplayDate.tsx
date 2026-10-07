"use client";

import { useEffect, useState } from "react";

export default function DisplayDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      });

      setDate(today);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return <p className="text-sm text-gray-500">{date || "তারিখ লোড হচ্ছে..."}</p>;
}