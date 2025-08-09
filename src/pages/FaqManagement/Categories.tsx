import React, { useState } from "react";
import { Plus, SquarePen, Trash2, TriangleAlert, Check } from 'lucide-react';
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { Textarea } from "../../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

interface Category {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
}

const initialCategories: Category[] = [
  { id: "1", name: "User Management", isActive: true, description: "Manage users" },
  { id: "2", name: "Content Management", isActive: true, description: "Manage content" },
  { id: "3", name: "Course Management", isActive: true, description: "Manage courses" },
  { id: "4", name: "Staff Management", isActive: true, description: "Manage staff" },
  { id: "5", name: "Batch Management", isActive: true, description: "Manage batches" },
  { id: "6", name: "Student Management", isActive: true, description: "Manage students" },
];

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  const handleToggleStatus = (id: string, checked: boolean) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id ? { ...category, isActive: checked } : category
      )
    );
  };

  const handleAddSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newId = (categories.length + 1).toString();
    setCategories([
      ...categories,
      {
        id: newId,
        name: newCategory.name,
        isActive: true,
        description: newCategory.description,
      },
    ]);
    setNewCategory({ name: "", description: "" });
    setIsAddModalOpen(false);
  };

  const handleEditClick = (category: Category) => {
    setEditingCategory(category);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingCategory) {
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === editingCategory.id ? editingCategory : category
        )
      );
      setIsEditModalOpen(false);
      setEditingCategory(null);
    }
  };

  const handleDeleteClick = (id: string) => {
    setCategoryToDeleteId(id);
    setIsDeleteConfirmModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setCategories((prevCategories) =>
      prevCategories.filter((cat) => cat.id !== categoryToDeleteId)
    );
    setIsDeleteConfirmModalOpen(false);
    setCategoryToDeleteId(null);
    setIsSuccessModalOpen(true);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="p-6  min-h-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <Input
          type="search"
          placeholder="Search"
          className="w-[30%] h-10 border border-gray-300 placeholder:text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-gray-400 text-[18px]"
        />


        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#68B39F] hover:bg-[#68B39F]/90 text-white px-4 py-2 flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add FAQ Categories
            </Button>
          </DialogTrigger>
          <DialogContent className="p-6 rounded-lg shadow-lg mt-65 ml-75">
            <DialogHeader className="flex flex-row justify-between items-center pb-4 border-b border-gray-200">
              <DialogTitle className="text-xl font-semibold text-gray-800">Add FAQ Categories</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubmit} className="py-4 space-y-4">
              <div>
                <label htmlFor="add-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <Input
                  id="add-title"
                  name="title"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="w-full h-10 border border-gray-300 placeholder:text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-gray-400 text-[18px]"
                />

              </div>
              <div>
                <label htmlFor="add-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Textarea
                  id="add-description"
                  name="description"
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  className="w-full h-10 border border-gray-300 placeholder:text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-gray-400 text-[18px]"
                />

              </div>
              <DialogFooter className="flex flex-row justify-end gap-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => setIsAddModalOpen(false)}
                  className="border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#68B39F] hover:bg-[#68B39F] text-white"
                >
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-3 items-center bg-[#2D6974] text-white font-semibold p-4 text-sm md:text-base">
          <div className="col-span-1">Category Name</div>
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-1 text-right pr-4">Actions</div>
        </div>

        {/* Category Rows */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="grid grid-cols-3 my-2 gap-4 rounded-lg items-center py-6 px-4 border-[1px] border-t-0 last:border-b-0 text-sm md:text-base shadow-sm"
          >
            <div className="col-span-1 text-gray-700">{category.name}</div>
            <div className="col-span-1 flex justify-center">
              <Switch
                checked={category.isActive}
                onCheckedChange={(checked) => handleToggleStatus(category.id, checked)}
                className="h-6 w-12 rounded-full data-[state=checked]:bg-[#4CAF50] data-[state=unchecked]:bg-gray-300 transition-colors focus:outline-none focus:ring-0"
              />
            </div>
            <div className="col-span-1 flex justify-end gap-3 pr-4">
              {/* Edit Dialog */}
              <Dialog open={isEditModalOpen && editingCategory?.id === category.id} onOpenChange={setIsEditModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => handleEditClick(category)}
                  >
                    <SquarePen className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-6 rounded-lg shadow-lg mt-65 ml-75">
                  <DialogHeader className="flex flex-row justify-between items-center pb-4 border-b border-gray-200">
                    <DialogTitle className="text-xl font-semibold text-[#2F6A6D]">Edit FAQ Categories</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleEditSubmit} className="py-4 space-y-4">
                    <div>
                      <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <Input
                        id="edit-title"
                        name="title"
                        value={editingCategory?.name || ''}
                        onChange={(e) =>
                          setEditingCategory(prev =>
                            prev ? { ...prev, name: e.target.value } : null
                          )
                        }
                        className="w-full h-10 border border-gray-300 placeholder:text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-gray-400 text-[18px] selection:bg-transparent selection:text-inherit"
                      />

                    </div>
                    <div>
                      <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <Textarea
                        id="edit-description"
                        name="description"
                        value={editingCategory?.description || ''}
                        onChange={(e) =>
                          setEditingCategory(prev =>
                            prev ? { ...prev, description: e.target.value } : null
                          )
                        }
                        className="w-full h-10 border border-gray-300 placeholder:text-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-gray-400 text-[18px]"
                      />
                    </div>
                    <DialogFooter className="flex flex-row justify-end gap-3 pt-4 border-t border-gray-200">
                      <Button
                        variant="outline"
                        onClick={() => setIsEditModalOpen(false)}
                        className="border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#68B39F] hover:bg-[#68B39F] text-white"
                      >
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Delete Dialog */}
              <Dialog open={isDeleteConfirmModalOpen && categoryToDeleteId === category.id} onOpenChange={setIsDeleteConfirmModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-orange-500 hover:text-orange-600"
                    onClick={() => handleDeleteClick(category.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-8 rounded-lg shadow-lg text-center mt-65 ml-75">
                  <DialogHeader className="flex flex-col items-center justify-center gap-4">
                    <TriangleAlert className="h-16 w-16 text-red-500" />
                    <DialogTitle className="text-2xl font-bold text-gray-800">Are You Sure?</DialogTitle>
                    <DialogDescription className="text-gray-600 text-base">
                      Are you sure you want to Delete this item?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex flex-row justify-center gap-4 pt-6">
                    <Button
                      variant="outline"
                      onClick={() => setIsDeleteConfirmModalOpen(false)}
                      className="border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleDeleteConfirm}
                      className="bg-[#68B39F] hover:bg-[#68B39F] text-white"
                    >
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>

      {/* Success Dialog */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="p-8 rounded-lg shadow-lg text-center mt-65 ml-75">
          <DialogHeader className="flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-lg font-semibold text-gray-800">Status Changed</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex justify-center pt-4">
            <Button
              onClick={handleSuccessModalClose}
              className="bg-[#68B39F] hover:bg-[#68B39F] text-white min-w-[80px]"
            >
              Ok
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}