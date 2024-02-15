
import listEvents from '../data/data.json'
import Event from "./Event.jsx"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Alert  from 'react-bootstrap/Alert'
import { useState,useEffect } from 'react'

function Events(props) {

    const [showAlert, setShowAlert] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    const handleAlert = () => {
        setShowAlert(true)
        setTimeout( ()=> {setShowAlert(false)},1000)
    }
    
    useEffect( () => {
        setTimeout(() => {
            setShowWelcome(false)
        },2000
        )
    },[]) 

    
    return (
        <>

        {showWelcome && <Alert variant="success"> welcome to events </Alert>}
            <Container>
                <Row>

                    {listEvents?.map((e, index) =>
                        <Col key={index}>
                            <Event eventObject={e} showAlert={handleAlert} />
                        </Col>
                    )}
                </Row>
            </Container>

            {showAlert && <Alert variant="success"> event added </Alert>}
        </>
    )

}

export default Events;