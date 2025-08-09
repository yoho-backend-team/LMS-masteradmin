import { useEffect, useState } from "react";
import User from "../../assets/Profile/User.png";
import { FONTS } from "@/constants/ui constants";
import { MoreVertical, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { getProfileThunks } from "@/features/Profile/reducers/thunks";
import { useAppDispatch } from "@/hooks/reduxhooks";

const ProfileDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(User); // default image
    const dispatch = useAppDispatch()

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            firstName: "Kamal",
            lastName: "Endhiran",
            username: "User 01",
            designation: "Project Manager",
            email: "kamal@endhiran.com",
            status: "Active",
            contact: "1234567890000000",
            image: User
        },
    });

    const onSubmit = (data: any) => {
        console.log("Updated Data:", data);
        setIsModalOpen(false);
    };

    const openModal = () => {
        reset();
        setIsModalOpen(true);
    };



    useEffect(() => {
        // dispatch(getProfileThunks({}));
        dispatch(getProfileThunks({}))
    }, [dispatch]);


    return (
        <div className="grid gap-4">
            {/* Profile Card */}
            <div className="shadow-[0px_0px_15px_0px_#0000001A] p-4 rounded-lg">
                <section className="flex items-center gap-5 ">
                    <img
                        src={User}
                        alt="profile Image"
                        className="h-[60px] w-[60px] shadow-[0px_0px_15px_0px_#0000001A] rounded-lg"
                    />
                    <h1 style={{ ...FONTS.pass_head }}>Kamal Endhiran</h1>
                </section>
                <hr className="my-4" />

                {/* Details */}
                <div>
                    <h1 style={{ ...FONTS.profile_head }}>Details</h1>

                    <div className="mt-6 grid grid-cols-4 gap-5">
                        <section>
                            <p style={{ ...FONTS.profile_title }}>First Name</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">Kamal</h1>
                        </section>
                        <section>
                            <p style={{ ...FONTS.profile_title }}>Last Name</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">Endhiran</h1>
                        </section>
                        <section>
                            <p style={{ ...FONTS.profile_title }}>User Name</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">User 01</h1>
                        </section>
                        <section>
                            <p style={{ ...FONTS.profile_title }}>Designation</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">Project Manager</h1>
                        </section>
                        <section>
                            <p style={{ ...FONTS.profile_title }}>Email</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">kamal@endhiran.com</h1>
                        </section>
                        <section>
                            <p style={{ ...FONTS.profile_title }}>Status</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">Active</h1>
                        </section>
                        <section>
                            <p style={{ ...FONTS.profile_title }}>Contact</p>
                            <h1 style={{ ...FONTS.pass_head_2 }} className="break-words">1234567890</h1>
                        </section>
                    </div>
                </div>

                {/* Edit Button */}
                <div className="mt-10 text-end">
                    <button
                        onClick={openModal}
                        className="bg-[#68B39F] border-transparent text-white p-2 rounded-tl-xl rounded-br-xl"
                        style={{ ...FONTS.btn_txt_active }}
                    >
                        Edit Details
                    </button>
                </div>
            </div>

            {/* Activity Timeline */}
            <div className="shadow-[0px_0px_15px_0px_#0000001A] p-4 rounded-lg min-h-[250px]">
                <section className="flex justify-between items-center">
                    <h1 style={{ ...FONTS.pass_head }}>User Activity Timeline</h1>
                    <MoreVertical size={25} />
                </section>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">

                    <div className="bg-white p-6 rounded-lg w-[70%] max-h-[90vh] overflow-auto scrollbar-hidden shadow-lg">
                        <div className="flex justify-between items-center mb-4 relative">
                            <h2 className=" mb-4" style={{ ...FONTS.pass_head }}>Edit User Information</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <X size={25} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Image Upload */}
                            <div className="flex flex-col gap-2 mb-6">

                                <div className="flex items-center gap-4">
                                    {/* Preview */}
                                    <img
                                        src={previewImage}
                                        alt="Profile Preview"
                                        {...register("image")}

                                        className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                                    />

                                    {/* Custom Button */}
                                    <label
                                        htmlFor="profileImage"
                                        className="bg-[#68B39F] text-white px-7 py-2 rounded-tl-xl rounded-br-xl cursor-pointer hover:bg-[#5ca08d]"
                                    >
                                        Upload New Image
                                    </label>

                                    {/* Hidden File Input */}
                                    <input
                                        type="file"
                                        id="profileImage"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 my-6">
                                {/* First Name */}
                                <div className="flex flex-col gap-4">
                                    <label style={{ ...FONTS.edit_form }} htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        {...register("firstName")}
                                        placeholder="Enter first name"
                                        className="border border-[#999999] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#68B39F] focus:border-transparent"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-4">
                                    <label style={{ ...FONTS.edit_form }} htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        {...register("lastName")}
                                        placeholder="Enter last name"
                                        className="border border-[#999999] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#68B39F] focus:border-transparent"
                                    />
                                </div>

                                {/* Username */}
                                <div className="flex flex-col gap-4">
                                    <label style={{ ...FONTS.edit_form }} htmlFor="username" className="text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        {...register("username")}
                                        placeholder="Enter username"
                                        className="border border-[#999999] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#68B39F] focus:border-transparent"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-4">
                                    <label style={{ ...FONTS.edit_form }} htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        {...register("email")}
                                        placeholder="Enter email"
                                        type="email"
                                        className="border border-[#999999] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#68B39F] focus:border-transparent"
                                    />
                                </div>

                                {/* Contact */}
                                <div className="flex flex-col gap-4">
                                    <label style={{ ...FONTS.edit_form }} htmlFor="contact" className="text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        id="contact"
                                        {...register("contact")}
                                        placeholder="Enter contact number"
                                        type="tel"
                                        className="border border-[#999999] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#68B39F] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className=" border border-[#68B39F] text-[#999999] p-2 px-7 rounded-tl-xl rounded-br-xl"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#68B39F] border-transparent text-white p-2 px-7 rounded-tl-xl rounded-br-xl"
                                >
                                    Submit
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default ProfileDetails;
