import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { AlertProvider } from "../../../context/AlertContext";

test('Renders the BookingForm heading', () => {
    render(<AlertProvider><BookingForm availableTimes={["19:00"]}/></AlertProvider>);

    const headingElement = screen.getByText("Book a table with us");
    expect(headingElement).toBeInTheDocument();
})

test('Form submittion validation', async() => {
    render(<AlertProvider><BookingForm availableTimes={["19:00"]}/></AlertProvider>);

    const submitButton = screen.getByRole("submit")
    expect(submitButton).toBeInTheDocument();
    expect(screen.queryByText("Date is a required field")).not.toBeInTheDocument();
    expect(screen.queryByText("Time is a required field")).not.toBeInTheDocument();
    expect(screen.queryByText("Number of guests is a required field")).not.toBeInTheDocument();

    await act(async () => {
        fireEvent.click(submitButton);
    });

    expect(screen.queryByText("Date is a required field")).toBeInTheDocument();
    expect(screen.queryByText("Time is a required field")).toBeInTheDocument();
    expect(screen.queryByText("Number of guests is a required field")).toBeInTheDocument();
})