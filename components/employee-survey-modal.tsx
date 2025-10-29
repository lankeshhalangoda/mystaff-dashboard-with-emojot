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
      <DialogContent 
        className="p-0 gap-0 flex flex-col !w-[450px] !max-w-[450px]" 
        style={{ 
          width: '450px !important',
          maxWidth: '450px !important',
          height: '95vh',
          maxHeight: '850px'
        }}
      >
        <DialogHeader className="px-6 py-3 border-b bg-white flex-shrink-0">
          <DialogTitle className="text-lg font-semibold">Employee Satisfaction Survey</DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full overflow-auto bg-white">
          <iframe
            key={iframeKey}
            src={`https://emojot.com/employeepulsedemo?t=${iframeKey}`}
            className="w-full h-full border-0"
            title="Employee Satisfaction Survey"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
