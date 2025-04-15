import {RestResponse} from "../models/types.ts";
import api from "./api.ts";
import {TicketItem} from "../models/tickets.ts";
import {apiTicketsURL} from "../resources.ts";

export const TicketService = {
    findAll: async (
        page: number = 0,
        size: number = 10,
        state?: number
    ): Promise<RestResponse<TicketItem[]>> => {
        const params = { page, size, ...(state && { state }) };
        return api.get(apiTicketsURL, { params });
    },

    create: async (event: Omit<TicketItem, 'id'>): Promise<TicketItem> => {
        return api.post(apiTicketsURL, event);
    },
}