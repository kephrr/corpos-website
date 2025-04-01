import {Calendar, CalendarClock, HouseWifi, Pin, Users} from "lucide-react";


export default function Dashboard() {
    return <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">Accueil</h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                <p>Total des réservations</p>
                <p className="text-2xl font-semibold">39</p>
            </div>
            <div className="p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                <p>Total mensuel</p>
                <p className="text-2xl font-semibold">19
                    <small className="font-regular text-sm text-green-500">+10%</small>
                </p>
            </div>
            <div className="p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                <p>Evènements futurs</p>
                <p className="text-2xl font-semibold">4</p>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-1 p-4 min-h-20 rounded-sm bg-gray-50 transition-quick cursor-pointer
            dark:bg-gray-800 dark:text-gray-200
            hover:scale-103">
                <p>Gestion des évènements</p>
                <CalendarClock></CalendarClock>
            </div>
            <div className="flex flex-col gap-1 p-4 min-h-20 rounded-sm bg-gray-50 transition-quick cursor-pointer
            dark:bg-gray-800 dark:text-gray-200
            hover:scale-103">
                <p>Gestion des réservations</p>
                <Pin/>
            </div>
            <div className="flex flex-col gap-1 p-4 min-h-20 rounded-sm bg-gray-50 transition-quick cursor-pointer
            dark:bg-gray-800 dark:text-gray-200
            hover:scale-103">
                <p>Participants</p>
                <Users/>
            </div>
            <div className="flex flex-col gap-1 p-4 min-h-20 rounded-sm bg-gray-50 transition-quick cursor-pointer
            dark:bg-gray-800 dark:text-gray-200
            hover:scale-103">
                <p>Calendrier</p>
                <Calendar></Calendar>
            </div>
        </div>
        <div className="flex justify-center min-h-30 m-4 p-4">
            <HouseWifi size={100} color="#BABABA"/>
        </div>
    </div>
}



