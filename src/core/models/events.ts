import {Enum} from "./types.ts";

export interface EventItem{
    libelle: string;
    date: string;
    state: string;
    stateIndex?: number;
    duration: number;
    description: string;
}

export enum EventState {
    Created = 1,
    Available = 2,
    Resumed = 3,
    Unavailable = 4,
    EnCours = 5
}


export const EventStateValue:Enum[] = [
    new Enum(EventState.Created, "Créée"),
    new Enum(EventState.Available, "Disponible"),
    new Enum(EventState.Resumed, "Achevé"),
    new Enum(EventState.Unavailable, "Indisponible"),
    new Enum(EventState.EnCours, "En cours")
]
// const stateIndex: number = EventState.Created; // => 1
// const stateName: string = EventState[2]; // => "Available"







