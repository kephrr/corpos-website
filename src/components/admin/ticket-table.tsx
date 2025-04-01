import DetailsModal from "./details-modal.tsx";

const TicketTable = () => {
    // Données de la table
    const tableData = [
        {
            name: "Kephren NZE",
            telephone: "784776687",
            email: "kephnze@gmail.com",
            event: "Indéfini",
            state: "Invalid",
            orderingDate: "2025-03-30"
        },
        {
            name: "Déborah AYINGONE",
            telephone: "777954817",
            email: "deborahamys@gmail.com",
            event: "Match de GALA",
            state: "Expired",
            orderingDate: "2025-02-13"
        },
        {
            name: "Sunny Ginger",
            telephone: "000000011",
            email: "sunny-ginger@catmail.miaouw",
            event: "Match d'ouverture féminin",
            state: "Valid",
            orderingDate: "2025-03-27"
        }
    ];

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
                {tableData.map((item, index) => (
                    <tr
                        key={index}
                        className={`bg-white ${index < tableData.length - 1 ? 'border-b' : ''} dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600`}
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
                            <DetailsModal title="Détails" desc={"Evènement : "+item.event
                                +"\nDate de réservation : "+item.orderingDate
                                +"\nEtat : "+item.state}></DetailsModal>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketTable;