import DetailsModal from "./details-modal.tsx";

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
                            <select id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                    p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>En cours</option>
                                <option value="US">A venir</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
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