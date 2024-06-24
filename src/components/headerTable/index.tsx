import React from 'react';
interface TableHeaderProps {
    headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
    return (
        <tr>
            {headers.map((header, index) => (
                <th key={index} scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    {header}
                </th>
            ))}
        </tr>
    );
};

export default TableHeader;