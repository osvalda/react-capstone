import BookingForm from "./BookingForm";
import { useReducer } from 'react';
import BookingPageUtils from "./BookingPageUtils";

function ReservationPage() {
//    const [availableTimes, setAvailableTimes]= useState(
//       [
//          {value: "1700", optionValue: "17:00"},
//          {value: "1800", optionValue: "18:00"},
//          {value: "1900", optionValue: "19:00"},
//          {value: "2000", optionValue: "20:00"},
//          {value: "2100", optionValue: "21:00"},
//          {value: "2200", optionValue: "22:00"},
//       ]);

    const [availableTimes, dispatchOnDateChange] = useReducer(
        BookingPageUtils.updateTimes,
        [],
        BookingPageUtils.initializeTimes);

    return <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange}/>
}

export default ReservationPage;