"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ContentHeader } from "@/components/content-header"
import { EmployeeFile } from "@/components/employee-file"
import { Dashboard } from "@/components/dashboard"
import { Leaves } from "@/components/leaves"
import { Payroll } from "@/components/payroll"
import { CommCenter } from "@/components/comm-center"
import { EmployeeSurveyModal } from "@/components/employee-survey-modal"
import { EmailCampaignModal } from "@/components/email-campaign-modal"
import { ComplaintManagement } from "@/components/complaint-management"
import { ComplaintDetail } from "@/components/complaint-detail"
import { FloatingSurveyPanel } from "@/components/floating-survey-panel"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [showSurveyModal, setShowSurveyModal] = useState(false)
  const [showEmailCampaignModal, setShowEmailCampaignModal] = useState(false)
  const [selectedComplaintId, setSelectedComplaintId] = useState<number | null>(null)

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#fafafa]">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={(page) => {
            if (page === "employee-survey") {
              setShowSurveyModal(true)
            } else if (page === "email-campaign") {
              setShowEmailCampaignModal(true)
            } else {
              setCurrentPage(page)
              setSelectedComplaintId(null)
            }
          }}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {currentPage === "dashboard" && (
            <>
              <ContentHeader />
              <main className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2">
                    <EmployeeFile />
                  </div>
                  <div className="xl:col-span-1">
                    <Dashboard />
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <Leaves />
                  <Payroll />
                </div>
              </main>
            </>
          )}
          {currentPage === "comm-center" && <CommCenter />}
          {currentPage === "complaint-management" &&
            (selectedComplaintId ? (
              <ComplaintDetail complaintId={selectedComplaintId} onBack={() => setSelectedComplaintId(null)} />
            ) : (
              <ComplaintManagement
                onClose={() => setCurrentPage("dashboard")}
                onViewComplaint={(id) => setSelectedComplaintId(id)}
              />
            ))}
        </div>
      </div>
      <EmployeeSurveyModal isOpen={showSurveyModal} onClose={() => setShowSurveyModal(false)} />
      <EmailCampaignModal isOpen={showEmailCampaignModal} onClose={() => setShowEmailCampaignModal(false)} />
      <FloatingSurveyPanel />
    </div>
  )
}
