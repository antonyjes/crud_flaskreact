import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "react-toastify";

const ModalTask = ({
  showModal,
  setShowModal,
  operation,
  currentTask = [],
}) => {
  const [taskName, setTaskName] = useState(currentTask.taskName || "");
  const [date, setDate] = useState(currentTask.date || "");
  const [status, setStatus] = useState(currentTask.status || "");

  const createTask = async () => {
    const createdTask = await fetch("http://localhost:3003/api/tasks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskName: taskName,
        date: date,
        status: status,
      }),
    });

    const savedTask = await createdTask.json();

    if (savedTask) {
      toast.success("Task created successfully");
      setShowModal(false);
    }
  };

  const editTask = async () => {
    const editedTask = await fetch(
      `http://localhost:3003/api/tasks/${currentTask.id}/edit`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskName: taskName,
          date: date,
          status: status,
        }),
      }
    );

    const savedTask = await editedTask.json();

    if (savedTask) {
      toast.success("Task edited successfully");
      setShowModal(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (operation === "Create") await createTask();
    if (operation === "Edit") await editTask();
  };

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{operation}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2 pb-4 mt-2">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-1 mb-4">
              <Label>Task</Label>
              <Input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="grid gap-1 mb-4">
              <Label>Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="grid gap-1 mb-4">
              <Label>Status</Label>
              <Select value={status} onValueChange={(value) => setStatus(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-x-2 flex items-center justify-end w-full">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTask;
