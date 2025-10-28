"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (page: string) => void
}

const menuItems = [
  { label: "RECRUITMENT", hasSubmenu: true },
  { label: "PERSONNEL", hasSubmenu: true },
  { label: "PERSONNEL PROCESSES", hasSubmenu: true },
  { label: "PAYROLL", hasSubmenu: true },
  { label: "TRAINING", hasSubmenu: true },
  { label: "APPRAISALS", hasSubmenu: true },
  { label: "SELF SERVICES", hasSubmenu: true },
  { label: "SETUP", hasSubmenu: true },
  { label: "REPORTS", hasSubmenu: true },
]

const emojotSubmenus = [
  "Access Customer Satisfaction Survey",
  "View Customer Details",
  "Send Emails",
  "Access Complaint Tickets",
]

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const toggleMenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label)
  }

  const handleSubmenuClick = (submenu: string) => {
    if (submenu === "Access Customer Satisfaction Survey") {
      onNavigate("employee-survey")
    } else if (submenu === "View Customer Details") {
      onNavigate("comm-center")
    } else if (submenu === "Send Emails") {
      onNavigate("email-campaign")
    } else if (submenu === "Access Complaint Tickets") {
      onNavigate("complaint-management")
    }
  }

  return (
    <aside
      className={cn("flex flex-col transition-all duration-300", isOpen ? "w-64" : "w-0 overflow-hidden")}
      style={{ backgroundColor: "#272727" }}
    >
      <div className="p-6 pb-4 bg-white">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mystaff2%20-%20Copy-UyAaCfScwJBtzUTiIQc3HHYiAU4J3k.png"
          alt="Wolke"
          width={150}
          height={40}
          className="w-auto h-auto"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <h2 className="text-sm font-bold text-white">NAVIGATION</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6 text-white hover:bg-white/10">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div>
          <Button
            variant="ghost"
            className="w-full justify-start text-left font-normal text-white hover:bg-white/5 rounded-none px-4 py-3"
            onClick={() => onNavigate("dashboard")}
          >
            <span className="text-xs">DASHBOARD</span>
          </Button>
        </div>
        <div className="border-b border-white/5" />

        {menuItems.map((item, index) => (
          <div key={item.label}>
            <Button
              variant="ghost"
              className="w-full justify-between text-left font-normal text-white hover:bg-white/5 rounded-none px-4 py-3"
              onClick={() => item.hasSubmenu && toggleMenu(item.label)}
            >
              <span className="text-xs">{item.label}</span>
              {item.hasSubmenu && <ChevronDown className="h-4 w-4" />}
            </Button>
            {index < menuItems.length - 1 && <div className="border-b border-white/5" />}
          </div>
        ))}

        <div className="border-b border-white/5" />
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between text-left font-normal text-white hover:bg-white/5 rounded-none px-4 py-3"
            onClick={() => toggleMenu("EMOJOT")}
          >
            <span className="text-xs">EMOJOT</span>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-200", expandedMenu === "EMOJOT" && "rotate-180")}
            />
          </Button>

          {expandedMenu === "EMOJOT" && (
            <div className="bg-white/5">
              {emojotSubmenus.map((submenu, idx) => (
                <div key={submenu}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left font-normal text-white/80 hover:bg-white/10 rounded-none pl-8 pr-4 py-2.5 text-xs"
                    onClick={() => handleSubmenuClick(submenu)}
                  >
                    {submenu}
                  </Button>
                  {idx < emojotSubmenus.length - 1 && <div className="border-b border-white/5 mx-4" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="p-4 text-center">
        <p className="text-xs text-white/70">
          System Date: <span className="text-white">01/05/2021</span>
        </p>
      </div>
    </aside>
  )
}
