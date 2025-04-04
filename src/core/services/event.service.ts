// src/services/eventService.ts
import api from './api.ts';
import { RestResponse} from "../models/types.ts";
import {EventItem} from "../models/events.ts";

export const EventService = {
    findAll: async (
        page: number = 0,
        size: number = 10,
        state?: number
    ): Promise<RestResponse<EventItem[]>> => {
        const params = { page, size, ...(state && { state }) };
        return api.get('/events', { params });
    },

    findById: async (id: string): Promise<Event> => {
        return api.get(`/events/${id}`);
    },

    create: async (event: Omit<Event, 'id'>): Promise<Event> => {
        return api.post('/events', event);
    },
};