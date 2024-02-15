import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Event(props) {

    const [event, setEvent] = useState(props.eventObject);
    const [like, setLike] = useState(props.eventObject.like);


    const bookEvent = () => {


        setEvent(e => {
            console.log("event here ", typeof e);
            const copy = { ...e }
            copy.nbTickets -= 1;
            copy.nbParticipants += 1;
            props.showAlert()
            return copy
        })
    }
    const handleLike = () =>{
        setLike((prevlike) => !prevlike); 
    } 

    return (
        <>
            {/* <h1>Count here: {count}</h1>
            <Button variant="primary" onClick={() => incrementCount()} >increment me</Button> */}
            
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img-fluid" variant="top" src={event.nbTickets > 0 ? event.img : "images/soldOut.png"} />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>
                        Price: {event?.price} <br />
                        Number of tickets: {event.nbTickets} <br />
                        Number of participants: {event.nbParticipants} <br />
                    </Card.Text>
                    <Button variant="primary" onClick={() => bookEvent()} disabled={event.nbTickets == 0} >Book an event</Button>
                    <Button variant={like ? "primary" : "danger "} onClick={() => handleLike()} > {like ? "like" : 'dislike'} </Button>
                </Card.Body>
            </Card>
        </>

        // "name": "Journées cinématographiques de Carthage (JCC)",
        // "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        // "img": "images/nothing.jpg",
        // "price": 7,
        // "nbTickets": 20,
        // "nbParticipants": 35,
        // "like": false
    )
}

export default Event;