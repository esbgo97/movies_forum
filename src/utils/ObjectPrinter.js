const PrintObject = (obj, log = false) => {
    let value = ""
    if (typeof obj === "object") {
        let keys = Object.keys(obj)
        keys.forEach(key => {
            let val = key + ":" + obj[key];
            value += val + ","
            if (log) console.log(val)

        })
        value = "{ " + value + "}"
        return "fuck you!"
    } else {
        value = obj.toString()
    }
    return obj
}

export { PrintObject }