import ToggleButton from "./ui-ux/toggle-button";
import Avatar from "./ui-ux/avatar.tsx";
import {useState} from "react";

interface Game{
    awayTeam: string,
    homeTeam: string,
    awayScore: number,
    homeScore: number,
    hour:string,
    tourney:string,
    awayLogo?: string,
    homeLogo?: string,
    ticketsLink?: string,
    isEnded?: boolean,
}

const GameSchedule = () =>{
    const [scoreHidden, setScoreHidden] = useState(false);
    const games:Game[] = [
        {
            awayTeam : "SEN",
            homeTeam: "DEP",
            awayScore: 2,
            homeScore: 1,
            hour: "17:00",
            ticketsLink: "",
            tourney: "EXB"
        },
        {
            awayTeam : "ISM",
            homeTeam: "AGI",
            awayScore: 1,
            homeScore: 0,
            hour: "15:00",
            ticketsLink: "",
            tourney: "ICF"
        },
        {
            awayTeam : "USSD",
            homeTeam: "ISDD",
            awayScore: 3,
            homeScore: 4,
            hour: "11:00",
            ticketsLink: "",
            isEnded: true,
            tourney: "EXB"
        },
        {
            awayTeam : "SEN",
            homeTeam: "DEP",
            awayScore: 2,
            homeScore: 1,
            hour: "17:00",
            ticketsLink: "",
            tourney: "EXB"
        },
        {
            awayTeam : "ISM",
            homeTeam: "AGI",
            awayScore: 1,
            homeScore: 0,
            hour: "15:00",
            ticketsLink: "",
            tourney: "ICF"
        },
        {
            awayTeam : "USSD",
            homeTeam: "ISDD",
            awayScore: 3,
            homeScore: 4,
            hour: "11:00",
            ticketsLink: "",
            isEnded: true,
            tourney: "EXB"
        },
        {
            awayTeam : "SEN",
            homeTeam: "DEP",
            awayScore: 2,
            homeScore: 1,
            hour: "17:00",
            ticketsLink: "",
            tourney: "EXB"
        },
        {
            awayTeam : "ISM",
            homeTeam: "AGI",
            awayScore: 1,
            homeScore: 0,
            hour: "15:00",
            ticketsLink: "",
            tourney: "ICF"
        },
        {
            awayTeam : "USSD",
            homeTeam: "ISDD",
            awayScore: 3,
            homeScore: 4,
            hour: "11:00",
            ticketsLink: "",
            isEnded: true,
            tourney: "EXB"
        },
        {
            awayTeam : "SEN",
            homeTeam: "DEP",
            awayScore: 2,
            homeScore: 1,
            hour: "17:00",
            ticketsLink: "",
            tourney: "EXB"
        },
        {
            awayTeam : "ISM",
            homeTeam: "AGI",
            awayScore: 1,
            homeScore: 0,
            hour: "15:00",
            ticketsLink: "",
            tourney: "ICF"
        },
        {
            awayTeam : "USSD",
            homeTeam: "ISDD",
            awayScore: 3,
            homeScore: 4,
            hour: "11:00",
            ticketsLink: "",
            isEnded: true,
            tourney: "EXB"
        },
        {
            awayTeam : "SEN",
            homeTeam: "DEP",
            awayScore: 2,
            homeScore: 1,
            hour: "17:00",
            ticketsLink: "",
            tourney: "EXB"
        },
        {
            awayTeam : "ISM",
            homeTeam: "AGI",
            awayScore: 1,
            homeScore: 0,
            hour: "15:00",
            ticketsLink: "",
            tourney: "ICF"
        },
        {
            awayTeam : "USSD",
            homeTeam: "ISDD",
            awayScore: 3,
            homeScore: 4,
            hour: "11:00",
            ticketsLink: "",
            isEnded: true,
            tourney: "EXB"
        }
    ]

    return (
        <div className="flex gap-1 bg-white h-20 max-w-screen">
            <div className="flex-1 flex flex-col items-center text-sm p-2">
                <select className="py-1 px-2 w-30 bg-gray-200 rounded-sm outline-none cursor-pointer"
                        name="date" id="date">
                    <option value="09/12/24" className="text-xs poppins-bold">Dim 13 Avr</option>
                    <option value="09/12/24" className="text-xs poppins-bold">Sam 12 Avr</option>
                    <option value="09/12/24" className="text-xs poppins-bold">Ven 11 Avr</option>
                    <option value="09/12/24" className="text-xs poppins-bold">Jeu 10 Avr</option>
                    <option value="09/12/24" className="text-xs poppins-bold">Mer 9 Avr</option>
                </select>
                <div className="py-2">
                    <ToggleButton onChange={()=> setScoreHidden(!scoreHidden)}
                                  activeColor={"MediumBlue"} initialValue={false} label="Scores"></ToggleButton>
                </div>
            </div>
            <div className="flex-11 flex overflow-x-auto">
                {scoreHidden?
                    <div className="h-full w-full flex justify-center items-center bebas-neue-thick text-lg blue-dark-custom">Les scores ont été masqués</div>
                    :games.map((g: Game) => (
                    <div className="flex">
                        <div className="h-full w-30 border-r border-gray-200 p-1">
                            <div className="flex justify-between text-xs">
                                <small>{g.isEnded ? "FINAL" : g.hour}</small>
                                <small>{g.tourney}</small>
                            </div>
                            <div className="flex justify-between">
                                <Avatar name={g.homeTeam[0]+g.homeTeam[1]}></Avatar>
                                <small className="font-medium">{g.homeTeam}</small>
                                <small>{g.homeScore}</small>
                            </div>
                            <div className="flex justify-between">
                                <Avatar name={g.awayTeam[0]+g.awayTeam[1]}></Avatar>
                                <small className="font-medium">{g.awayTeam}</small>
                                <small>{g.awayScore}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameSchedule;






