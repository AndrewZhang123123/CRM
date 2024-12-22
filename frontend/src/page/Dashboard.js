import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import {TicketsTable} from '../components/TicketsTable';
const Dashboard = () => {
    const [tickets, setTickets] = useState([]);

    return (
        <Container>
            <Row>
                <Col className='text-center mt-5 mb-2'>
                    <Button className='btn-submit' style={{fontSize: '2rem'}}>
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
                    <TicketsTable />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;