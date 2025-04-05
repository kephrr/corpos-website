import EventTable from "../../components/admin/event-table.tsx";
import {useEvents} from "../../core/hook/use-events.tsx";
import FormModalEvents from "../../components/admin/form-modal-events.tsx";

export default function EventCrud(){
    const { data, loading, error } = useEvents(0,7);

    return <div className="p-4 font-sans">
        <h1 className="text-2xl font-bold mb-2 dark:text-white" >Gestion des évènements</h1>
        <div className="m-4 flex justify-between">
            <form className="max-w-lg">
                <div className="flex">
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown"
                               className="block p-2 min-w-lg z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-50 border-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                               placeholder="Rechercher des évènements" required/>
                        <button type="submit"
                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            <FormModalEvents></FormModalEvents>
        </div>
        <EventTable data={data} error={error} loading={loading}></EventTable>
    </div>
        ;
}