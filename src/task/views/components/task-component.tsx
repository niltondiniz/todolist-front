import React from "react";
import { ListGroup, Row, Col, FormCheck } from "react-bootstrap";

interface Props{
    taskDescription: string;
    checked: boolean;
}

export default class TaskComponent extends React.Component<Props>{
    render(){
        const { taskDescription, checked } = this.props;        
        return(
            <ListGroup>
                <ListGroup.Item action variant={!checked ? 'primary' : 'secondary'} className="mb-2">
                    <Row>
                        <Col sm='1'>
                            <FormCheck checked={checked}></FormCheck>                                        
                        </Col>                     
                        <Col>
                            <span>{taskDescription}</span>
                        </Col>
                    </Row>
                </ListGroup.Item>                                    
            </ListGroup>
        )
    }
}
