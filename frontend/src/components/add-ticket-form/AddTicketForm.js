import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './AddTicketForm.css';

export const AddTicketForm = ({
  handleOnSubmit, 
  handleOnChange,
  formData
}) => {

  console.log(formData);

  return (
    <div className="add-ticket-card">
      <h1>Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Subject" 
              name="subject" 
              required 
              value={formData.subject}
              onChange={handleOnChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Issue Found At</Form.Label>
            <Form.Control 
              type="date" 
              placeholder="Issue " 
              name="issueDate" 
              required 
              value={formData.issueDate}
              onChange={handleOnChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            placeholder="Details" 
            name="details" 
            required 
            onChange={handleOnChange}
            value={formData.details}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="btn-fullwidth btn-submit">Submit</Button>
      </Form>
    </div>
  )
}
