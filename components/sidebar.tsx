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
      className={cn(
        "flex flex-col transition-all duration-300 overflow-hidden",
        isOpen ? "w-64 flex-shrink-0" : "w-0"
      )}
      style={{ backgroundColor: "#272727" }}
    >
      <div className="px-4 py-3 bg-white flex-shrink-0 flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mystaff2%20-%20Copy-UyAaCfScwJBtzUTiIQc3HHYiAU4J3k.png"
          alt="Wolke"
          width={120}
          height={32}
          className="w-auto h-8 max-w-full"
        />
      </div>

      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 flex-shrink-0">
        <h2 className="text-xs font-bold text-white">NAVIGATION</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-5 w-5 text-white hover:bg-white/10 flex-shrink-0">
          <X className="h-3 w-3" />
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <div>
          <Button
            variant="ghost"
            className="w-full justify-start text-left font-normal text-white hover:bg-white/5 rounded-none px-3 py-2 h-auto whitespace-normal"
            onClick={() => onNavigate("dashboard")}
          >
            <span className="text-[10px] break-words">DASHBOARD</span>
          </Button>
        </div>
        <div className="border-b border-white/5" />

        {menuItems.map((item, index) => (
          <div key={item.label}>
            <Button
              variant="ghost"
              className="w-full justify-between text-left font-normal text-white hover:bg-white/5 rounded-none px-3 py-2 h-auto min-h-[36px] whitespace-normal"
              onClick={() => item.hasSubmenu && toggleMenu(item.label)}
            >
              <span className="text-[10px] break-words flex-1 pr-2">{item.label}</span>
              {item.hasSubmenu && <ChevronDown className="h-3 w-3 flex-shrink-0" />}
            </Button>
            {index < menuItems.length - 1 && <div className="border-b border-white/5" />}
          </div>
        ))}

        <div className="border-b border-white/5" />
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between text-left font-normal text-white hover:bg-white/5 rounded-none px-3 py-2 h-auto min-h-[36px] whitespace-normal"
            onClick={() => toggleMenu("EMOJOT")}
          >
            <span className="text-[10px] break-words flex-1 pr-2">EMOJOT</span>
            <ChevronDown
              className={cn("h-3 w-3 flex-shrink-0 transition-transform duration-200", expandedMenu === "EMOJOT" && "rotate-180")}
            />
          </Button>

          {expandedMenu === "EMOJOT" && (
            <div className="bg-white/5">
              {emojotSubmenus.map((submenu, idx) => (
                <div key={submenu}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left font-normal text-white/80 hover:bg-white/10 rounded-none pl-6 pr-3 py-1.5 text-[10px] h-auto min-h-[32px] whitespace-normal leading-snug"
                    onClick={() => handleSubmenuClick(submenu)}
                  >
                    <span className="break-words">{submenu}</span>
                  </Button>
                  {idx < emojotSubmenus.length - 1 && <div className="border-b border-white/5 mx-3" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="px-3 py-2 text-center flex-shrink-0">
        <p className="text-[10px] text-white/70 break-words">
          System Date: <span className="text-white">01/05/2021</span>
        </p>
      </div>
    </aside>
  )
}
