import './Sidebar.css';
import React from 'react';
import { Container } from 'react-bootstrap';

function Sidebar() {
    return (
        <div>
            <Container>
                <div className='userlist'>
                    <h2>Users online</h2>
                </div>
            </Container>
        </div>
    )
}

export default Sidebar
