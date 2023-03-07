import { Card, Button } from "react-bootstrap";

export default function card() {
    return(
        <Card className="cardHighlight p-3">
        <Card.Body>
            <Card.Title>
                <h2>Sample Course</h2>
            </Card.Title>
            <Card.Text>
                Description:
                <Card.Subtitle>
                    This is a sample course offering
                </Card.Subtitle>
            </Card.Text>
            <Card.Text>
                Price:
                <Card.Subtitle>
                    PHP 40,000
                </Card.Subtitle>
            </Card.Text>
            <Button variant="primary">Enroll</Button>
        </Card.Body>
    </Card>
    )
}