import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ModalTask = ({showModal, setShowModal, operation, currentTask=[]}) => {
    const [taskName, setTaskName] = useState(currentTask.taskName);
    const [date, setDate] = useState(currentTask.date);
    const [status, setStatus] = useState(currentTask.status);    

    return(
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{operation}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-2 pb-4 mt-2">
                    <form>
                        <div className="grid gap-1 mb-4">
                            <Label>Task</Label>
                            <Input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                        </div>
                        <div className="grid gap-1 mb-4">
                            <Label>Date</Label>
                            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="grid gap-1 mb-4">
                            <Label>Status</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue value={status} placeholder="Select a status" onChange={(e) => setStatus(e.target.value)} />
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
    )
}

export default ModalTask;