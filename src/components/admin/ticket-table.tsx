
import DetailsModalTickets from "./details-modal-tickets.tsx";
import {RestResponse} from "../../core/models/types.ts";
import {TicketItem} from "../../core/models/tickets.ts";
import {Loader} from "lucide-react";

interface TicketTableProps {
    data : RestResponse<TicketItem[]> | null;
    loading : boolean;
    error : string | null;
}

const TicketTable = ({data, loading, error}: TicketTableProps) => {
    if (loading) return <div className="flex justify-center item-center w-full my-10">
        <Loader></Loader>
    </div>;
    if (error) return <div>Error: {error}</div>;
    if (!data?.totalItems && data !== null)
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nom
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Mail
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tel
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Evènement
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.results.map((item, index) => (
                    <tr
                        key={index}
                        className={`bg-white ${index < data.results.length - 1 ? 'border-b' : ''} dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600`}
                    >
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </th>
                        <td className="px-6 py-4">
                            {item.email}
                        </td>
                        <td className="px-6 py-4">
                            {item.telephone}
                        </td>
                        <td className="px-6 py-4">
                            {item.event}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <DetailsModalTickets details={item}></DetailsModalTickets>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketTable;