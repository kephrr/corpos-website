import TableTickets from "../../components/admin/table-tickets.tsx";
import {useTickets} from "../../core/hook/use-tickets.tsx";

export default function TicketsCrud(){
    const { data, loading, error } = useTickets(0,7);
    return <div className="p-4 font-sans">
        <h1 className="text-2xl font-bold mb-2">Gestion des réservations</h1>
        <TableTickets data={data} error={error} loading={loading}></TableTickets>
    </div>

}