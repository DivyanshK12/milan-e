const dayEnum = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
}

function getMeal( time ){
    if( time < 12) {
        return "Breakfast";
    }
    else if( time >= 12 && time < 19) {
        return "Lunch";
    }
    else if( time >= 19 && time < 24) {
        return "Dinner";
    }
    return "None";
}

export { dayEnum, getMeal };