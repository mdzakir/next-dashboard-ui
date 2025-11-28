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
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
