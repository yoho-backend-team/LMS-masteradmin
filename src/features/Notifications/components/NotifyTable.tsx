import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FONTS } from "@/constants/ui constants";
import { Plus } from "lucide-react";

type PaymentRow = {
  id: string;
  institute: string;
  plan: string;
  issue: string;
};

type props = {
  setFormModalOpen: (show: boolean) => void;
};

const NotifyTable: React.FC<props> = ({ setFormModalOpen }) => {
  const data: PaymentRow[] = [
    {
      id: "Welcome",
      institute: "Creating Web",
      plan: "Bharathidasan University",
      issue: "Seen",
    },
    {
      id: "Welcome",
      institute: "Creating Web",
      plan: "Bharathidasan Universitydlahdlhasdasldjsaldalisdlahsidhl",
      issue: "Seen",
    },
    {
      id: "Welcome",
      institute: "Creating Web",
      plan: "Bharathidasan University",
      issue: "Seen",
    },

  ];
  return (
    <div className="grid gap-3 w-full">
      <div className="flex justify-end">
        <Button
          onClick={() => setFormModalOpen(true)}
          className="bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-6"
        >
          <Plus className="w-6 h-6" />
          <span style={{ ...FONTS.button_text }}>Add Institute</span>
        </Button>
      </div>
      <div className=" space-y-4">
        <Card className="bg-[#2d6974] text-white shadow- max-h-15">
          <CardContent
            className="!grid grid-cols-5 gap-2  !items-center !text-center !text-xl -mt-2"
            style={{ ...FONTS.tableheader }}
          >
            <div className="px-2">Title</div>
            <div className="px-2">Body</div>
            <div className="px-2">Institute</div>
            <div className="px-2">Status</div>
            <div className="px-2">Actions</div>
          </CardContent>
        </Card>

        {data.map((row: any) => (
          <Card
            key={row.id}
            className="shadow-md hover:shadow-md transition-shadow duration-200 max-h-15"
          >
            <CardContent
              className="grid grid-cols-5 gap-1 py-1 px-1 items-center text-center -mt-5.5 !text-lg "
              style={{ ...FONTS.description }}
            >
              <div className="px-2 truncate max-w-[250px] block">{row.id}</div>
              <div className="px-2 truncate max-w-[250px] block">{row.institute}</div>
              <div className="px-2 truncate max-w-[250px] block">{row.plan}</div>
              <div className="">{row.issue}</div>
              <div className="px-2">
                <Button className="bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-4 py-6">
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
