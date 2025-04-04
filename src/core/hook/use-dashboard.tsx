import {useEffect, useState} from "react";
import {RestResponse} from "../models/types.ts";
import {DashboardService} from "../services/dashboard.service.ts";
import {Notifications, Resume} from "../models/dashboard.ts";

export const useResume = () => {
    const [resume, setData] = useState<RestResponse<Resume> | null>(null);
    /*const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);*/

    useEffect(() => {
        const fetchResume = async () => {
            //setLoading(true);
            try {
                const resume = await DashboardService.findResume();
                setData(resume);
            }  catch (err) {
                //setError(err instanceof Error ? err.message : 'Unknown error');
                console.error("setError(err instanceof Error ? err.message : 'Unknown error');")
            } finally {
                //setLoading(false);
                console.info("Loading ended")
            }
        };
        fetchResume();
    }, []);

    return { resume };
};

export const useNotifications = () => {
    const [notifications, setData] = useState<RestResponse<Notifications> | null>(null);
    /*const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);*/

    useEffect(() => {
        const fetchNotifications = async () => {
            //setLoading(true);
            try {
                const notifications = await DashboardService.findNotifications();
                setData(notifications);
            } catch (err) {
                //setError(err instanceof Error ? err.message : 'Unknown error');
                console.error("setError(err instanceof Error ? err.message : 'Unknown error');")
            } finally {
                //setLoading(false);
                console.info("Loading ended")
            }
        };

        fetchNotifications();
    },);

    return { notifications };
};