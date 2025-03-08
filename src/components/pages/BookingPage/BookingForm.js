import Button from './../../Button/Button'
import { useFormik } from "formik";
import useSubmit from '../../../hooks/useSubmit';
import * as Yup from 'yup';
import {useAlertContext} from "./../../../context/AlertContext";
import {FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  Center,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const BookingForm = ({ ...props }) => {
   const {isLoading, response, submit} = useSubmit();
   const { onOpen } = useAlertContext();

   const formik = useFormik({
      initialValues: {
        date: '',
        time: '1700',
        numberOfGuests: '',
        occasion: '',
      },
      onSubmit: (values) => {handleClick(values)},
      validationSchema: Yup.object({
        date: Yup.date().required().label("Date"),
        time: Yup.string().required().label("Time"),
        numberOfGuests: Yup.number().positive().integer().lessThan(11).label("Number of guests").required(),
        occasion: Yup.string().optional(),
      }),
    });

    const handleClick = (values) => {
      console.log("clicked " + isLoading);
      submit("http://someurl.com/", values)
      if (response && response.message.length > 0) {
        console.log(response);
        onOpen(response.type, response.message);
        if (response.type == 'success') {
          formik.resetForm();
        }
        response.message="";
      }
    };

    const handleInputChange = (e) => {
      if (e.target.name === 'date') {
        props.dispatchOnDateChange(e.target.value);
      }
      formik.setFieldValue(e.target.name, e.target.value)
    };

    return <Center>
    <form>
    <VStack spacing={4}>
    <Heading as="h1" id="contactme-section">
          Book a table with us
      </Heading>
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
                  <option key={act.value} value={act.value}>{act.optionValue}</option>
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
      <Button title={"Reserve a table"} type="submit" width="full" onClick={formik.handleSubmit}/>
    </VStack>
  </form>
  </Center>
}

export default BookingForm;