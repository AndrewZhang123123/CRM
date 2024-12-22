import React from 'react'
import {Table} from 'react-bootstrap';

export const TicketsTable = () => {

    const mockTickets = [
        {id: 1, title: 'Ticket 1', status: 'Open', priority: 'High', createdAt: '2024-01-01'},
        {id: 2, title: 'Ticket 2', status: 'Closed', priority: 'Low', createdAt: '2024-01-02'},
        {id: 3, title: 'Ticket 3', status: 'In Progress', priority: 'Medium', createdAt: '2024-01-03'},
    ];

    return (
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    {Object.keys(mockTickets[0]).map((key, index) => (
                        <th >{key.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {mockTickets.map((ticket, index) => (
                    <tr key={index}>
                        {Object.values(ticket).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
