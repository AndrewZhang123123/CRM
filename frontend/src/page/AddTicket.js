import React, { useState } from 'react'
import { AddTicketForm } from '../components/add-ticket-form/AddTicketForm.js';
import { PageBreadcrumb } from '../components/Breadcrumb.js';

const AddTicket = () => {
    const [formData, setFormData] = useState({
        subject: "",
        issueDate: new Date().toISOString().split('T')[0],
        details: ""
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);

        setFormData({
            ...formData,
            [name]: value
        });
    }

  return (
    <div>
        <PageBreadcrumb page="New Ticket" />
        <AddTicketForm formData={formData} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange}/>
    </div>
  )
}

export default AddTicket;
