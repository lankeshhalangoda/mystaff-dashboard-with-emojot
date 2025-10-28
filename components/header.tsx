"use client"

import { Menu, Star, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-2.5" style={{ backgroundColor: "#2e2e2e" }}>
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        {/* Language selector */}
        <button className="flex items-center gap-2 text-white hover:bg-white/10 px-2 py-1 rounded">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span className="text-sm">العربية</span>
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-white/30" />

        {/* Profile section with image, name, and notification badge */}
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border-2 border-white/20">
            <AvatarImage src="/professional-man.jpg" />
            <AvatarFallback className="bg-gray-600 text-white text-xs">NF</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-white">Nixon Francis Rebeiro</span>
          {/* Horizontally oval notification badge */}
          <div className="flex items-center justify-center rounded-full bg-red-500 px-2.5 py-0.5 min-w-[40px]">
            <span className="text-xs font-bold text-white">70</span>
          </div>
        </div>

        {/* Separator */}
        <div className="h-6 w-px bg-white/30" />

        {/* Filled star icon */}
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Star className="h-5 w-5 fill-white" />
        </Button>

        {/* Separator */}
        <div className="h-6 w-px bg-white/30" />

        {/* Settings/gear icon */}
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
