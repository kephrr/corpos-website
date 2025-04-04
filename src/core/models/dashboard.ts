export interface Resume {
    totalTickets: number;
    thisWeek: number;
    thisMonth: number;
    lastMonth: number;
    thisMonthDifferential: number;
    remainingEvents: number;
}

export interface Notifications {
    newTickets: number;
    isCurrentEvent: boolean;
}