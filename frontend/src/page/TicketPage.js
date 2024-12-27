import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {PageBreadcrumb} from '../components/Breadcrumb';
import {useParams} from 'react-router-dom';
import {MessageHistory} from '../components/message-history/MessageHistory';
import {UpdateTicket} from '../components/update-ticket/UpdateTicket';
import {useNavigate} from 'react-router-dom';
const mockTickets = require('../assets/dummy-tickets.json');

const TicketPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page={`Ticket ${id}`} />
            </Col>
        </Row>
        <Row>
            <Col>
                <h1>Ticket {id}</h1>
            </Col>
        </Row>
        <Row>
          <Col>
            <div>Subject : {mockTickets[id-1].subject}</div>
            <div>Status : {mockTickets[id-1].status}</div>
            <div>Ticket Opened At : {mockTickets[id-1].addedAt}</div>
          </Col>
          <Col>
            <Button variant="info" onClick={() => {navigate('/home')}}>Close Ticket</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {mockTickets[id-1].history && mockTickets[id-1].history.length > 0 ? (
              <MessageHistory msgs={mockTickets[id-1].history} />
            ) : (
              <div className='mt-3' style={{fontSize: '24px', fontWeight: 'bold'}}>No message history</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <UpdateTicket />
          </Col>
        </Row>
    </Container>
  )
}

export default TicketPage;