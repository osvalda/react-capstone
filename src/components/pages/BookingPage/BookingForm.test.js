import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { AlertProvider } from "../../../context/AlertContext";

test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><AlertProvider><BookingForm availableTimes={["19:00"]}/></AlertProvider></BrowserRouter>);
    const headingElement = screen.getByText("Book a table with us");
    expect(headingElement).toBeInTheDocument();
})