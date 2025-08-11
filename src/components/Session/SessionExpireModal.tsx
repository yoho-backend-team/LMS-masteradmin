import { ClearLocalStorage } from "@/utils/localStorage";
import { createRoot } from "react-dom/client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { COLORS } from "@/constants/ui constants";

export const showSessionExpireModal = () => {
    if (document.getElementById("session-expire-modal")) return;

    const modalContainer = document.createElement('div');
    modalContainer.setAttribute("id", "session-expire-modal")
    document.body.appendChild(modalContainer)

    const root = createRoot(modalContainer)

    const handleLogout = () => {
        ClearLocalStorage();
        root.unmount();
        document.body.removeChild(modalContainer);
        window.location.href = "/login"
    }

    root.render(<SessionExpireModal onConfirm={handleLogout} />)
}

type props = {
    onConfirm: () => void;
}

const SessionExpireModal: React.FC<props> = ({ onConfirm }) => {

    return (
        <Dialog open>
            <DialogContent className="sm:max-w-[400px] text-center ml-48 mt-20">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-black">
                        Session Expired
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 mt-1">
                        Your session has expired. Please log in again to continue.
                    </DialogDescription>
                </DialogHeader>

                <div>
                    <Button
                        onClick={onConfirm}
                        className={`w-full bg-[${COLORS.primary}] hover:bg-cyan-600 text-white`}
                    >
                        Logout
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )

}