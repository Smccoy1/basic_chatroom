import React from 'react'
import './chatWindow.css'
import { Container } from 'react-bootstrap'
import ChatInput from '../chatinput/chatInput'
import ChatCard from '../chat_card/chatCard'

function ChatWindow() {
    return (
        <div>
            <Container>
                <div className='chat-window'>
                    <h3>This is the chat window</h3>
                    <ChatCard />
                    <ChatInput />
                </div>
            </Container>
            
        </div>
    )
}

export default ChatWindow
