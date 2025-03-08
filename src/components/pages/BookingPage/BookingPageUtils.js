function updateTimes(newDate) {
    return [
        {value: "2100", optionValue: "21:00"},
        {value: "2200", optionValue: "22:00"}
    ];
}

let initializeTimes  = () => {
    return [{value: "1900", optionValue: "19:00"}];
}

export default {updateTimes, initializeTimes}