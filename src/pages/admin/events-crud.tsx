import EventTable from "../../components/event-table.tsx";

export default function EventCrud(){
    return <div className="p-4">
        <h1 className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">EVENEMENTS</h1>
        <EventTable></EventTable>
    </div>;
}