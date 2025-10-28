"use client"

import { CardContent } from "@/components/ui/card"
import { Pencil, Maximize2 } from "lucide-react"

const employees = [
  { id: "100008", name: "Roopa Ahmed Mohammed" },
  { id: "100007", name: "Maryam Abdul Shaffer" },
  { id: "100001", name: "Abdulla Adnan Ahmed" },
  { id: "100002", name: "Mohammed Ahmed Salman" },
  { id: "100001", name: "Abdulla Adnan Ahmed" },
  { id: "100003", name: "Tony Morones Fernandez" },
  { id: "100007", name: "Maryam Abdul Shaffer" },
  { id: "100004", name: "Maan Ahmed Ali" },
  { id: "100005", name: "Syed Ifran Khan" },
  { id: "100006", name: "Sameer Singh Rajput" },
  { id: "100008", name: "Roopa Ahmed Mohammed" },
  { id: "100009", name: "Nixon Francis Rebeiro" },
]

const months = [
  { name: "Apr 28, 2019", label: "Leave Begins" },
  { name: "May 05, 2019", label: "Leave Calendar" },
  { name: "May 12, 2019", label: "Leave Ends" },
]

const weekDays = ["F", "S", "S", "M", "T", "W", "T", "F", "S", "S"]

export function Leaves() {
  return (
    <section className="bg-white rounded-lg shadow-sm">
      <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Leaves</h2>
      </div>
      <CardContent className="p-3 sm:p-4 lg:p-6">
        <div className="flex gap-2 mb-4">
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <Pencil className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <Maximize2 className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="min-w-[600px] md:min-w-0 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Header Row */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <div className="w-20 p-3 border-r border-gray-200 text-xs font-semibold flex items-center text-gray-900">
                E Code
              </div>
              <div className="w-48 p-3 border-r border-gray-200 text-xs font-semibold flex items-center text-gray-900">
                Employee
              </div>
              <div className="flex-1 flex">
                {months.map((month, idx) => (
                  <div key={idx} className="flex-1 border-r border-gray-200 last:border-r-0">
                    <div className="p-3 text-center text-xs font-semibold border-b border-gray-200 text-gray-900">
                      {month.name}
                    </div>
                    <div className="flex border-b border-gray-200 bg-white">
                      {weekDays.map((day, dayIdx) => (
                        <div
                          key={dayIdx}
                          className="flex-1 p-2 text-center text-[10px] border-r border-gray-200 last:border-r-0 text-gray-600 font-medium"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="p-2 text-center text-[10px] bg-gray-900 text-white font-medium">{month.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Rows */}
            {employees.map((employee, idx) => (
              <div
                key={idx}
                className="flex border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="w-20 p-3 border-r border-gray-200 text-xs text-gray-700">{employee.id}</div>
                <div className="w-48 p-3 border-r border-gray-200 text-xs truncate text-gray-900">{employee.name}</div>
                <div className="flex-1 flex">
                  {months.map((month, monthIdx) => (
                    <div key={monthIdx} className="flex-1 border-r border-gray-200 last:border-r-0 relative">
                      <div className="h-14 relative p-2">
                        {/* Sample leave bars - different patterns for different employees */}
                        {idx === 5 && monthIdx === 0 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-lime-400 rounded shadow-sm" />
                        )}
                        {idx === 6 && monthIdx === 0 && (
                          <div className="absolute left-[60%] right-2 top-3 h-7 bg-lime-400 rounded shadow-sm" />
                        )}
                        {idx === 0 && monthIdx === 1 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-teal-500 rounded shadow-sm" />
                        )}
                        {idx === 1 && monthIdx === 1 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-teal-600 rounded shadow-sm" />
                        )}
                        {idx === 2 && monthIdx === 1 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-teal-600 rounded shadow-sm" />
                        )}
                        {idx === 3 && monthIdx === 1 && (
                          <div className="absolute left-2 right-[30%] top-3 h-7 bg-teal-600 rounded shadow-sm" />
                        )}
                        {idx === 4 && monthIdx === 2 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-pink-500 rounded shadow-sm" />
                        )}
                        {idx === 8 && monthIdx === 2 && (
                          <div className="absolute left-2 right-[20%] top-3 h-7 bg-teal-600 rounded shadow-sm" />
                        )}
                        {idx === 10 && monthIdx === 2 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-pink-500 rounded shadow-sm" />
                        )}
                        {idx === 11 && monthIdx === 2 && (
                          <div className="absolute left-2 right-2 top-3 h-7 bg-pink-500 rounded shadow-sm flex items-center justify-end pr-2">
                            <div className="h-6 w-6 bg-gray-900 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white text-[10px] font-bold">+</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </section>
  )
}
