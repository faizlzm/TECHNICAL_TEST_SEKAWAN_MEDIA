import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const ApprovalInterface = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pending Approvals</h1>
          <div className="flex gap-4">
            <select className="p-2 border rounded-lg">
              <option>All Requests</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        {/* Approval Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((request) => (
            <Card key={request}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {/* Request Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Site Visit - Mine Location {request}</h3>
                      <p className="text-sm text-gray-500">Requested by: Alex Johnson</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Date</p>
                        <p className="text-sm text-gray-500">Dec 15, 2024</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Time</p>
                        <p className="text-sm text-gray-500">09:00 - 17:00</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Vehicle Type</p>
                        <p className="text-sm text-gray-500">Passenger Vehicle</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Passengers</p>
                        <p className="text-sm text-gray-500">4 people</p>
                      </div>
                    </div>

                    {/* Approval Status */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Approval Status</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Department Head</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm">Operations Director</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex md:flex-col justify-end gap-4">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
                      <XCircle className="h-4 w-4" />
                      Reject
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovalInterface;
