import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./MessageHistory.css";

export const MessageHistory = ({msgs}) => {
  return (
    <div className='message-history'>
        {msgs.map((msg, index) => (
            <div className={`message-item ${msg.messageBy === 'client' ? 'from-client' : 'from-operator'}`}>
                <div className='sender-info'>
                    <div className='sender-name'>{msg.messageBy}</div>
                    <div className='sender-date'>{msg.date}</div>
                </div>
                <div className='sender-message'>
                    {msg.message}
                </div>
            </div>
        ))}
    </div>
  )
}
