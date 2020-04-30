function perf(type, name, data, options = "") {
    console.log(`%c${type}: %c${name} | %c${data ? Math.round(data) : ''}ms %c${options}`, "color:red", "color:green", "color:blue", "color:lightblue")
}

window.addEventListener("load", () => {

    // Navigation Timing API
    const navEntries = performance.getEntriesByType("navigation");
    navEntries.forEach(entry => {
        perf("navigation", "fetch-start", entry.fetchStart);
        const ttfb = entry.responseStart - entry.fetchStart;
        perf("navigation", "ttfb", ttfb);
    });

    //old versions (fallback)
    if (navEntries.length == 0) {
        perf("navigation", "fetch-start", performance.timing.fetchStart);
        const ttfb = performance.timing.responseStart - performance.timing.fetchStart;
        perf("navigation", "ttfb", ttfb);
    }


    // Resource Timing API

    const resEntries = performance.getEntriesByType("resource");
    resEntries.forEach(entry => {
        const size = `${Math.round(entry.encodedBodySize / 1024)}kb`;
        const ttfb = entry.responseStart - entry.fetchStart;

        perf(entry.initiatorType, entry.name, ttfb, size)
    });

    // Performace Oberserver for User Timing : Custom
    const userObserver = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
            perf(entry.entryType, entry.name,
                entry.entryType == "mark" ? entry.startTime : entry.duration);
        });
    });

    userObserver.observe({ entryTypes: ["mark", "measure"] });
});