import React from "react";
import { Button, Card, Col, Row} from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import TaskController from "../../task/controllers/task-controller";
import { ContainerTask } from "./style";


interface Props{

}

export default class HomeViewOld extends React.Component<Props >{

    render(){
        return (
            <ContainerTask className="vh-100 background-page">                    
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col>
                        <Card>
                            <Card.Body className="py-5 px-5">                                    
                                 
                                <TaskController userId={1} />
                                <Button>
                                    <HeartFill/>    
                                </Button>                                  
                                                                   
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>
            </ContainerTask>            
        );
    }
}