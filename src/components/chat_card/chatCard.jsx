import React from 'react';
import './chatCard.css';
import { Card } from 'react-bootstrap';

function ChatCard() {
    return (
        <div>
            <Card bg={"light"} className='chat-message'>
                <Card.Body>
                    <p>TimeStamp</p>
                    <p>Message</p>
                    <p>@username</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ChatCard
