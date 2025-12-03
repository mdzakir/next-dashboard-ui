import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-sm text-blue-600 cursor-pointer">View All</span>
      </div>
      <div className="bg-gray-100 rounded-lg mb-2">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold mb-2">New Semester Begins</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md p-1">
              Aug 15, 2024
            </span>
          </div>
          <p className="text-sm text-gray-600">
            We are excited to announce that the new semester will begin on
            September 1st. Please make sure to check your schedules and be
            prepared for the upcoming classes.
          </p>
        </div>
      </div>
      <div className="bg-purple-100 rounded-lg mb-2">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold mb-2">Science Exhibition</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md p-1">
              Sep 10, 2024
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Join us for the annual Science Exhibition where students will
            showcase their innovative projects. It's a great opportunity to
            explore and learn about the latest scientific advancements.
          </p>
        </div>
      </div>
      <div className="bg-orange-50 rounded-lg">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold mb-2">Holiday Announcement</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md p-1">
              Oct 3, 2024
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Please note that the institution will be closed on October 5th in
            observance of the national holiday. Classes and administrative
            offices will resume on October 6th.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
