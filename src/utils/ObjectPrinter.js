const PrintObject = (obj, log = false) => {
    if (obj == null) return "Object is null";
    let result = JSON.stringify(obj);
    if (log) console.warn(val)
    return result
}

export { PrintObject }