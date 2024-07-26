import { useState } from "react";
import ModalTask from "../Modal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

export const CellAction = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onDelete = async () => {
    await fetch(`http://localhost:3000/api/tasks/${data.id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setShowAlert(false);
  };

  return (
    <>
      {showModal && (
        <ModalTask
          showModal={showModal}
          setShowModal={setShowModal}
          operation={"Edit"}
          currentTask={data}
        />
      )}
      {
        showAlert && (
            <div>
                Alert
            </div>
        )
      }
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Update
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowAlert(true)}>
                <Trash className="mr-2 h-4 w-4" />
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};