import React from 'react'

function Institute() {
  return (
    <div>Institute</div>
  )
}

export default Institute

// import React from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { MoreVertical, Pencil, Trash2 } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// const instituteData = [
//   {
//     name: "ABC Institute",
//     email: "abc@institute.com",
//     phone: "+91 9876543210",
//     students: 120,
//     teachers: 12,
//     status: "Active"
//   },
//   {
//     name: "XYZ Academy",
//     email: "xyz@academy.com",
//     phone: "+91 9988776655",
//     students: 95,
//     teachers: 8,
//     status: "Inactive"
//   }
// ]

// const Institute = () => {
//   return (
//     <div className="p-6 space-y-6">
//       {/* Page Header */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Institutes</h1>
//         <Button>Add Institute</Button>
//       </div>

//       {/* Cards Summary */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Total Institutes</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-semibold">24</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Total Students</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-semibold">850</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Total Teachers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-semibold">80</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Active Institutes</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-semibold">18</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Table Section */}
//       <div className="bg-white dark:bg-muted border rounded-lg overflow-auto">
//         <table className="w-full text-sm">
//           <thead className="bg-muted text-muted-foreground">
//             <tr>
//               <th className="px-4 py-3 text-left">Institute Name</th>
//               <th className="px-4 py-3 text-left">Email</th>
//               <th className="px-4 py-3 text-left">Phone</th>
//               <th className="px-4 py-3 text-left">Students</th>
//               <th className="px-4 py-3 text-left">Teachers</th>
//               <th className="px-4 py-3 text-left">Status</th>
//               <th className="px-4 py-3 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {instituteData.map((inst, idx) => (
//               <tr key={idx} className="border-t">
//                 <td className="px-4 py-3">{inst.name}</td>
//                 <td className="px-4 py-3">{inst.email}</td>
//                 <td className="px-4 py-3">{inst.phone}</td>
//                 <td className="px-4 py-3">{inst.students}</td>
//                 <td className="px-4 py-3">{inst.teachers}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-2 py-1 text-xs font-medium rounded-full ${
//                       inst.status === "Active"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {inst.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 text-right">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" size="icon">
//                         <MoreVertical className="h-4 w-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuItem>
//                         <Pencil className="mr-2 h-4 w-4" />
//                         Edit
//                       </DropdownMenuItem>
//                       <DropdownMenuItem className="text-red-600">
//                         <Trash2 className="mr-2 h-4 w-4" />
//                         Delete
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Institute
