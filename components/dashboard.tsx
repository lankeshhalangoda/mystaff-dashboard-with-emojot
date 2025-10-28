"use client"

import { CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const COLORS = ["#10b981", "#f59e0b", "#3b82f6", "#ef4444", "#8b5cf6"]

const nationalityData = [
  { name: "Bahrain", value: 2 },
  { name: "Pakistan", value: 2 },
  { name: "Saudi Arabia", value: 2 },
  { name: "United States", value: 1 },
  { name: "Canada", value: 1 },
]

const leaveTypeData = [
  { type: "Annual Leave", employees: "8.00", days: "15.00", amount: "00.00" },
  { type: "Marriage Leave", employees: "12.00", days: "00.00", amount: "0.000" },
]

const leaveBarData = [
  { name: "Annual Leave", value: 30 },
  { name: "Sick Leave", value: 25 },
]

export function Dashboard() {
  console.log("[v0] Rendering dashboard with nationality data:", nationalityData)
  console.log("[v0] Colors array:", COLORS)

  return (
    <section className="bg-white rounded-lg shadow-md border border-gray-200 h-full">
      <div className="px-6 py-4 border-b border-gray-300 bg-white">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      </div>
      <CardContent className="p-6 space-y-6 bg-gray-50">
        {/* Top Section with Tables and Pie Chart */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Nationality Table */}
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="bg-gray-900 text-white px-3 py-2 flex justify-between text-xs font-medium">
              <span>Nationality-E</span>
              <div className="flex gap-6">
                <span>Count</span>
                <span>%</span>
              </div>
            </div>
            <div className="divide-y divide-gray-200 text-xs">
              <div className="flex justify-between px-3 py-2 hover:bg-gray-50">
                <span className="text-gray-700">Admin</span>
                <div className="flex gap-6 w-24 justify-end text-gray-900">
                  <span>2</span>
                  <span>00.00</span>
                </div>
              </div>
              <div className="flex justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100">
                <span className="text-gray-700">Bahrain</span>
                <div className="flex gap-6 w-24 justify-end text-gray-900">
                  <span>2</span>
                  <span>00.00</span>
                </div>
              </div>
              <div className="flex justify-between px-3 py-2 hover:bg-gray-50">
                <span className="text-gray-700">Pakistan</span>
                <div className="flex gap-6 w-24 justify-end text-gray-900">
                  <span>2</span>
                  <span>00.00</span>
                </div>
              </div>
              <div className="flex justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100">
                <span className="text-gray-700">Saudi</span>
                <div className="flex gap-6 w-24 justify-end text-gray-900">
                  <span>1</span>
                  <span>00.00</span>
                </div>
              </div>
              <div className="flex justify-between px-3 py-2 font-semibold bg-gray-100 border-t-2 border-gray-300">
                <span className="text-gray-900">Total</span>
                <div className="flex gap-6 w-24 justify-end text-gray-900">
                  <span>10</span>
                  <span>100.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pie Chart - Replaced Recharts with static image */}
          <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white">
            <div className="text-xs text-center mb-3 font-semibold text-gray-900">Staff Nationality Distribution</div>
            <div className="flex justify-center items-center h-[200px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mystaff2-cYG29o9B21kZcfWHHSkg0msuuKFXwC.png"
                alt="Staff Nationality Distribution Donut Chart"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-[10px] mt-3">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full shadow-sm bg-[#10b981]" />
                <span className="text-gray-700">Bahrain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full shadow-sm bg-[#f59e0b]" />
                <span className="text-gray-700">Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full shadow-sm bg-[#3b82f6]" />
                <span className="text-gray-700">Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full shadow-sm bg-[#ef4444]" />
                <span className="text-gray-700">United States</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full shadow-sm bg-[#8b5cf6]" />
                <span className="text-gray-700">Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leave Type Table */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="bg-gray-100 px-3 py-2.5 grid grid-cols-4 text-xs font-semibold border-b border-gray-200 text-gray-900">
            <span>Leave Type</span>
            <span className="text-center">No of Employees</span>
            <span className="text-center">Days</span>
            <span className="text-right">Amount</span>
          </div>
          <div className="divide-y divide-gray-200 text-xs">
            {leaveTypeData.map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 px-3 py-2.5 hover:bg-gray-50">
                <span className="text-gray-700">{item.type}</span>
                <span className="text-center text-gray-900">{item.employees}</span>
                <span className="text-center text-gray-900">{item.days}</span>
                <span className="text-right text-gray-900">{item.amount}</span>
              </div>
            ))}
            <div className="grid grid-cols-4 px-3 py-2.5 font-semibold bg-gray-100 border-t-2 border-gray-300">
              <span className="text-gray-900">Total</span>
              <span className="text-center text-gray-900">18</span>
              <span className="text-center text-gray-900">00.00</span>
              <span className="text-right text-gray-900">00.00</span>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white">
          <div className="text-xs text-gray-600 mb-3 font-medium">Type of Leaves and Number of Days</div>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={leaveBarData} layout="horizontal">
              <XAxis type="number" tick={{ fontSize: 10 }} stroke="#9ca3af" />
              <YAxis dataKey="name" type="category" width={90} tick={{ fontSize: 10 }} stroke="#9ca3af" />
              <Bar dataKey="value" fill="#22c55e" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </section>
  )
}
