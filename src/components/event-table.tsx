import DetailsModal from "./details-modal.tsx";
import Badge from "./badge.tsx";

const EventTable = () => {
    // Données de la table
    const tableData = [
        {
            libelle: "Apple MacBook Pro 17\"",
            date: "Silver",
            etat: "Laptop",
            prix: "$2999",
            duree: "1h20"
        },
        {
            libelle: "Microsoft Surface Pro",
            date: "White",
            etat: "Laptop PC",
            prix: "$1999",
            duree: "2h00"
        },
        {
            libelle: "Magic Mouse 2",
            date: "Black",
            etat: "Accessories",
            prix: "$99",
            duree: "1h20"
        }
    ];

    return (
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
                        Prix
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
                {tableData.map((item, index) => (
                    <tr
                        key={index}
                        className={`bg-white ${index < tableData.length - 1 ? 'border-b' : ''} dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600`}
                    >
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.libelle}
                        </th>
                        <td className="px-6 py-4">
                            {item.date}
                        </td>
                        <td className="px-6 py-4">
                            {item.duree}
                        </td>
                        <td className="px-6 py-4">
                            {item.prix}
                        </td>
                        <td className="px-6 py-4">
                            <Badge color={3} content={item.etat}></Badge>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <DetailsModal title="Détails" desc="Not a description"></DetailsModal>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;