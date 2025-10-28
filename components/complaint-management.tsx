"use client"

import { useState } from "react"
import { Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

const complaints = [
  {
    id: 4,
    title: "xxxx",
    realTitle: "Poor Room Service Response Time",
    assignee: "xxxx",
    realAssignee: "john.doe@emojot.com",
    priority: "Medium",
    status: "Resolved",
    channel: "Guest Satisfaction Survey",
    name: "xxxx",
    realName: "Sarah Mitchell",
    email: "xxxx",
    realEmail: "sarah.mitchell@gmail.com",
    created: "08-Jan-2025 | 08:20 AM",
    lastUpdated: "08-Jan-2025 | 09:18 AM",
  },
  {
    id: 3,
    title: "xxxx",
    realTitle: "Breakfast Quality Below Expectations",
    assignee: "xxxx",
    realAssignee: "sarah.smith@emojot.com",
    priority: "Medium",
    status: "Open",
    channel: "Guest Satisfaction Survey",
    name: "xxxx",
    realName: "Michael Chen",
    email: "xxxx",
    realEmail: "m.chen@outlook.com",
    created: "08-Jan-2025 | 08:14 AM",
    lastUpdated: "08-Jan-2025 | 08:14 AM",
  },
  {
    id: 2,
    title: "xxxx",
    realTitle: "Noisy Air Conditioning Unit",
    assignee: "xxxx",
    realAssignee: "david.wilson@emojot.com",
    priority: "Medium",
    status: "Open",
    channel: "Guest Satisfaction Survey",
    name: "xxxx",
    realName: "Emma Rodriguez",
    email: "xxxx",
    realEmail: "emma.rodriguez@yahoo.com",
    created: "07-Jan-2025 | 04:53 PM",
    lastUpdated: "07-Jan-2025 | 04:53 PM",
  },
  {
    id: 1,
    title: "xxxx",
    realTitle: "WiFi Connection Issues in Room 305",
    assignee: "xxxx",
    realAssignee: "lisa.anderson@emojot.com",
    priority: "Medium",
    status: "Open",
    channel: "Guest Satisfaction Survey",
    name: "xxxx",
    realName: "James Patterson",
    email: "xxxx",
    realEmail: "j.patterson@hotmail.com",
    created: "07-Jan-2025 | 04:33 PM",
    lastUpdated: "07-Jan-2025 | 04:33 PM",
  },
]

interface ComplaintManagementProps {
  onClose: () => void
  onViewComplaint: (complaintId: number) => void
}

export function ComplaintManagement({ onClose, onViewComplaint }: ComplaintManagementProps) {
  const [entriesPerPage, setEntriesPerPage] = useState("25")
  const [isMasked, setIsMasked] = useState(true)
  const { toast } = useToast()

  const totalComplaints = 4
  const openComplaints = 3
  const inProgressComplaints = 0
  const resolvedComplaints = 1

  const handleComplaintClick = (complaintId: number) => {
    console.log("[v0] ===== COMPLAINT CLICKED =====")
    console.log("[v0] Complaint ID:", complaintId)
    console.log("[v0] Is Masked:", isMasked)

    if (isMasked) {
      console.log("[v0] Data is masked - showing toast")
      console.log("[v0] Toast function:", toast)

      try {
        toast({
          title: "Please Unmask Data",
          description: "You need to unmask the data before viewing complaint details.",
          variant: "destructive",
          duration: 5000,
        })
        console.log("[v0] Toast called successfully")
      } catch (error) {
        console.error("[v0] Error calling toast:", error)
      }
      return
    }

    console.log("[v0] Data is unmasked - navigating to complaint detail")
    onViewComplaint(complaintId)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b">
        <h1 className="text-base md:text-lg font-semibold text-gray-900">Summary View</h1>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 md:mb-6">
          <div className="bg-white border border-gray-300 rounded p-3 shadow-sm">
            <div className="text-xl md:text-2xl font-bold text-gray-900">{totalComplaints}</div>
            <div className="text-xs text-gray-600 mt-0.5">Total</div>
          </div>
          <div className="bg-white border border-gray-300 rounded p-3 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{openComplaints}</div>
              <div className="text-xs text-gray-500">75.00%</div>
            </div>
            <div className="text-xs text-gray-600 mt-0.5">Open</div>
          </div>
          <div className="bg-white border border-gray-300 rounded p-3 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{inProgressComplaints}</div>
              <div className="text-xs text-gray-500">0.00%</div>
            </div>
            <div className="text-xs text-gray-600 mt-0.5">In Progress</div>
          </div>
          <div className="bg-white border border-gray-300 rounded p-3 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div className="text-xl md:text-2xl font-bold text-gray-900">{resolvedComplaints}</div>
              <div className="text-xs text-gray-500">25.00%</div>
            </div>
            <div className="text-xs text-gray-600 mt-0.5">Resolved</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent text-xs md:text-sm">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Columns</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-teal-500 text-white hover:bg-teal-600 text-xs md:text-sm"
              onClick={() => setIsMasked(!isMasked)}
            >
              {isMasked ? "Unmask" : "Mask"}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-gray-600">Search:</span>
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <span className="text-xs text-gray-600">i</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden overflow-x-auto">
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-700">Id</TableHead>
                <TableHead className="font-semibold text-gray-700">Title</TableHead>
                <TableHead className="font-semibold text-gray-700">Assignee</TableHead>
                <TableHead className="font-semibold text-gray-700">Priority</TableHead>
                <TableHead className="font-semibold text-gray-700">Status</TableHead>
                <TableHead className="font-semibold text-gray-700">Channel</TableHead>
                <TableHead className="font-semibold text-gray-700">Name</TableHead>
                <TableHead className="font-semibold text-gray-700">Email</TableHead>
                <TableHead className="font-semibold text-gray-700">Comments</TableHead>
                <TableHead className="font-semibold text-gray-700">Created</TableHead>
                <TableHead className="font-semibold text-gray-700">Last updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complaints.map((complaint, index) => (
                <TableRow key={complaint.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="text-gray-900">{complaint.id}</TableCell>
                  <TableCell
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleComplaintClick(complaint.id)}
                  >
                    {isMasked ? complaint.title : complaint.realTitle}
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {isMasked ? complaint.assignee : complaint.realAssignee}
                  </TableCell>
                  <TableCell className="text-gray-900">{complaint.priority}</TableCell>
                  <TableCell className="text-gray-900">{complaint.status}</TableCell>
                  <TableCell className="text-gray-900">{complaint.channel}</TableCell>
                  <TableCell className="text-gray-900">{isMasked ? complaint.name : complaint.realName}</TableCell>
                  <TableCell className="text-gray-900">{isMasked ? complaint.email : complaint.realEmail}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <div className="w-4 h-4 rounded-full bg-gray-400" />
                    </Button>
                  </TableCell>
                  <TableCell className="text-gray-900 text-sm">{complaint.created}</TableCell>
                  <TableCell className="text-gray-900 text-sm">{complaint.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-4">
          <div className="text-xs md:text-sm text-gray-600">Showing 1 to 4 of 4 entries</div>
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm text-gray-600">Show</span>
            <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
              <SelectTrigger className="w-16 md:w-20 h-8 text-xs md:text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-xs md:text-sm text-gray-600">entries</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled className="text-xs md:text-sm">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-500 text-white hover:bg-blue-600 text-xs md:text-sm">
              1
            </Button>
            <Button variant="outline" size="sm" disabled className="text-xs md:text-sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
