import React from 'react';
import { Button } from 'react-bootstrap';
import './chatInput.css';

function ChatInput() {
    return (
        <div className='input-window'>
            <form>
                <input 
                className='input-text-box' 
                id='task-type' 
                type='text' 
                autoComplete='off' 
                placeholder='Enter Messgae Here...'
                ></input>
                <Button className='submit-button'>
                    Send
                </Button>
            </form>            
        </div>
    )
}

export default ChatInput
