// src/hooks/useEvents.ts
import { useState, useEffect } from 'react';

import { RestResponse } from '../models/types.ts';
import {EventItem} from "../models/events.ts";
import {EventService} from "../services/event.service.ts";

export const useEvents = (
    page: number = 0,
    size: number = 10,
    state?: number
) => {
    const [data, setData] = useState<RestResponse<EventItem[]> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const events = await EventService.findAll(page, size, state);
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