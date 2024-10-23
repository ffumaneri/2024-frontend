import axios from "axios"
import { useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function UserForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const enviarDatos = (e) => {
        setLoading(true)
        axios.post("https://jsonplaceholder.typicode.com/users").then(
            (response) => {
                navigate("/users")
            }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        enviarDatos()
    }
    const onChangeName = (e) => {
        e.preventDefault();        
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    if (loading) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> 
                Enviando datos...
            </Container>
          );        
    }
    return (
        <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={onChangeName}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default UserForm