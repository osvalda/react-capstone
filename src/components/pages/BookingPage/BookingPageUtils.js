import {fetchAPI} from "../../../utils/API"

function updateTimes(availableTimes, newDate) {
    return fetchAPI(new Date(newDate));
}

let initializeTimes  = () => {
    return fetchAPI(new Date());
}

export default {updateTimes, initializeTimes}