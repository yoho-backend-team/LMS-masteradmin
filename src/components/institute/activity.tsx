import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getActivitylogDetails } from "@/features/institute/services";
import { Skeleton } from "@/components/ui/skeleton";

interface TimelineEntry {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  isEditable?: boolean;
  status?: string;
  action: string;
}

export function TimelineComponent({ instituteId }: { instituteId: string }) {
  const [timelineData, setTimelineData] = useState<TimelineEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivityLogs = async () => {
      try {
        setLoading(true);
        const response = await getActivitylogDetails({ id: instituteId });

        console.log(response, 'ressssssssssssssssss')

        if (response?.data) {
          const transformedData = response?.data?.data?.map((log: any) => ({
            id: log.id || log._id,
            title: log.title || log.action || "Activity",
            description: log.details || "No details available",
            timestamp: new Date(log.timestamp || log.createdAt).toLocaleString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              }
            ),
            isEditable: false,
            status: log.status || "completed",
            action: log.action || "",
          }));

          setTimelineData(transformedData);
        }
      } catch (err) {
        console.error("Error fetching activity logs:", err);
        setError("Failed to load activity logs");
        setTimelineData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityLogs();
  }, [instituteId]);

  console.log(timelineData, 'dataaaaaaaaaaaaa')

  if (loading) {
    return (
      <div className="space-y-16 py-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="h-4 w-4 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="relative py-8">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300"></div>

      <div className="space-y-16">
        {timelineData.map((entry) => (
          <div key={entry.id} className="relative">
            {/* Timeline Dot with status color */}
            <div
              className={`absolute left-5 w-3 h-3 rounded-full ${
                entry.status === "completed"
                  ? "bg-green-500"
                  : entry.status === "failed"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
            ></div>

            {/* Status Badge */}
            <div className="mb-4">
              <Badge
                className={`${
                  entry.status === "completed"
                    ? "bg-[#68B39F]"
                    : entry.status === "failed"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                } text-white hover:bg-opacity-80 border-0 px-3 py-1 text-sm`}
              >
                {entry.status === "completed"
                  ? "Completed"
                  : entry.status === "failed"
                  ? "Failed"
                  : "Pending"}
              </Badge>
            </div>

            {/* Content */}
            <div className="ml-12">
              {entry.isEditable ? (
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <Input
                    placeholder="Note"
                    className="border-0 p-0 text-base font-medium focus-visible:ring-0 shadow-none"
                    defaultValue={entry.title}
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900 text-lg">
                    {entry.title}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    {entry.description}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {entry.timestamp}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
