let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
    private worker: Worker;

    private constructor() {
        this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
    }

    static getInstance(): TimerWorkerManager {
        if (!instance) {
            instance = new TimerWorkerManager();
        }
        return instance;
    }

    postMessage(message: any) {
        this.worker.postMessage(message);
    }

    onmessege(callback: (message: MessageEvent<any>) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instance = null;
    }
}
