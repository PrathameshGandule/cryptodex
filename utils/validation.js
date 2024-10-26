// Required fields
const isRequired = (input) => {
    // input === '' ? "This value is required" : true;
    if(input === ''){
        return "This value is required"
    } else {
        return true;
    }
}

export { isRequired };