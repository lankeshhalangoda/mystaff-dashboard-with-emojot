import { Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const employees = [
  {
    id: 1,
    name: "Abdullah Adnan Ahmed",
    position: "Chief Executive",
    department: "Management",
    email: "AbdullahAdnan@mycompany.com",
    phone: "+973 17000000 - 0 17000000",
    contractType: "Full Time",
    nationality: "Bahrain",
    qualification: "Post Graduate Diploma - Finance",
    dob: "Moh/ma 01/01/1975 - 27 Yrs 0 M",
    hiringDate: "25/08/2015 - 3 Yrs 5.5 M",
    promotion: "25/08/2015 - 3 Yrs 5.5 M ago",
    increment: "25/08/2018 - 3 Yrs 5.5 M ago",
    leave: "5.00",
    image: "/professional-man.jpg",
  },
  {
    id: 2,
    name: "Mohammed Ahmed Salman",
    position: "General Manager",
    department: "Management",
    email: "MohammedAhmed.Salman@mycompany.com",
    phone: "+973 17000000 - 0 17000000",
    contractType: "Full Time",
    nationality: "Bahrain",
    qualification: "B.A / B.Sc - Finance",
    dob: "Moh/ma 15/05/1980 - 27 Yrs 0 M",
    hiringDate: "24/09/2017 - 4 Yrs 8 M",
    promotion: "24/09/2017 - 4 Yrs 8 M ago",
    increment: "24/09/2017 - 4 Yrs 8 M ago",
    leave: "5.00",
    image: "/professional-man-glasses.png",
  },
  {
    id: 3,
    name: "Tony Morones Fernandez",
    position: "Head of IT",
    department: "Information Technology",
    email: "Tony.Morones@mycompany.com",
    phone: "+973 17000000 - 0 17000000",
    contractType: "Full Time",
    nationality: "United States",
    qualification: "Post Graduate Diploma - Information Technology",
    dob: "New Hire 02/05/1982 - 27 Yrs 0 M",
    hiringDate: "25/08/2018 - 3 Yrs 8.5 M",
    promotion: "25/08/2018 - 3 Yrs 8.5 M ago",
    increment: "25/08/2018 - 3 Yrs 8.5 M ago",
    leave: "5.00",
    image: "/professional-man-suit.jpg",
  },
]

export function EmployeeFile() {
  return (
    <section className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-300 bg-white">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Employee File</h2>
      </div>

      <div className="p-3 sm:p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 bg-gray-50">
        {employees.map((employee) => (
          <Card
            key={employee.id}
            className="overflow-hidden border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-200 bg-white"
          >
            <CardContent className="p-0">
              {/* Employee Header with Photo */}
              <div className="flex gap-4 p-4 border-b bg-gray-50/50">
                <div className="relative flex-shrink-0">
                  <img
                    src={employee.image || "/placeholder.svg"}
                    alt={employee.name}
                    className="h-20 w-20 rounded object-cover border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-gray-900 rounded-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 truncate text-gray-900">{employee.name}</h3>
                  <p className="text-xs text-teal-600 mb-0.5 font-medium">{employee.position}</p>
                  <p className="text-xs text-gray-600 mb-2">{employee.department}</p>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Mail className="h-3 w-3 text-gray-400" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Phone className="h-3 w-3 text-gray-400" />
                      <span>{employee.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700 w-1/2">Contract Type</td>
                      <td className="px-3 py-2 text-gray-900">{employee.contractType}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Nationality</td>
                      <td className="px-3 py-2 text-gray-900">{employee.nationality}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Qualification</td>
                      <td className="px-3 py-2 text-gray-900">{employee.qualification}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">DOB</td>
                      <td className="px-3 py-2 text-gray-900">{employee.dob}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Hiring Date</td>
                      <td className="px-3 py-2 text-gray-900">{employee.hiringDate}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Promotion</td>
                      <td className="px-3 py-2 text-gray-900">{employee.promotion}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Increment</td>
                      <td className="px-3 py-2 text-gray-900">{employee.increment}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Appraisal</td>
                      <td className="px-3 py-2 text-gray-900"></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Training</td>
                      <td className="px-3 py-2 text-gray-900"></td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 px-3 py-2 font-medium text-gray-700">Leave</td>
                      <td className="px-3 py-2 text-gray-900">{employee.leave}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
