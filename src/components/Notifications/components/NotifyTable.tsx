
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FONTS } from '@/constants/ui constants';
import { GetAllNotificationThunks } from '@/features/notification/redux/thunks';
import { ResendNotification } from '@/features/notification/sevice/index';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type props = {
  setFormModalOpen: (show: boolean) => void;
};

const NotifyTable: React.FC<props> = ({ setFormModalOpen }) => {
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state: any) => state?.Notification?.notification || []
  );

  useEffect(() => {
    dispatch(GetAllNotificationThunks({}) as any);
  }, [dispatch]);

  const handleResend = async (notification: any) => {
    try {
      const queryParams = {
        institute_id:notification?.instituteId?.uuid,
        notification_id: notification?.uuid,
        branch_id:notification?.branch?.uuid
      };

      const data = await ResendNotification(queryParams);
      console.log("Resend response:", data);
      // Optionally, add success feedback here (toast, refresh list, etc.)
    } catch (error) {
      console.error("Error resending notification:", error);
      // Optionally, add error feedback here
    }
  };

  return (
    <div className="grid gap-2 w-full">
      <div className="flex justify-end">
        <Button
          onClick={() => setFormModalOpen(true)}
          className="bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-6"
        >
          <Plus className="w-6 h-6" />
          <span style={{ ...FONTS.button_text }}>Add Institute</span>
        </Button>
      </div>
      <div className="p-2 space-y-4">
        <Card className="bg-[#2d6974] text-white shadow-md">
          <CardContent
            className="grid grid-cols-5 gap-2 py-2 px-1 text-center"
            style={{ ...FONTS.tableheader }}
          >
            <div className="px-2">Title</div>
            <div className="px-2">Body</div>
            <div className="px-2">Institute</div>
            <div className="px-2">Status</div>
            <div className="px-2">Actions</div>
          </CardContent>
        </Card>

        {notifications.map((row: any) => (
          <Card
            key={row.id}
            className="shadow-md hover:shadow-md transition-shadow duration-200"
          >
            <CardContent
              className="grid grid-cols-5 gap-1 py-1 px-1 items-center text-center"
              style={{ ...FONTS.description }}
            >
              <div className="px-2">{row.title}</div>
              <div className="px-2">{row.body}</div>
              <div className="px-2">{row.instituteId?.institute_name || "no data available"}</div>
              <div className="">{row.status}</div>
              <div className="px-2">
                <Button
                  onClick={() => handleResend(row)}
                  className="bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-6"
                >
                  <span style={{ ...FONTS.button_text }}>Resend</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotifyTable;
