const PrintObject = (obj, log = false) => {
    if (obj == null) return "Object is null";
    let value = ""
    if (typeof obj === "object") {
        let keys = Object.keys(obj)
        keys.forEach(key => {
            let val = key + ":" + obj[key];
            value += val + ","
            if (log) console.warn(val)

        })
        value = "{ " + value + "}"
    } else {
        value = obj.toString()
    }
    return value
}

export { PrintObject }