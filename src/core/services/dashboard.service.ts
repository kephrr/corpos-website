import api from './api.ts';
import { RestResponse} from "../models/types.ts";
import {Notifications, Resume} from "../models/dashboard.ts";

export const DashboardService = {
    findResume: async (): Promise<RestResponse<Resume>> => {
        return api.get('/stats/resume');
    },
    findNotifications: async (): Promise<RestResponse<Notifications>> => {
        return api.get('/stats/notifications');
    },
};