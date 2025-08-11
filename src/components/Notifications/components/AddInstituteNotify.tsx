import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { COLORS, FONTS } from "@/constants/ui constants";
import { ChevronDownIcon, FolderClosed, Plus } from "lucide-react"
import close from "../../../assets/close.png"

type props = {
  setFormModalOpen: (show: boolean) => void;
  formModalOpen: boolean
}

const AddInstituteNotify: React.FC<props> = ({ formModalOpen, setFormModalOpen }) => {

  return (
    <>
      {formModalOpen && <div className="h-full w-[350px] bg-white grid gap-7 shadow-md p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 style={{...FONTS.profile_head}}>Add Notification</h1>
          <button onClick={() => setFormModalOpen(false)}><img className="w-[24px] h-[24px]" src={close}></img></button>
        </div>
        <div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <label style={{ ...FONTS.text4 }}>Institute List</label>
              <Select>
                <SelectTrigger className={`w-full border rounded-[8px] border-[#716F6F] pr-[16px] pl-[16px]`}>
                  <SelectValue placeholder='Select Institute'/>
                  <ChevronDownIcon className="size-4 opacity-50 text-[#716F6F]" />
                </SelectTrigger>
                <SelectContent className='bg-[#FFFFFF]'>
                  <SelectItem style={{ ...FONTS.text4 }} value='branch' className={`hover:bg-[${COLORS.primary}] text-gray-700 bg-[${COLORS.primary}] focus:bg-[${COLORS.primary}] p-2  my-1.5 focus:text-white rounded-[8px] cursor-pointer`}
                  >No options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label style={{ ...FONTS.text4 }}>Branch List</label>
              <Select>
                <SelectTrigger className={`w-full border rounded-[8px] border-[#716F6F] pr-[16px] pl-[16px]`}>
                  <SelectValue placeholder='Select Branch' />
                  <ChevronDownIcon className="size-4 opacity-50 text-[#716F6F]" />
                </SelectTrigger>
                <SelectContent className='bg-[#FFFFFF]'>
                  <SelectItem style={{ ...FONTS.text4 }} value='branch' className={`hover:bg-[${COLORS.primary}] text-white bg-[${COLORS.primary}] focus:bg-[${COLORS.primary}] p-2  my-1.5 focus:text-white rounded-[8px] cursor-pointer`}
                  >No options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label style={{ ...FONTS.text4 }}>Title</label>
              <Input className="border border-t-black border-b-gray-300 border-l-gray-300 border-r-gray-300 h-10"></Input>
            </div>

            <div className="grid gap-2">
              <label style={{ ...FONTS.text4 }}>Body</label>
              <Input type="" className="border border-t-black border-b-gray-300 border-l-gray-300 border-r-gray-300 h-20"></Input>
            </div>

            <div className="grid gap-2">
              <label style={{ ...FONTS.text4 }}>Link</label>
              <Input className="border border-t-black border-b-gray-300 border-l-gray-300 border-r-gray-300 h-10"></Input>
            </div>

            <div className="flex justify-between gap-2 mt-5">
              <Button onClick={() => setFormModalOpen(true)} className='text-[#68B39F] border border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-2 py-5'>
                <span style={{ ...FONTS.button_text }}>Cancel</span>
              </Button>
              <Button onClick={() => setFormModalOpen(true)} className='bg-[#68B39F] text-white border-[#68B39F] hover:bg-[#2D6974] rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none px-2 py-5'>
                <Plus className='w-6 h-6' />
                <span style={{ ...FONTS.button_text }}>Add</span>
              </Button>
            </div>
          </form>
        </div>
      </div>}
    </>
  )
}

export default AddInstituteNotify