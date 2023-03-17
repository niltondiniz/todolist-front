import React from "react";
import { Form, Col, Button } from "react-bootstrap";

interface Props{

}

export default class TaskFormComponent extends React.Component<Props>{

    render(){
        return(
            <Form className="d-flex justify-content-between mb-5">
                <Col sm='11'>
                    <Form.Control type="text" placeholder="Digite aqui a descrição da tarefa" id='description'/>
                </Col>
                <Button>Add</Button>
            </Form>
        )
    }

}