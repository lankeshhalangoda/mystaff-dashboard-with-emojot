"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingSurveyPanel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`fixed bottom-0 right-2 md:right-4 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ width: "min(490px, calc(100vw - 16px))" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -top-10 right-0 z-10 h-10 w-20 md:w-24 rounded-t-lg rounded-b-none bg-red-600 hover:bg-red-700 shadow-lg text-white text-xs md:text-sm"
        >
          {isOpen ? <ChevronDown className="h-4 w-4 md:h-5 md:w-5" /> : <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />}
        </Button>

        <div className="shadow-2xl overflow-hidden" style={{ width: "100%", height: "min(240px, 40vh)" }}>
          <iframe
            src="https://emojot.com/empsatamthaldemo"
            className="border-0"
            style={{
              width: "720px",
              height: "780px",
              transform: "scale(0.68)",
              transformOrigin: "top left",
            }}
            title="Employee Survey"
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
