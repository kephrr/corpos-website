import TicketTable from "../../components/ticket-table.tsx";

export default function TicketsCrud(){
    return <div className="p-4">
        <h1 className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">RESERVATIONS</h1>
        <TicketTable></TicketTable>
    </div>

}