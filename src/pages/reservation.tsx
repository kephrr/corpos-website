import NavBar from "../components/ui-ux/navabar.tsx";
import Footer from "../components/ui-ux/footer.tsx";

function Reservation(){
    const iconSize = 20;
    return <div className="">
        <NavBar></NavBar>
        <div className="flex flex-col mx-20 items-center py-4">
            <form action="/isSuccessful"
                  className="min-w-100 md:min-w-150 bg-white p-6 m-4 rounded-lg text-gray-500 transition-quick">
                <h1 className="font-semibold text-2xl text-gray-500">Faire une réservation</h1>
                <label className="form-group flex my-2 p-1.75 border-1 focus:border-2 rounded-lg
                        transition-quick gap-2
                        focus:outline-none border-gray-300 focus:border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none"
                         stroke="#99A1AFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-contact-round">
                        <path d="M16 2v2"/>
                        <path d="M17.915 22a6 6 0 0 0-12 0"/>
                        <path d="M8 2v2"/>
                        <circle cx="12" cy="12" r="4"/>
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                    </svg>
                    <input
                        className="text-sm outline-none w-full" required
                        type="text" placeholder="Nom complet"/>
                </label>
                <label className="form-group flex my-2 p-1.75 border-1 focus:border-2 rounded-lg
                        transition-quick gap-2
                        focus:outline-none border-gray-300 focus:border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none"
                         stroke="#99A1AFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-phone">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <input
                        className="text-sm outline-none w-full" required
                        type="number" placeholder="Numéro de téléphone"/>
                </label>

                <label className="form-group flex my-2 p-1.75 border-1 focus:border-2 rounded-lg
                        transition-quick gap-2
                        focus:outline-none border-gray-300 focus:border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none"
                         stroke="#99A1AFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <input
                        className="text-sm outline-none w-full" required
                        type="email" placeholder="Mon-adresse@gmail.com"/>
                </label>
                <label className="form-group flex my-2 p-1.75 border-1 focus:border-2 rounded-lg
                        transition-quick gap-2
                        focus:outline-none border-gray-300 focus:border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none"
                         stroke="#99A1AFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-ticket">
                        <path
                            d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                        <path d="M13 5v2"/>
                        <path d="M13 17v2"/>
                        <path d="M13 11v2"/>
                    </svg>
                    <input
                        className="w-full text-sm outline-none cursor-not-allowed"
                        placeholder="Match de préparation féminin des corpos"/>
                </label>
                <label className="form-group flex my-2 p-1.75 border-1 focus:border-2 rounded-lg
                        transition-quick gap-2
                        focus:outline-none border-gray-300 focus:border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none"
                         stroke="#99A1AFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-calendar-days">
                        <path d="M8 2v4"/>
                        <path d="M16 2v4"/>
                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                        <path d="M3 10h18"/>
                        <path d="M8 14h.01"/>
                        <path d="M12 14h.01"/>
                        <path d="M16 14h.01"/>
                        <path d="M8 18h.01"/>
                        <path d="M12 18h.01"/>
                        <path d="M16 18h.01"/>
                    </svg>
                    <input disabled={true} placeholder="09/04/2025"
                           className="w-full text-sm outline-none cursor-not-allowed"
                           type="text"/>
                </label>
                <a href="/isSuccessful">
                    <button className="w-full cursor-pointer bg-blue-500 text-white text-md py-2 px-4 rounded-md">Réserver
                    </button>
                </a>

            </form>
        </div>
        <Footer></Footer>
    </div>
}

export default Reservation;