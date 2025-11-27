import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap4 flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl-w-2/3">
        <div className=" bg-white h-full p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Schedule (4A)</h3>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* event calendar */}
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
