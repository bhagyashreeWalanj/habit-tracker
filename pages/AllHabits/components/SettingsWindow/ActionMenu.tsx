"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ActionMenu() {
  const [openDialog, setOpenDialog] = useState<"edit" | "delete" | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setOpenDialog(null);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" onSelect={(e) => e.preventDefault()}>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setOpenDialog("edit");
            }}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setOpenDialog("delete");
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={openDialog === "edit"} onOpenChange={handleOpenChange}>
        <DialogContent onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <DialogTitle>Edit Habit</DialogTitle>
            <DialogDescription>
              Make changes to your item here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          {/* Add your edit form here */}
          <Button onClick={() => setOpenDialog(null)}>Close</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={openDialog === "delete"} onOpenChange={handleOpenChange}>
        <DialogContent onClick={(e) => e.stopPropagation()} className="w-full">
          <DialogHeader className="flex items-center justify-center text-xl">
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription className=" text-center text-[14px]">
              <span>
                Are you sure you want to delete this item?
                <br />
                This action cannot be undone.
              </span>
            </DialogDescription>
          </DialogHeader>
          {/* Add your delete confirmation buttons here */}
          {/* <Button onClick={() => setOpenDialog(null)}>Close</Button> */}
          <div className="flex gap-4 mt-5 items-center justify-center ">
            <Button
              className=" border px-10 p-3 rounded-md"
              onClick={() => setOpenDialog(null)}
            >
              Close
            </Button>
            <Button
              className="border px-10 p-3 rounded-md"
              onClick={() => setOpenDialog(null)}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
