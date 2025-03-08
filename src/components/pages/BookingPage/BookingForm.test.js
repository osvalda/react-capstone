import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { AlertProvider } from "../../../context/AlertContext";

test('Renders the BookingForm heading', () => {
    render(<AlertProvider><BookingForm availableTimes={[{value: "1900", optionValue: "19:00"}]}/></AlertProvider>);
    const headingElement = screen.getByText("Book a table with us");
    expect(headingElement).toBeInTheDocument();
})