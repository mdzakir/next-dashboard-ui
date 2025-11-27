"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    date: "12:00 PM - 2:00 PM",
    title: "Board Meeting",
    description: "Annual board meeting to discuss school policies.",
  },
  {
    id: 2,
    date: "10:00 AM - 12:00 PM",
    title: "Parent-Teacher Conference",
    description:
      "Meetings between parents and teachers to discuss student progress.",
  },
  {
    id: 3,
    date: "1:00 PM - 3:00 PM",
    title: "School Anniversary",
    description: "Celebrating the founding of the school with various events.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col">
        {events.map((event) => (
          <div
            key={event.id}
            className="border-b last:border-0 p-5 hover:bg-gray-100 rounded-md"
          >
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-xs text-gray-500">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
