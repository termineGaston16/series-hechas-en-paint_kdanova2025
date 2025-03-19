import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { Gender_I } from "../../Domain/gender";
import { WebWorkerError } from "../../../UI/ALERTS/ERRORS/Domain/Errors";


let workerInstance: Worker;
const getWorker = () => {
    if (!workerInstance) {
        workerInstance = new Worker(new URL("../../Infraestructure/genres-api.webworker.ts", import.meta.url));
    }
    return workerInstance;
};


const fetchGetGenresWorker = (
    action: string,
    params: {
        lastID: string | null;
    }
) => {
    return new Promise((resolve, reject) => {
        const worker = getWorker();

        worker.onmessage = (event) => {
            if (event.data.status === "success") {
                resolve(event.data.data);
            } else {
                reject(new WebWorkerError(event.data.message));
            }
            worker.terminate();
        };

        worker.postMessage({ action, ...params });
    });
};


export const useGetGenres = (
    action: string,
    params: {
        lastID: string | null;
    }
) => {
    return useInfiniteQuery({
        queryKey: ['genres'],
        queryFn: ({ pageParam = params.lastID }: { pageParam: string | null }) =>
            fetchGetGenresWorker(
                action,
                {
                    ...params,
                    lastID: pageParam
                }
            ),
        getNextPageParam: (lastGender: Gender_I) => lastGender?.id ?? undefined,
        initialPageParam: null,
        enabled: typeof action === 'string'
            && action.length > 0
            && (typeof params.lastID === 'string' || params.lastID === null),
        gcTime: 60 * 60 * 1000,
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        retry: 5,
        retryDelay: 2000,
        staleTime: 60 * 60 * 1000,
    });
};


