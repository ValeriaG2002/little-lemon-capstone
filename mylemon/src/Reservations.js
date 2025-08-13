import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import DatePickerField from './DatePickerField';
import restaurant from './assets/restaurant.jpg';
import ConfirmationModal from './ConfirmationModal';

const generateTimeOptions = () => {
    const times = [];
    const startHour = 12; // 12:00 PM
    const endHour = 22;   // 10:00 PM

    for (let hour = startHour; hour <= endHour; hour++) {
        times.push(`${hour}:00`);
        if (hour < endHour) {
            times.push(`${hour}:30`);
        }
    }
    return times;
};

const validationSchema = object({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email('Invalid email address').required('Email is required'),
    phoneNumber: string().required('Phone number is required'),
    date: date()
        .required('Date is required')
        .nullable(),
    time: string()
        .required('Time is required'),
    guests: number()
        .min(1, 'Must be at least 1 guest')
        .max(10, 'Cannot exceed 10 guests')
        .required('Number of guests is required'),
    occasion: string()
        .oneOf(['Birthday', 'Anniversary'], 'Invalid Occasion')
        .required('Occasion is required'),
});

function Reservations() {
    const [showModal, setShowModal] = useState(false);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log('Form submitted with:', values);
        setShowModal(true);
        setSubmitting(false);
    };

    const availableTimes = generateTimeOptions();

    return (
        <>
            <div className="reservations-layout">
                <div className="reservations-info">
                    <h1>Reservations</h1>
                    <p>Book a table at Little Lemon for a unique dining experience in Chicago.</p>
                    <img src={restaurant} alt="Little Lemon Restaurant Interior" className="reserva-image" />
                </div>

                <div className="reservations-form-column">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="reservations-form">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            className={touched.firstName && errors.firstName ? 'input-error' : ''}
                                        />
                                        <ErrorMessage name="firstName" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field
                                            name="lastName"
                                            type="text"
                                            className={touched.lastName && errors.lastName ? 'input-error' : ''}
                                        />
                                        <ErrorMessage name="lastName" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className={touched.email && errors.email ? 'input-error' : ''}
                                        />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <Field
                                            name="phoneNumber"
                                            type="tel"
                                            className={touched.phoneNumber && errors.phoneNumber ? 'input-error' : ''}
                                        />
                                        <ErrorMessage name="phoneNumber" component="div" className="error" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <DatePickerField
                                            name="date"
                                            id="date"
                                        />
                                        <ErrorMessage name="date" component="div" className="error" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="time">Time</label>
                                        <Field
                                            name="time"
                                            as="select"
                                            className={touched.time && errors.time ? 'input-error' : ''}
                                        >
                                            <option value="">Select a time</option>
                                            {availableTimes.map((time, index) => (
                                                <option key={index} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="time" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="guests">Number of Guests</label>
                                        <Field
                                            name="guests"
                                            type="number"
                                            min="1"
                                            max="10"
                                            className={touched.guests && errors.guests ? 'input-error' : ''}
                                        />
                                        <ErrorMessage name="guests" component="div" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="occasion">Occasion</label>
                                        <Field
                                            name="occasion"
                                            as="select"
                                            className={touched.occasion && errors.occasion ? 'input-error' : ''}
                                        >
                                            <option value="">Select an occasion</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Anniversary">Anniversary</option>
                                        </Field>
                                        <ErrorMessage name="occasion" component="div" className="error" />
                                    </div>
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Make Reservation
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {showModal && <ConfirmationModal onClose={() => setShowModal(false)} />}
        </>
    );
}

export default Reservations;