import {Enum} from "./types.ts";

export interface TicketItem{
    name:string,
    telephone:string,
    email: string
    event: string,
    state: string,
    orderingDate: string,
    stateIndex: number
}

export enum TicketState {
    Valid = 1,
    Invalid = 2,
    Expired = 3
}

export const TicketStateValue:Enum[] = [
    new Enum(TicketState.Valid, "Valide"),
    new Enum(TicketState.Invalid, "Invalide"),
    new Enum(TicketState.Expired, "Expiré")
]







