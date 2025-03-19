import { WebWorkerError } from "../../../UI/ALERTS/ERRORS/Domain/Errors";
import { ProyectPreview_I } from "../Domain/proyect_preview";

let workerInstance: Worker;
const getWorker = () => {
    if (!workerInstance) {
        workerInstance = new Worker(new URL('./proyects-preview-api-webworker', import.meta.url))

        window.addEventListener('beforeunload', () => {
            workerInstance.terminate();
        })
    }

    return workerInstance;
}

export const fetchProyectsPreviewWorker = (
    action: string,
    ...keys: any[]
): Promise<ProyectPreview_I[]> => {
    return new Promise((resolve, reject) => {
        const worker = getWorker();

        worker.onmessage = (event) => {
            if (event.data.status === 'success') {
                resolve(event.data.data)
            } else {
                reject(new WebWorkerError(event.data.message));
            }
        }

        worker.postMessage({
            action,
            ...keys
        })
    })
}