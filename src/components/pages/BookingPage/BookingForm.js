import Button from './../../Button/Button'
import { useFormik } from "formik";
import * as Yup from 'yup';
import {useAlertContext} from "./../../../context/AlertContext";
import {FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {submitAPI} from "../../../utils/API";
import {useNavigate} from "react-router";
import "./BookingForm.css";

const BookingForm = ({ ...props }) => {
   const { onOpen } = useAlertContext();
     const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
        date: '',
        time: '',
        numberOfGuests: '',
        occasion: '',
      },
      onSubmit: (values) => {submitForm(values)},
      validationSchema: Yup.object({
        date: Yup.date().required().min(new Date(new Date().setHours(0,0,0,0))).label("Date"),
        time: Yup.string().required().label("Time"),
        numberOfGuests: Yup.number().positive().integer().lessThan(11).label("Number of guests").required(),
        occasion: Yup.string().optional(),
      }),
    });

  const submitForm = (values) => {
    if (submitAPI(values)) {
      console.log("siker");
      formik.resetForm();
      navigate("/confirmedBooking");
    } else {
      onOpen("error", "Unfortunately the reservation has failed, please try again later!");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      props.dispatchOnDateChange(e.target.value);
    }
    formik.setFieldValue(e.target.name, e.target.value)
  };

  return <div className='bookingForm'>
    <h1>
      Book a table with us
    </h1>
    <form>
      <VStack spacing={4}>
        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
          <FormLabel htmlFor="date">Choose date</FormLabel>
          <Input
            id="date"
            name="date"
            type="date"
            {...formik.getFieldProps("date")}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{formik.errors.date ? formik.errors.date: null}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.time && formik.errors.time}>
          <FormLabel htmlFor="time">Choose time</FormLabel>
          <Select
              id="time"
              name="time"
              onChange={handleInputChange}
              {...formik.getFieldProps("time")}>
                {props.availableTimes.map((act) =>
                    <option key={act} value={act}>{act}</option>
                )}
          </Select>
          <FormErrorMessage>{formik.errors.time ? formik.errors.time: null}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.numberOfGuests && formik.errors.numberOfGuests}>
          <FormLabel htmlFor="numberOfGuests">Number of guests</FormLabel>
          <NumberInput min={1} max={10} allowMouseWheel onChange={val => formik.setFieldValue("numberOfGuests", val)}>
              <NumberInputField
              name="numberOfGuests"
              id="numberOfGuests"
              {...formik.getFieldProps("numberOfGuests")}></NumberInputField>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>{formik.errors.numberOfGuests ? formik.errors.numberOfGuests: null}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
          <FormLabel htmlFor="occasion">Occasion</FormLabel>
          <Input
            id="occasion"
            name="occasion"
            onChange={handleInputChange}
            {...formik.getFieldProps("occasion")}
          />
          <FormErrorMessage>{formik.errors.occasion ? formik.errors.occasion: null}</FormErrorMessage>
        </FormControl>
        <Button title={"Reserve a table"} type="submit" onClick={formik.handleSubmit} role="submit" aria-label="On Click"/>
      </VStack>
    </form>
    </div>
}

export default BookingForm;