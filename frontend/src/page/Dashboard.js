import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import {TicketsTable} from '../components/TicketsTable';
import {PageBreadcrumb} from '../components/Breadcrumb';
import {useNavigate} from 'react-router-dom';

const mockTickets = require('../assets/dummy-tickets.json');
const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="" />
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Button className='btn-submit' style={{fontSize: '2rem'}} onClick={() => navigate('/addTicket')}>
                        Create Ticket
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <div>Total Tickets: ${50}</div>
                    <div>Pending Tickets: ${10}</div>
                </Col>
            </Row>
            <Row>
                <Col className='mt-5'>
                    <TicketsTable page="dashboard" initialData={mockTickets}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;