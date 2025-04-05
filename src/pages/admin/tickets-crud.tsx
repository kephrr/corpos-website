import TicketTable from "../../components/admin/ticket-table.tsx";
import {useTickets} from "../../core/hook/use-tickets.tsx";

export default function TicketsCrud(){
    const { data, loading, error } = useTickets(0,7);
    return <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">Gestion des réservations</h1>
        <TicketTable data={data} error={error} loading={loading}></TicketTable>
    </div>

}