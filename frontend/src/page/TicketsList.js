import React, { useState } from 'react';
import { PageBreadcrumb } from '../components/Breadcrumb.js';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {TicketsTable} from '../components/TicketsTable.js';
import {SearchForm} from '../components/SearchForm.js';
import {useNavigate} from 'react-router-dom';

const mockTickets = require('../assets/dummy-tickets.json');

const TicketsList = () => {

  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('subject');
  const [searchContent, setSearchContent] = useState('');

  const handleTypeChange = (e) => {
    setSearchContent('');
    setSearchType(e.target.value);
  }

  const handleSearchChange = (e) => {
    setSearchContent(e.target.value);
  }

  const handleSearchClear = () => {
    setSearchContent('');
  }

  const handleAddNewTicket = () => {
    navigate('/addTicket');
  }

  return (
    <div>
      <PageBreadcrumb page="Tickets List" />
      <Container>
        <Row>
          <Col>
            <h1>All Tickets</h1>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Button variant="info" onClick={handleAddNewTicket}>Add New Ticket</Button>
          </Col>
          <Col className="text-right">
            <SearchForm handleSearchClear={handleSearchClear} handleTypeChange={handleTypeChange} handleSearchChange={handleSearchChange} searchType={searchType} searchContent={searchContent} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TicketsTable page="ticketsList" searchType={searchType} searchContent={searchContent} initialData={mockTickets} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TicketsList;