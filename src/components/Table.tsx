import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <div className="w-full mt-4">
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500  text-sm">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={`text-left p-3 text-sm font-semibold text-gray-700 ${
                  col.className || ""
                }`}
              >
                {col.header}
              </th>
            ))}
            {/* //{" "}
            <th className="text-left p-3 text-sm font-semibold text-gray-700">
              // Name //{" "}
            </th>
            //{" "}
            <th className="text-left p-3 text-sm font-semibold text-gray-700">
              // Subject //{" "}
            </th>
            //{" "}
            <th className="text-left p-3 text-sm font-semibold text-gray-700">
              // Email //{" "}
            </th>
            //{" "}
            <th className="text-left p-3 text-sm font-semibold text-gray-700">
              // Phone //{" "}
            </th>
            //{" "}
            <th className="text-left p-3 text-sm font-semibold text-gray-700">
              // Actions //{" "}
            </th> */}
          </tr>
        </thead>
        <tbody>
          {/* Sample row */}
          {data.map((item) => renderRow(item))}
          <tr className="border-b hover:bg-smsSky-50">
            <td className="p-3 text-sm text-gray-700">John Doe</td>
            <td className="p-3 text-sm text-gray-700">Mathematics</td>
            <td className="p-3 text-sm text-gray-700"> </td>
            <td className="p-3 text-sm text-gray-700">123-456-7890</td>
            <td className="p-3 text-sm text-gray-700">Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
