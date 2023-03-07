/* import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' */

// example of destructuring
import { Button, Row, Col } from "react-bootstrap";

export default function Banner() {
    return(
        <Row>
            <Col className="p-5">
                <h1>Zuitt Coding Programs</h1>
                <p>Opportunities for everyone, everywhere (This component is from Banner.js)</p>
                <Button variant="primary">Enroll Now!</Button>
            </Col>
        </Row>
    )
}