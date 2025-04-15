import TableEvent from "../../components/admin/table-event.tsx";
import {useEvents} from "../../core/hook/use-events.tsx";
import ModalFormEvents from "../../components/admin/modal-form-events.tsx";

export default function EventCrud(){
    const { data, loading, error } = useEvents(0,7);

    function showNotification() {
        const toast = document.getElementById('toast-success')
        if(toast){
            toast.classList.add('animate-toast');
            toast.classList.toggle('disappear');
            setTimeout(()=>{
                toast.classList.toggle('disappear');
            },3500)
        }
    }

    return <div className="p-4 font-sans">
        <div id="toast-success"
             className="disappear transition-smooth absolute left-150 z-10 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
             role="alert">
            <div
                className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">Evenement crée avec succès</div>
            <button type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-success" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
        <h1 className="text-2xl font-bold mb-2 dark:text-white">Gestion des évènements</h1>
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
            <ModalFormEvents onSubmit={showNotification}></ModalFormEvents>
        </div>
        <TableEvent  data={data} error={error} loading={loading}></TableEvent>
    </div>
        ;
}