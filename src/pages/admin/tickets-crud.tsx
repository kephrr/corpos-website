import TicketTable from "../../components/admin/ticket-table.tsx";

export default function TicketsCrud(){
    return <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">Gestion des réservations</h1>
        <TicketTable></TicketTable>
    </div>

}