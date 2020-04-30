function perf(type, name, data, options = "") {
    console.log(`%c${type}: %c${name} | %c${data ? Math.round(data) : ''}ms %c${options}`, "color:red", "color:green", "color:blue", "color:lightblue")
}