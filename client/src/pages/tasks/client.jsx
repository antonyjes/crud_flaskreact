import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";

export const TaskClient = ({ data, setShowModal }) => {
    const [dataFiltered, setDataFiltered] = useState(data);
    const [status, setStatus] = useState('active');

    const searchKeys = [{taskName: {name: 'Task Name', value: 'taskName'}}, {date: {name: 'Date', value: 'date'}}, {status: {name: 'Status', value: 'status'}}];

    const filterByStatus = (status) => {
        const filtered = data?.filter(task => task.status === status);
        setDataFiltered(filtered);
    }

    useEffect(() => {
        filterByStatus(status);
    }, [status]);

    return(
        <>
            <Tabs variant="default" defaultValue="active">
                <div className="flex">
                    <TabsList>
                        <TabsTrigger value="all" onClick={() => setStatus('all')}>All</TabsTrigger>
                        <TabsTrigger value="active" onClick={() => setStatus('active')}>Active</TabsTrigger>
                        <TabsTrigger value="completed" onClick={() => setStatus('completed')}>Completed</TabsTrigger>
                        <TabsTrigger value="overdue" onClick={() => setStatus('overdue')}>Overdue</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <Button size="sm" variant="outline" className="h-7 gap-1">
                            <File className="h-4 w-4" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                        </Button>
                        <Button size="sm" className="h-7 gap-1" onClick={() => setShowModal(true)}>
                            <PlusCircle className="h-4 w-4" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Task
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value={status}>
                    <DataTable columns={columns} data={dataFiltered} searchKey="taskName" searchKeys={searchKeys} />
                </TabsContent>
            </Tabs>
        </>
    )
}