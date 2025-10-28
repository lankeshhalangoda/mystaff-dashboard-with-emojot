"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface ComplaintDetailProps {
  complaintId: number
  onBack: () => void
}

export function ComplaintDetail({ complaintId, onBack }: ComplaintDetailProps) {
  const [activeTab, setActiveTab] = useState("comments")
  const [detailsExpanded, setDetailsExpanded] = useState(true)
  const [additionalFieldsExpanded, setAdditionalFieldsExpanded] = useState(true)
  const [comment, setComment] = useState("")

  return (
    <div className="flex-1 flex overflow-hidden bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Poor Room Service Response Time</h1>
          <p className="text-sm text-gray-500">Last Updated - 08-Jan-2025 | 09:18 AM</p>

          <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-200">
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Customer Name:</span> Sarah Mitchell
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Customer Email:</span> sarah.mitchell@gmail.com
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Customer Telephone:</span> +94771234567
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">NPS Rating :</span> 4
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Comment :</span> Room service took over 45 minutes to deliver breakfast.
              Staff was apologetic but the delay was unacceptable for a 5-star hotel.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "comments"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("comments")}
              >
                Comments
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "journey"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("journey")}
              >
                Complaint Journey
              </button>
            </div>
          </div>

          {/* Comments Tab Content */}
          {activeTab === "comments" && (
            <div className="p-6">
              {/* Comment Input */}
              <div className="mb-6">
                <Textarea
                  placeholder="Add your comment here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px] mb-3"
                />
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      👍 Looks good!
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      ✍️ Working on this!
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      😕 Needs further review.
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      ❓ Can you please clarify this?
                    </Button>
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
                    <Send className="h-4 w-4" />
                    Post
                  </Button>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-gray-600">JD</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">John Doe</span>
                      <span className="text-xs text-gray-500">08-Jan-2025 09:18 AM</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Thank you for bringing this to our attention. I've escalated this to our F&B manager and we're
                      implementing new protocols to ensure faster room service delivery. We sincerely apologize for the
                      inconvenience.
                    </p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Resolved</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
        {/* Status Dropdown */}
        <div className="p-4 border-b">
          <Select defaultValue="resolved">
            <SelectTrigger className="w-full bg-blue-500 text-white border-blue-500 hover:bg-blue-600">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Details Section */}
        <div className="border-b">
          <button
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
            onClick={() => setDetailsExpanded(!detailsExpanded)}
          >
            <span className="font-semibold text-blue-600 text-sm">DETAILS</span>
            {detailsExpanded ? (
              <ChevronUp className="h-4 w-4 text-blue-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-blue-600" />
            )}
          </button>
          {detailsExpanded && (
            <div className="px-4 pb-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Assign To</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="-" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">john.doe@emojot.com</SelectItem>
                    <SelectItem value="sarah">sarah.smith@emojot.com</SelectItem>
                    <SelectItem value="david">david.wilson@emojot.com</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Assignee Email</label>
                <Input value="john.doe@emojot.com" readOnly className="text-sm text-gray-700 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Priority</label>
                <Input value="Medium" readOnly className="text-sm text-blue-600 bg-white border-0 px-0" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Channel</label>
                <Input
                  value="Guest Satisfaction Survey"
                  readOnly
                  className="text-sm text-gray-700 bg-white border-0 px-0"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
            onClick={() => setAdditionalFieldsExpanded(!additionalFieldsExpanded)}
          >
            <span className="font-semibold text-blue-600 text-sm">ADDITIONAL FIELDS</span>
            {additionalFieldsExpanded ? (
              <ChevronUp className="h-4 w-4 text-blue-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-blue-600" />
            )}
          </button>
          {additionalFieldsExpanded && (
            <div className="px-4 pb-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Complaint Type</label>
                <Input value="Room Service" readOnly className="text-sm text-gray-700 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Location</label>
                <Input value="Cinnamon Grand Colombo" readOnly className="text-sm text-gray-700 bg-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
