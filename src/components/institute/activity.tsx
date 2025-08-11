"use client"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface TimelineEntry {
  id: string
  title: string
  description: string
  timestamp: string
  isEditable?: boolean
}

const timelineData: TimelineEntry[] = [
  
 {
    id: "1",
    title: "Note",
    description: "Create JhgGsa - Notes Created",
    timestamp: "July 17, 2025 At 06:13:23 PM",
    isEditable: false,
  },
  {
    id: "2",
    title: "Note",
    description: "Log in successfully - Notes Created",
    timestamp: "July 17, 2025 At 06:13:23 PM",
    isEditable: true,
  },
  {
    id: "3",
    title: "Reminder",
    description: "Meeting scheduled with team",
    timestamp: "July 18, 2025 At 10:00:00 AM",
    isEditable: false,
  },
  {
    id: "4",
    title: "Task",
    description: "Complete project documentation",
    timestamp: "July 19, 2025 At 03:45:00 PM",
    isEditable: true,
  },
  {
    id: "5",
    title: "Alert",
    description: "System maintenance at midnight",
    timestamp: "July 20, 2025 At 12:00:00 AM",
    isEditable: false,
  },
]

export function TimelineComponent() {
  return (
    <div className="relative py-8">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300"></div>

      <div className="space-y-16">
        {timelineData.map((entry, index) => (
          <div key={entry.id} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-5 w-2 h-2 bg-gray-400 rounded-full"></div>

            {/* Status Badge */}
            <div className="mb-4">
              <Badge className="bg-[#68B39F]  text-white hover:bg-emerald-500 border-0 px-3 py-1 text-sm">
                Notes Created
              </Badge>
            </div>

            {/* Content */}
            <div className="ml-12">
              {entry.isEditable ? (
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <Input
                    placeholder="Note"
                    className="border-0 p-0 text-base font-medium focus-visible:ring-0 shadow-none"
                    defaultValue="Note"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900 text-lg">{entry.title}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="text-gray-500">Create</div>
                    <div>{entry.description}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{entry.timestamp}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
