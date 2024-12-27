import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

export const UpdateTicket = () => {

  const [replyContent, setReplyContent] = useState('');

  const handleOnChange = (e) => {
    setReplyContent(e.target.value);
  }

  const handleOnSubmit = () => {
    console.log(replyContent);
  }
    
  return (
    <Form className='mt-3' onSubmit={handleOnSubmit}>
      <Form.Label style={{fontSize: '16px', fontWeight: 'bold'}}>Reply</Form.Label>
      <Form.Control value={replyContent} onChange={handleOnChange} className='mb-3' as='textarea' placeholder='Enter your reply' row="5" name="replyContent" />
      <div className='text-right'>
        <Button type='submit' variant='info'>Reply</Button>
      </div>
    </Form>
  )
}
