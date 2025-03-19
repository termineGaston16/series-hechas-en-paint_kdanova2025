import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query"
import { fetchProyectsPreviewWorker } from "../../Infraestructure/fetch-proyectspreview-worker";

export const getProjectsPreviewByGender = (
    gender: string
) => {
    return useInfiniteQuery({
        queryKey: ['projectsPreviewByGender', gender],
        queryFn: ({ pageParam }: { pageParam: string | null }) => {
            if (typeof gender !== 'string' || gender.length <= 0) return [];

            return fetchProyectsPreviewWorker(
                'getProjectsPreviewByGender',
                {
                    keyName: pageParam,
                    gender: gender
                }
            );
        },
        getNextPageParam: (lastPage) => {
            return lastPage.length > 0 ? lastPage.at(-1)?.key_name : undefined
        },
        initialPageParam: null,
        enabled: typeof gender === 'string' && gender.length > 0,
        gcTime: 60 * 60 * 1000,
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        retry: 5,
        retryDelay: 2000,
        staleTime: 60 * 60 * 1000,

    })
}