import { FileText } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const earnings = [
  { label: "Basic Salary", amount: "1,850,000" },
  { label: "Transportation Allowance", amount: "100,000" },
  { label: "Telephone Allowance", amount: "50,000" },
  { label: "Housing Allowance", amount: "420,000" },
]

const deductions = [
  { label: "Un-Employment Deduction", amount: "24,200" },
  { label: "Advance Salary", amount: "100,000" },
  { label: "Internal Loan", amount: "500,000" },
]

export function Payroll() {
  return (
    <section className="bg-white rounded-lg shadow-sm">
      <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Payroll</h2>
      </div>
      <CardContent className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Select Payslip Date:</span>
            <Select defaultValue="30/06/2021">
              <SelectTrigger className="w-[160px] h-9 text-sm border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30/06/2021">30/06/2021</SelectItem>
                <SelectItem value="31/05/2021">31/05/2021</SelectItem>
                <SelectItem value="30/04/2021">30/04/2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="sm" className="h-9 text-sm border-gray-300 hover:bg-gray-50 bg-transparent">
            <FileText className="h-4 w-4 mr-2" />
            PDF File
          </Button>
        </div>

        <div className="text-center text-sm py-2.5 lg:py-3 border-y border-gray-200 bg-gray-50 font-medium text-gray-900">
          Salary for the month of (30/06/2021)
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b-2 border-gray-900 text-gray-900">Earnings</h3>
            <div className="space-y-2.5">
              {earnings.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-sm bg-gray-50 px-3 py-2.5 rounded border border-gray-200"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 pb-2 border-b-2 border-gray-900 text-gray-900">Deductions</h3>
            <div className="space-y-2.5">
              {deductions.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-sm bg-gray-50 px-3 py-2.5 rounded border border-gray-200"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-5 border-t-2 border-gray-300">
          <div className="flex justify-between text-base">
            <span className="font-semibold text-gray-900">Gross Earnings</span>
            <span className="font-semibold text-gray-900">2,420,000</span>
          </div>
          <div className="flex justify-between text-base">
            <span className="font-semibold text-gray-900">Gross Deductions</span>
            <span className="font-semibold text-gray-900">624.20</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-3 border-t-2 border-gray-900">
            <span className="text-gray-900">Net Salary</span>
            <span className="text-teal-600">1,795,800</span>
          </div>
        </div>
      </CardContent>
    </section>
  )
}
