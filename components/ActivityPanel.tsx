import React from 'react';
import { FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const ActivityPanel = () => {
    return (
        <div className="activity-panel">
            <section className="tabs mt-6">
                <div className="flex space-x-4 border-b-2 border-gray-200">
                    <button className="py-2 px-4 text-[#3c5365] border-b-2 border-[#3c5365]">Activity</button>
                    <button className="py-2 px-4 text-gray-600">Actionables</button>
                    <button className="py-2 px-4 text-gray-600">Tasks</button>
                    <button className="py-2 px-4 text-gray-600">Lead Details</button>
                    <button className="py-2 px-4 text-gray-600">Notes & File</button>
                </div>
            </section>
            <section className="actions flex space-x-4 mt-4 bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center space-x-2 px-2 py-2 border-r border-gray-200">
                    <FaPhone className="text-blue-500" />
                    <span className="text-gray-700">Log a Call</span>
                </div>
                <div className="flex items-center space-x-2 px-2 py-2 border-r border-gray-200">
                    <FaEnvelope className="text-green-500" />
                    <span className="text-gray-700">Email</span>
                </div>
                <div className="flex items-center space-x-2 px-2 py-2">
                    <FaCalendarAlt className="text-yellow-500" />
                    <span className="text-gray-700">Event</span>
                </div>
            </section>
            <div className="form mt-6 bg-white shadow-md rounded-lg p-6">
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-gray-600 mb-2">Subject</label>
                        <input type="text" id="subject" placeholder="Subject" className="w-full border rounded px-4 py-2" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="add-people" className="text-gray-600 mb-2">Add People</label>
                        <input type="text" id="add-people" placeholder="Add People" className="w-full border rounded px-4 py-2" />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="date" className="text-gray-600 mb-2">Date</label>
                            <input type="date" id="date" className="border rounded px-4 py-2" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="time" className="text-gray-600 mb-2">Time</label>
                            <input type="time" id="time" className="border rounded px-4 py-2" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-gray-600 mb-2">Description</label>
                        <textarea id="description" placeholder="Description" className="w-full border rounded px-4 py-2"></textarea>
                    </div>
                    <div className="flex justify-between">
                        <p>Add a Team member</p>
                        <button type="submit" className="bg-[#0f3451] text-white px-4 py-2 rounded">Submit</button>
                    </div>
                </form>
                <div className="upcoming-overdue mt-6">
                    <h5 className="text-lg font-semibold">Upcoming & Overdue</h5>
                    {/* Example list of activities */}
                    <p className="text-gray-700">Arrange a Call</p>
                    <p className="text-gray-700">Follow Up Email</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityPanel;