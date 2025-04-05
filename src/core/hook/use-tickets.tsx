import {useEffect, useState} from "react";
import {RestResponse} from "../models/types.ts";
import {TicketService} from "../services/ticket.service.ts";
import {TicketItem} from "../models/tickets.ts";

export const useTickets = (
    page: number = 0,
    size: number = 10,
    state?: number
) => {
    const [data, setData] = useState<RestResponse<TicketItem[]> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const events = await TicketService.findAll(page, size, state);
                setData(events);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [page, size, state]);

    return { data, loading, error };
};