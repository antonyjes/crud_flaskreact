import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

export const TaskClient = ({ data }) => {
  const searchKeys = [
    { taskName: { name: "Task Name", value: "taskName" } },
    { date: { name: "Date", value: "date" } },
    { status: { name: "Status", value: "status" } },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        searchKey="taskName"
        searchKeys={searchKeys}
      />
    </>
  );
};
