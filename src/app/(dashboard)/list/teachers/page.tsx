import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  phone: string;
  photo: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  { header: "Actions", accessor: "action" },
];

const TeachersListPage = () => {
  const renderRow = (item: Teacher) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 hover:bg-smsYellow-100"
      >
        <td className="flex items-center gap-4 p-3 text-sm text-gray-700">
          <Image
            src={item.photo}
            alt={item.name}
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.email}</p>
          </div>
        </td>
        <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
          {item.teacherId}
        </td>
        <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
          {item.subjects.join(", ")}
        </td>
        <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
          {item.classes.join(", ")}
        </td>
        <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
          {item.phone}
        </td>
        <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
          {item.address}
        </td>
        <td className="p-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Link
              href={`/list/teachers/${item.id}`}
              className="text-smsBlue-500 hover:underline"
            >
              <button className="w-7 h-7 items-center justify-center flex rounded-full bg-smsSky-200 hover:bg-smsSky-300">
                <Image src="/view.png" alt="edit" width={14} height={14} />
              </button>
            </Link>
            {role === "admin" && <FormModal type="delete" table="teacher" />}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h3 className="hidden md:block text-lg font-semibold">All Teachers</h3>
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
              <FormModal type="create" table="teacher" />
            ) : null}
          </div>
        </div>
      </div>
      {/* teachers list */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default TeachersListPage;
