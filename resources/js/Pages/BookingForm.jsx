import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingForm = () => {
  return (
    <div className="p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Vehicle Booking Request</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Purpose */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Purpose of Travel</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter travel purpose"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">End Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Pickup Location</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Head Office</option>
                  <option>Branch Office</option>
                  <option>Mine Site 1</option>
                  <option>Mine Site 2</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Mine Site 1</option>
                  <option>Mine Site 2</option>
                  <option>Mine Site 3</option>
                  <option>Mine Site 4</option>
                </select>
              </div>
            </div>

            {/* Vehicle Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Vehicle Type</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Passenger Vehicle</option>
                <option>Cargo Vehicle</option>
              </select>
            </div>

            {/* Number of Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Passengers</label>
              <input
                type="number"
                min="1"
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Notes</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows="3"
                placeholder="Any special requirements or additional information"
              />
            </div>

            {/* Approvers */}
            <div className="space-y-2">
              <label className="text-sm font-medium">First Level Approver</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Department Head - John Smith</option>
                <option>Site Manager - Jane Doe</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Second Level Approver</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Operations Director - Michael Johnson</option>
                <option>Regional Manager - Sarah Williams</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
