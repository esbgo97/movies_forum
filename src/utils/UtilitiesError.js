const handleError = (err) => {
    //console.warn(err)
    // let keys = Object.keys(err);
    // let resp= ""
    // keys.forEach(k => {
    //     resp += k+","
    // })
    let msg = err.message.replace(/ *\[[^)]*\] */g, "");
    

    return msg;
}

export { handleError }