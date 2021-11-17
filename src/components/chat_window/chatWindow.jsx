import React from 'react'
import './chatWindow.css'
import { Container } from 'react-bootstrap'
import ChatInput from '../chatinput/chatInput'

function ChatWindow() {
    return (
        <div>
            <Container>
                <div className='chat-window'>
                    <h3>This is the chat window</h3>
                    <ChatInput />
                </div>
            </Container>
            
        </div>
    )
}

export default ChatWindow
