import Image from "next/image"
import { HelpCircle, FileText } from "lucide-react"

export function ContentHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b" style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center gap-3">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mystaff2%20-%20Copy%20%282%29-1Q4PuTMa5MZDJdzqJMH1FeSW0NIPVh.png"
          alt="mystaff"
          width={100}
          height={30}
          className="w-auto h-auto"
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          System Date: <span className="font-medium text-gray-900">01/05/2021</span>
        </span>

        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded hover:bg-gray-50">
            <HelpCircle className="w-4 h-4 text-gray-600" />
          </button>

          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded hover:bg-gray-50">
            <FileText className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
