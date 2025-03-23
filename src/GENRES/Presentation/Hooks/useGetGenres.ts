import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { Gender_I } from "../../Domain/gender";
import { WebWorkerError } from "../../../UI/ALERTS/ERRORS/Domain/errors";


let workerInstance: Worker;
const getWorker = () => {
    if (!workerInstance) {
        workerInstance = new Worker(new URL("../../Infraestructure/genres-api.webworker.ts", import.meta.url));

        window.addEventListener("beforeunload", () => {
            workerInstance.terminate();
        });
    }
    return workerInstance;
};


const fetchGetGenresWorker = (
    action: string,
    params: { lastID: string | null }
): Promise<Gender_I[]> => {
    return new Promise((resolve, reject) => {
        const worker = getWorker();

        worker.onmessage = (event) => {
            if (event.data.status === "success") {
                resolve(event.data.data);
            } else {
                reject(new WebWorkerError(event.data.message));
            }
        };

        worker.postMessage({ action, ...params });
    });
};


export const useGetGenres = () => {
    return useInfiniteQuery({
        queryKey: ['genres'],
        queryFn: ({ pageParam }: { pageParam: string | null }) => {

            if (
                (pageParam !== null && typeof pageParam !== 'string')
                || (typeof pageParam === 'string' && pageParam.length <= 0)
            ) return [];

            return fetchGetGenresWorker(
                'getGenres',
                {
                    lastID: pageParam
                }
            )
        },
        getNextPageParam: (lastPage) => {
            return lastPage.length > 0 ? lastPage.at(-1)?.id : undefined
        },
        initialPageParam: null,
        gcTime: 60 * 60 * 1000,
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        retry: 5,
        retryDelay: 2000,
        staleTime: 60 * 60 * 1000,
    });
};



