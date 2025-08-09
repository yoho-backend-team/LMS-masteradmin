import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { COLORS, FONTS } from "../../constants/ui constants";
import { FiXCircle, FiCheckCircle } from "react-icons/fi";

interface Category {
  id: number;
  name: string;
  status: boolean;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "User Management", status: false },
    { id: 2, name: "Content Management", status: false },
    { id: 3, name: "Course Management", status: false },
    { id: 4, name: "Staff Management", status: false },
    { id: 5, name: "Batch Management", status: false },
    { id: 6, name: "Student Management", status: false },
  ]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const rowsPerPage = 5;

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSave = () => {
    if (editCategory) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editCategory.id ? { ...c, name: title } : c
        )
      );
    } else {
      setCategories((prev) => [
        ...prev,
        { id: Date.now(), name: title, status: true },
      ]);
    }
    setShowModal(false);
    setEditCategory(null);
    setTitle("");
    setDescription("");
  };

  // Modified handleDelete to show success popup
  const handleDelete = () => {
    if (deleteId !== null) {
      setCategories((prev) => prev.filter((c) => c.id !== deleteId));
      setDeleteId(null);
      setShowSuccessPopup(true);
    }
  };

  const toggleStatus = (id: number) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: !c.status } : c
      )
    );
  };

  return (
    <div className="p-4">
    
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2"
          style={{ ...FONTS.description }}
        />
        <button
          onClick={() => {
  setEditCategory(null);
  setTitle("");
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
          + Add FAQ Categories
        </button>
      </div>

      
      <div
style={{
  ...FONTS.models,
   fontSize: 18,
  backgroundColor: COLORS.button,
  color: "#fff"
}}
        className="flex justify-between px-4 py-4 rounded mb-3 shadow-xl"
      >
        <span className="w-1/3">Category Name</span>
        <span className="w-1/3 text-center">Status</span>
        <span className="w-1/3 text-right">Actions</span>
      </div>

      
      {paginated.map((cat) => (
        <div
          key={cat.id}
          className="flex justify-between items-center px-4 py-4 bg-white rounded shadow-xl mb-3"
        >
          <span style={FONTS.description} className="w-1/3">
            {cat.name}
          </span>
          <div className="w-3 flex justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={cat.status}
                onChange={() => toggleStatus(cat.id)}
                className="sr-only"
              />
              <div
                className={`w-11 h-5 rounded-full transition-colors duration-300 ${
                  cat.status ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    cat.status ? "translate-x-3" : "translate-x-0"
                  }`}
                />
              </div>
            </label>
          </div>
          <div className="w-1/3 flex justify-end gap-3">
            <button
             onClick={() => {
  setEditCategory(cat);
  setTitle(cat.name);
  setShowModal(true);
}}
              style={{ color: COLORS.secondary }}
            >
              <FiEdit size={18} />
            </button>
            <button
              onClick={() => setDeleteId(cat.id)}
              style={{ color: "#FF7F11" }}
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      ))}

   
      <div className="flex space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setCurrentPage(p)}
            style={
              currentPage === p
                ? { backgroundColor: COLORS.button, color: "#fff" }
                : {}
            }
            className="px-3 py-1 border rounded"
          >
            {p}
          </button>
        ))}
      </div>

     
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white p-6 rounded-tl-[10px] rounded-br-[10px] w-[400px]"
            style={{ ...FONTS.description }}
          >
            <h2 style={FONTS.models} className="mb-4">
              {editCategory ? "Edit FAQ Category" : "Add FAQ Category"}
            </h2>

            {/* Title */}
            <label className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter category title"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              style={FONTS.description}
            />

            {/* Description */}
            <label className="block mb-2 text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter category description"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              rows={3}
              style={FONTS.description}
            />

            {/* Actions */}
            <div className="flex justify-end gap-2">
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
</div>
  );
};

 

export default Categories;
