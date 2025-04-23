let isRunning = false;

self.onmessage = function (e) {
    if (isRunning) return;
    isRunning = true;

    const state = e.data;
    const { activeTask, secondsRemaining } = state;

    const endDate = activeTask.startDate + secondsRemaining * 1000;

    function tick() {
        const now = Date.now();
        countDownSeconds = Math.floor((endDate - now) / 1000)+1;
        self.postMessage(countDownSeconds);

        setTimeout(tick, 1000)
    }

    tick()
};
