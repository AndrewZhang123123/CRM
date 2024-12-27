import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap';

export const TicketsTable = ({searchType, searchContent, initialData, page}) => {

    const [displayedTickets, setDisplayedTickets] = useState(initialData);

    
    const onSearch = () => {
        const filteredTickets = initialData.filter((ticket) => {
            if (searchType === 'subject') {
                return ticket.subject.toLowerCase().includes(searchContent.toLowerCase());
            }
            else if (searchType === 'status') {
                return ticket.status.toLowerCase().includes(searchContent.toLowerCase());
            }
            else if (searchType === 'id') {
                return ticket.id.toString().includes(searchContent);
            }
        });
        setDisplayedTickets(filteredTickets);
    }
    useEffect(() => {
        if (page === 'dashboard') {
            setDisplayedTickets(initialData);
        }
        else {
            onSearch();
        }
    }, [searchType, searchContent]);

    return (
        <>
        {displayedTickets.length > 0 ? (
            <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    {Object.keys(displayedTickets[0]).map((key, index) => (
                        <th >{key.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    displayedTickets.map((ticket) => {
                        return <tr>
                            {Object.keys(ticket).map((key) => {
                                if (key !== 'history') {
                                    return <td>{ticket[key]}</td>
                                }
                                else {
                                    return <td>
                                       <a href={`/ticket/${ticket.id}`}>View</a>
                                    </td>
                                }
                            })}
                        </tr>
                    })
                }
            </tbody>
        </Table>
        ) : (
        <p>No tickets found</p>
    )}
    </>
    )
}
