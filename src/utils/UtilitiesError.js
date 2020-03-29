const handleError = (err) => {
    let msg = ""
    if (err.message)
        msg += err.message.replace(/ *\[[^)]*\] */g, "");
    if (msg == "") {
        msg = JSON.stringify(err)
    }
    return msg;
}

export { handleError }