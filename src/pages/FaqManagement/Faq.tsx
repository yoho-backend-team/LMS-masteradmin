import React, { useState } from "react";
import {
  FiEdit,
  FiTrash2,
  FiChevronDown,
  FiChevronUp,
  FiXCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { COLORS, FONTS } from "../../constants/ui constants";

interface FAQItem {
  id: number;
  question: string;
  category: string;
  status: boolean;
  description?: string;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    { id: 1, question: "How do I set effective community guidelines?", category: "Community Management", status: true },
    { id: 2, question: "What are the contents are available in Dashboard", category: "Dashboard", status: true },
    { id: 3, question: "How can users update their profile information?", category: "User Management", status: true },
    { id: 4, question: "How do students register for courses?", category: "Content Management", status: false },
    { id: 5, question: "What are the courses are available", category: "Course Management", status: true },
    { id: 6, question: "How many students are available per batch?", category: "Student Management", status: true },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<FAQItem | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [statusSuccessPopup, setStatusSuccessPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [description, setDescription] = useState("");
  const [statusConfirmId, setStatusConfirmId] = useState<number | null>(null);

  const rowsPerPage = 10;

  const categories = [
    "Community Management",
    "Dashboard",
    "User Management",
    "Content Management",
    "Course Management",
    "Student Management",
  ];

  const filtered = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleSave = () => {
    if (editItem) {
      setFaqs((prev) =>
        prev.map((faq) =>
          faq.id === editItem.id
            ? { ...faq, question, category, description }
            : faq
        )
      );
    } else {
      setFaqs((prev) => [
        ...prev,
        { id: Date.now(), question, category, description, status: true },
      ]);
    }
    setShowModal(false);
    setEditItem(null);
    setQuestion("");
    setCategory("");
    setDescription("");
  };

  const handleDelete = () => {
    if (deleteId !== null) {
      setFaqs((prev) => prev.filter((faq) => faq.id !== deleteId));
      setDeleteId(null);
      setShowSuccessPopup(true);
    }
  };

  const toggleStatus = (id: number) => {
    setFaqs((prev) =>
      prev.map((faq) =>
        faq.id === id ? { ...faq, status: !faq.status } : faq
      )
    );
  };

  const handleStatusClick = (faq: FAQItem) => {
    setStatusConfirmId(faq.id);
  };

  const confirmStatusChange = () => {
    if (statusConfirmId !== null) {
      toggleStatus(statusConfirmId);
      setStatusConfirmId(null);
      setStatusSuccessPopup(true);
    }
  };

  const selectCategory = (cat: string) => {
    setCategory(cat);
    setShowCategoryDropdown(false);
  };

  return (
    <div className="p-4">
    
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-1/2"
          style={{ ...FONTS.description }}
        />
        <button
          onClick={() => {
            setEditItem(null);
            setQuestion("");
            setCategory("");
            setDescription("");
            setShowModal(true);
          }}
          style={{
            backgroundColor: COLORS.button,
            color: "#fff",
            ...FONTS.models,
            fontSize: 16,
          }}
          className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
        >
          + Add FAQ
        </button>
      </div>

      
      <div
        style={{
          ...FONTS.models,
          fontSize: 18,
          backgroundColor: COLORS.button,
          color: "#fff",
        }}
        className="grid grid-cols-12 px-4 py-4 rounded mb-3 shadow-xl"
      >
        <span className="col-span-5">Question</span>
        <span className="col-span-5">Category Name</span>
        <span className="col-span-1 text-center">Status</span>
        <span className="col-span-1 text-right">Actions</span>
      </div>

  
      {paginated.map((faq) => (
        <div
          key={faq.id}
          className="grid grid-cols-12 items-center px-4 py-4 bg-white rounded shadow-xl mb-3"
        >
          <span style={FONTS.description} className="col-span-5">
            {faq.question}
          </span>
          <span style={FONTS.description} className="col-span-5">
            {faq.category}
          </span>
          <div className="col-span-1 flex justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={faq.status}
                onChange={() => handleStatusClick(faq)}
                className="sr-only"
              />
              <div
                className={`w-11 h-5 rounded-full transition-colors duration-300 ${
                  faq.status ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    faq.status ? "translate-x-3" : "translate-x-0"
                  }`}
                />
              </div>
            </label>
          </div>
          <div className="col-span-1 flex justify-end gap-3">
            <button
              onClick={() => {
                setEditItem(faq);
                setQuestion(faq.question);
                setCategory(faq.category);
                setDescription(faq.description || "");
                setShowModal(true);
              }}
              style={{ color: COLORS.secondary }}
            >
              <FiEdit size={18} />
            </button>
            <button
              onClick={() => setDeleteId(faq.id)}
              style={{ color: "#FF7F11" }}
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      
      <div className="mt-4 flex justify-end">
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            style={{
              backgroundColor: currentPage === 1 ? "#ccc" : COLORS.button,
              color: "#fff",
              ...FONTS.models,
            }}
            className="px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span style={FONTS.description} className="px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{
              backgroundColor:
                currentPage === totalPages ? "#ccc" : COLORS.button,
              color: "#fff",
              ...FONTS.models,
            }}
            className="px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

    
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div
            className="bg-white p-6 rounded-tl-[10px] rounded-br-[10px] w-[500px] max-h-[80vh] overflow-y-auto"
            style={{ ...FONTS.description }}
          >
            <h2 style={FONTS.models} className="mb-4">
              {editItem ? "Edit FAQ" : "Add FAQ"}
            </h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Question</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter your question"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                style={FONTS.description}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[100px] resize-y"
                style={FONTS.description}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block mb-2 text-sm font-medium">Category</label>
              <div
                className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <span>{category || "Select category"}</span>
                {showCategoryDropdown ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {showCategoryDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-[200px] overflow-y-auto">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectCategory(cat)}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "#E5E5E5",
                  color: COLORS.secondary,
                  ...FONTS.models,
                }}
                className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  backgroundColor: COLORS.button,
                  color: "#fff",
                  ...FONTS.models,
                }}
                className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded w-96 flex flex-col items-center"
            style={FONTS.description}
          >
            <FiXCircle size={64} color="red" className="mb-4" />
            <h2 className="text-lg font-bold mb-4" style={FONTS.models}>
              Are you sure you want to delete?
            </h2>
            <div className="flex justify-center gap-4 w-full">
              <button
                onClick={() => setDeleteId(null)}
                style={{
                  backgroundColor: "#E5E5E5",
                  color: COLORS.secondary,
                  ...FONTS.models,
                }}
                className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  ...FONTS.models,
                }}
                className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

   
      {statusConfirmId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded w-96 flex flex-col items-center"
            style={FONTS.description}
          >
            <FiXCircle size={64} color="red" className="mb-4" />
            <h2 className="text-lg font-bold mb-4" style={FONTS.models}>
              Do you want to change status?
            </h2>
            <div className="flex justify-center gap-4 w-full">
              <button
                onClick={() => setStatusConfirmId(null)}
                style={{
                  backgroundColor: "#E5E5E5",
                  color: COLORS.secondary,
                  ...FONTS.models,
                }}
                className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
              >
                Cancel
              </button>
              <button
                onClick={confirmStatusChange}
                style={{
                  backgroundColor: COLORS.button,
                  color: "#fff",
                  ...FONTS.models,
                }}
                className="px-4 py-2 rounded-tl-[10px] rounded-br-[10px]"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      )}

 
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded w-80 flex flex-col items-center"
            style={FONTS.description}
          >
            <FiCheckCircle size={64} color="green" className="mb-4" />
            <h2 className="text-lg font-bold mb-4" style={FONTS.models}>
              Deleted Successfully!
            </h2>
            <button
              onClick={() => setShowSuccessPopup(false)}
              style={{
                backgroundColor: COLORS.button,
                color: "#fff",
                ...FONTS.models,
              }}
              className="px-6 py-2 rounded-tl-[10px] rounded-br-[10px]"
            >
              OK
            </button>
          </div>
        </div>
      )}

      
      {statusSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            className="bg-white p-6 rounded w-80 flex flex-col items-center"
            style={FONTS.description}
          >
            <FiCheckCircle size={64} color="green" className="mb-4" />
            <h2 className="text-lg font-bold mb-4" style={FONTS.models}>
              Status Changed Successfully!
            </h2>
            <button
              onClick={() => setStatusSuccessPopup(false)}
              style={{
                backgroundColor: COLORS.button,
                color: "#fff",
                ...FONTS.models,
              }}
              className="px-6 py-2 rounded-tl-[10px] rounded-br-[10px]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
