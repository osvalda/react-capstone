import BookingForm from "./BookingForm";
import { useReducer } from 'react';
import BookingPageUtils from "./BookingPageUtils";

function ReservationPage() {
    const [availableTimes, dispatchOnDateChange] = useReducer(
        BookingPageUtils.updateTimes,
        [],
        BookingPageUtils.initializeTimes);

    return <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange}/>
}

export default ReservationPage;