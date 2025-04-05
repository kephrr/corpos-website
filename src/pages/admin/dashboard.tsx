import {Calendar, CalendarClock, HouseWifi, Pin, Users} from "lucide-react";
import {useResume} from "../../core/hook/use-dashboard.tsx";


export default function Dashboard() {
    const { resume } = useResume();
    const data = resume?.results;
    const diff = data?.thisMonthDifferential;

    const cardStyle = "shadow-sm p-4 min-h-24 rounded-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-200 cursor-pointer"
    const cardTitleStyle = "font-medium"
    return <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Administration : <span className="font-medium">Tableau de bord</span> </h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className={cardStyle}>
                <p className={cardTitleStyle}>Total des réservations</p>
                <p className="text-2xl font-semibold">{data?.totalTickets}</p>
            </div>
            <div className={cardStyle}>
                <p className={cardTitleStyle}>Total mensuel</p>
                <p className="text-2xl font-semibold">{data?.thisMonth}
                    <small
                        className="font-regular text-sm text-green-500">{(diff !== undefined && diff < 0) ? diff : "+" + diff}%</small>
                </p>
            </div>
            <div className={cardStyle}>
                <p className={cardTitleStyle}>Evènements futurs</p>
                <p className="text-2xl font-semibold">{data?.remainingEvents}</p>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
            <a href="/admin/events">
                <div className={cardStyle}>
                    <p className={cardTitleStyle}>Gestion des évènements</p>
                    <CalendarClock></CalendarClock>
                </div>
            </a>
            <a href="/admin/tickets">
                <div className={cardStyle}>
                    <p className={cardTitleStyle}>Gestion des réservations</p>
                    <Pin/>
                </div>
            </a>
            <a href="">
                <div className={cardStyle}>
                    <p className={cardTitleStyle}>Participants</p>
                    <Users/>
                </div>
            </a>
            <a href="#">
                <div className={cardStyle}>
                    <p className={cardTitleStyle}>Calendrier</p>
                    <Calendar></Calendar>
                </div>
            </a>
        </div>
        <div className="flex justify-center min-h-30 m-4 p-4">
            <HouseWifi size={100} color="#BABABA"/>
        </div>
    </div>
}



