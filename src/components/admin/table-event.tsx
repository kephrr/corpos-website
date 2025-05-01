import ModalDetailsEvents from "./modal-details-events.tsx";
import Badge from "./badge.tsx";
import {EventItem} from "../../core/models/events.ts";
import {CircularLoader} from "../ui-ux/loader-circular.tsx";

interface EventTableProps {
    results : EventItem[] | undefined;
    loading : boolean;
    error : string | null;
}

const TableEvent = ({results, loading, error}: EventTableProps) => {
    if (loading) return <div className="flex justify-center item-center w-full my-10">
        <CircularLoader></CircularLoader>
    </div>;
    if (error) return <div>Error: {error}</div>;
    if (results)
        return  (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Libelle
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Duree
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Etat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Details</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {results.map((item, index) => (
                        <tr
                            key={index}
                            className={`bg-white ${index < results.length - 1 ? 'border-b' : ''} dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600`}
                        >
                            <th scope="row"
                                className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.libelle}
                            </th>
                            <td className="px-6 py-3">
                                {item.date}
                            </td>
                            <td className="px-6 py-3">
                                {(item.duration * 60) % 60 === 0 ? Math.floor((item.duration * 60) / 60) + "h" : Math.floor((item.duration * 60) / 60) + "h" + (item.duration * 60) % 60}
                            </td>
                            <td className="px-6 py-3">
                                <Badge color={item.stateIndex} content={item.state}></Badge>
                            </td>
                            <td className="px-6 py-3 text-right">
                                <ModalDetailsEvents details={item}></ModalDetailsEvents>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
};

export default TableEvent;