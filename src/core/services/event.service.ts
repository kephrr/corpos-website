// src/services/eventService.ts
import api from './api.ts';
import { RestResponse} from "../models/types.ts";
import {EventItem} from "../models/events.ts";
import {apiEventsURL} from "../resources.ts";

export const EventService = {
    findAll: async (
        page: number = 0,
        size: number = 10,
        state?: number
    ): Promise<RestResponse<EventItem[]>> => {
        const params = { page, size, ...(state && { state }) };
        return api.get(apiEventsURL, { params });
    },

    findById: async (id: string): Promise<EventItem> => {
        return api.get(`${apiEventsURL}/${id}`);
    },

    create: async (event: Omit<EventItem, 'id'>): Promise<EventItem> => {
        return api.post(apiEventsURL, event);
    },
};






