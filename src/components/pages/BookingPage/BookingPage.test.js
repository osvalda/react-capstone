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
    let expectedValue = "21:00";

    let actualValue = BookingPageUtils.updateTimes('17:00', '2025-03-11');

    expect(actualValue).not.toHaveLength(0);
    expect(actualValue).toContain(expectedValue);
})

test('initializeTimes test', () => {
    let actualValue = BookingPageUtils.initializeTimes();

    expect(actualValue).not.toHaveLength(0);
})