import React from "react";
import { Button, Card, Col, Container,Row} from "react-bootstrap";
import { ArrowDown, Heart, HeartFill } from "react-bootstrap-icons";
import TaskController from "../../task/controllers/task-controller";
import TaskFormComponent from "../../task/views/components/task-form-component";
import TaskTabGroup from "../../task/views/components/task-tab-group";


interface Props{

}

export default class HomeView extends React.Component<Props >{

    render(){
        return (
            <Container className="vh-100">                    
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col>
                        <Card>
                            <Card.Body className="py-5 px-5">                                    
                                <TaskFormComponent />  
                                <TaskController userId={1} />
                                <Button>
                                    <HeartFill/>    
                                </Button>                                  
                                                                   
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>
            </Container>            
        );
    }
}