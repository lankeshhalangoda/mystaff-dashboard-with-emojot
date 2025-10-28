"use client"

import { useState } from "react"
import { Mail, Edit, Search, Eye, RefreshCw, Grid3x3, Trash2, ChevronDown } from "lucide-react"

const contactsData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    telephone: "+1-555-0101",
    lastActive: "2025-09-04 | 4:34 pm",
    totalEmotes: 192,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    telephone: "+1-555-0102",
    lastActive: "2025-09-04 | 3:40 pm",
    totalEmotes: 64,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@example.com",
    telephone: "+1-555-0103",
    lastActive: "2025-09-04 | 3:36 pm",
    totalEmotes: 64,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    telephone: "+1-555-0104",
    lastActive: "2025-09-04 | 3:29 pm",
    totalEmotes: 64,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "d.wilson@example.com",
    telephone: "+1-555-0105",
    lastActive: "2025-09-04 | 4:09 pm",
    totalEmotes: 64,
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    telephone: "+1-555-0106",
    lastActive: "2025-09-04 | 2:32 pm",
    totalEmotes: 64,
  },
  {
    id: 7,
    name: "James Taylor",
    email: "j.taylor@example.com",
    telephone: "+1-555-0107",
    lastActive: "2025-09-04 | 3:40 pm",
    totalEmotes: 64,
  },
  {
    id: 8,
    name: "Jennifer Martinez",
    email: "jennifer.m@example.com",
    telephone: "+1-555-0108",
    lastActive: "2025-09-04 | 2:39 pm",
    totalEmotes: 64,
  },
  {
    id: 9,
    name: "Robert Garcia",
    email: "r.garcia@example.com",
    telephone: "+1-555-0109",
    lastActive: "2025-09-04 | 4:18 pm",
    totalEmotes: 256,
  },
  {
    id: 10,
    name: "Maria Rodriguez",
    email: "maria.r@example.com",
    telephone: "+1-555-0110",
    lastActive: "2025-09-04 | 3:35 pm",
    totalEmotes: 64,
  },
]

export function CommCenter() {
  const [activeTab, setActiveTab] = useState("contacts")
  const [isMasked, setIsMasked] = useState(true)

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-5 py-3 text-sm ${
            activeTab === "contacts" ? "font-semibold text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("contacts")}
        >
          Contacts
        </button>
        <button
          className={`px-5 py-3 text-sm ${
            activeTab === "campaigns" ? "font-semibold text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("campaigns")}
        >
          Campaigns
        </button>
        <button
          className={`px-5 py-3 text-sm ${
            activeTab === "lists" ? "font-semibold text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("lists")}
        >
          Lists
        </button>
        <button
          className={`px-5 py-3 text-sm ${
            activeTab === "settings" ? "font-semibold text-gray-900 border-b-2 border-gray-900" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 bg-gray-50">
        <div className="mb-4 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded text-sm text-blue-700">
          Some features (Contact searching, Uploading, Filters) are not available until you unmask PII data
        </div>

        {/* Filter settings */}
        <details className="mb-4">
          <summary className="cursor-pointer text-sm text-gray-600 flex items-center gap-2">
            Filter settings
            <ChevronDown className="h-4 w-4" />
          </summary>
        </details>

        {/* Upload section */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-sm text-gray-700">Upload customer data</span>
          <span className="text-sm text-gray-600">
            Choose CSV (or{" "}
            <a href="#" className="text-teal-600 hover:underline">
              Download sample csv
            </a>
            )
          </span>
          <button className="px-4 py-1.5 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded">Upload</button>
        </div>

        <div className="mb-4 flex items-center justify-between bg-white border border-gray-200 rounded px-3 py-2">
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <RefreshCw className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <Edit className="h-4 w-4 text-gray-600" />
            </button>
            <input type="checkbox" className="h-4 w-4" />
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded text-sm text-gray-700">
              <Mail className="h-4 w-4" />
              Compose
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <Edit className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <Grid3x3 className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <Trash2 className="h-4 w-4 text-gray-600" />
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded text-sm text-gray-700">
              <Eye className="h-4 w-4" />
              Columns
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded text-sm text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              CSV
            </button>
            <span className="text-xs text-gray-600 ml-1">List selected</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-50">
              Save to list
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-50">
              Mask PII
            </button>
            <button
              onClick={() => setIsMasked(!isMasked)}
              className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-xs rounded"
            >
              Unmask PII
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4 flex items-center gap-2 justify-end">
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm">
            <option>Telephone</option>
            <option>Name</option>
            <option>Email</option>
          </select>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search value..."
              className="border border-gray-300 rounded-l px-3 py-1.5 text-sm w-64"
            />
            <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="w-10 py-2.5 px-3"></th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-700">
                  Name
                  <span className="ml-1 text-gray-400">⇅</span>
                </th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-700">
                  Email
                  <span className="ml-1 text-gray-400">⇅</span>
                </th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-700">
                  Telephone
                  <span className="ml-1 text-gray-400">⇅</span>
                </th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-700">
                  Last active
                  <span className="ml-1 text-gray-400">⇅</span>
                </th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-700">
                  Total emotes
                  <span className="ml-1 text-gray-400">⇅</span>
                </th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-700">
                  Respondent journey
                  <span className="ml-1 text-gray-400">⇅</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {contactsData.map((contact, index) => (
                <tr
                  key={contact.id}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="py-2.5 px-3">
                    <input type="checkbox" className="h-4 w-4" />
                  </td>
                  <td className="py-2.5 px-3 text-sm text-gray-900">{isMasked ? "xxxx" : contact.name}</td>
                  <td className="py-2.5 px-3 text-sm text-gray-900">{isMasked ? "xxxx" : contact.email}</td>
                  <td className="py-2.5 px-3 text-sm text-gray-900">{isMasked ? "xxxx" : contact.telephone}</td>
                  <td className="py-2.5 px-3 text-sm text-gray-600">{contact.lastActive}</td>
                  <td className="py-2.5 px-3 text-sm text-gray-900">{contact.totalEmotes}</td>
                  <td className="py-2.5 px-3">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing 1 to 12 of 12 entries</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-teal-500 text-white rounded text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
