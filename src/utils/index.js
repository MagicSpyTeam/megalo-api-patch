const dealObjectValue = (obj) => {
    const param = {};
    if (obj === null || obj === undefined || obj === "") return param;
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            param[key] = obj[key];
        }
    }
    return param;
};

export {dealObjectValue}
