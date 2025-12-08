import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData, assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Attendance = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  { header: "Actions", accessor: "action" },
];

const AttendanceListPage = () => {
  const renderRow = (item: Attendance) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 hover:bg-smsYellow-100"
      >
        <td className="flex items-center gap-4 p-3 text-sm text-gray-700">
          {item.title}
        </td>
        <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
          {item.date}
        </td>
        <td className="p-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <FormModal table="attendance" type="update" id={item?.id} />
                <FormModal table="attendance" type="delete" id={item?.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h3 className="hidden md:block text-lg font-semibold">
          All Attendance
        </h3>
        {/* list */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="text-xs flex items-center gap-2 w-8 h-8 justify-center rounded-full bg-smsYellow-200 hover:bg-smsYellow-300">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="text-xs flex items-center gap-2 w-8 h-8 justify-center rounded-full bg-smsYellow-200 hover:bg-smsYellow-300">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>
            {role === "admin" ? (
              <button className="text-xs flex items-center gap-2 w-8 h-8 justify-center rounded-full bg-smsYellow-200 hover:bg-smsYellow-300">
                <Image src="/create.png" alt="filter" width={14} height={14} />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {/* teachers list */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default AttendanceListPage;
