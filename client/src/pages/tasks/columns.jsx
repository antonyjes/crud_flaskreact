import { CellAction } from "./cell-action";

export const columns = [
    {
        accessorKey: 'id',
        header: 'Id',
    },
    {
        accessorKey: 'taskName',
        header: 'Task Name',
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'date',
        header: 'Date',
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />,
    }
]