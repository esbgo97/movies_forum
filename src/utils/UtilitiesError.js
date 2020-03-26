const handleError = (err) => {
    console.log(err)
    return "An error ocurred: " + err.toString();
}

export { handleError }