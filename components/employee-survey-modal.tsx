"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useEffect, useState } from "react"

interface EmployeeSurveyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EmployeeSurveyModal({ isOpen, onClose }: EmployeeSurveyModalProps) {
  const [iframeKey, setIframeKey] = useState(Date.now())

  useEffect(() => {
    if (isOpen) {
      setIframeKey(Date.now())
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 gap-0 w-[720px] h-[780px] max-w-[720px] max-h-[780px]">
        <DialogHeader className="px-6 py-3 border-b bg-white flex-shrink-0">
          <DialogTitle className="text-lg font-semibold">Customer Satisfaction Survey</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[calc(780px-48px)] overflow-hidden">
          <iframe
            key={iframeKey}
            src={`https://emojot.com/csatamthaldemo?t=${iframeKey}`}
            className="w-full h-full border-0"
            title="Customer Satisfaction Survey"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
