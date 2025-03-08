import { render, screen } from "@testing-library/react";
import ReservationPage from "./BookingPage";
import { AlertProvider } from "../../../context/AlertContext";
import BookingPageUtils from "./BookingPageUtils";

test('Renders the BookingPage', () => {
    const mockDispatch = jest.fn();
    render(<AlertProvider><ReservationPage /></AlertProvider>);

    const headingElement = screen.getByText("Book a table with us");
    expect(headingElement).toBeInTheDocument();
})

test('expectedValue test', () => {
    let expectedValue = [
        {value: "2100", optionValue: "21:00"},
        {value: "2200", optionValue: "22:00"}
    ];

    let actualValue = BookingPageUtils.updateTimes("semmi");

    expect(actualValue).toStrictEqual(expectedValue);
})

test('initializeTimes test', () => {
    let expectedValue = [{value: "1900", optionValue: "19:00"}];

    let actualValue = BookingPageUtils.initializeTimes();

    expect(actualValue).toStrictEqual(expectedValue);
})