import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicForm() {
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ram, setRam] = useState("")
  const [discoduro, setDiscoDuro] = useState("")
  const [tipodd, setTipodd] = useState("SSD")
  const [marcaValid, setMarcaValid] = useState(true)
  const [formValidated, setFormValidated] = useState(false)
  const handleMarca = (e) => {
    e.preventDefault();
    setMarca(e.target.value);
  }
  const handleModelo = (e) => {
    e.preventDefault();
    setModelo(e.target.value);
  }
  const handleRam = (e) => {
    e.preventDefault();
    setRam(e.target.value);
  }
  const handleDiscoDuro = (e) => {
    e.preventDefault();
    setDiscoDuro(e.target.value);
  }
  const handleTipodd = (e) => {
    e.preventDefault();
    setTipodd(e.target.value);
  }
  const handleSubmit = (e) => {
    setMarcaValid(marca !== "")
    setFormValidated(true)
    e.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} noValidate >
      <Row>
      <Form.Group as={Col} className="mb-3" controlId="marca">
        <Form.Label>Marca</Form.Label>
        <Form.Control type="text" isValid={marcaValid && formValidated} isInvalid={!marcaValid} placeholder="Ingresar Marca" onChange={handleMarca} />
        <Form.Control.Feedback type="invalid">
          Marca es obligatorio.
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Todo bien
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Marca de la laptop
        </Form.Text>
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="modelo">
        <Form.Label>Modelo</Form.Label>
        <Form.Control type="text" placeholder="Ingresar Modelo" onChange={handleModelo} />
        <Form.Text className="text-muted">
          Modelo de la laptop
        </Form.Text>
      </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="ram">
        <Form.Label>RAM</Form.Label>
        <Form.Control type="text" placeholder="GB" onChange={handleRam}/>
        <Form.Text className="text-muted">
        Cantidad de RAM en GB
        </Form.Text>
      </Form.Group>
      <Row>
      <Form.Group as={Col} className="mb-3" controlId="discoduro">
        <Form.Label>Disco Duro</Form.Label>
        <Form.Control type="text" placeholder="GB" onChange={handleDiscoDuro}/>
        <Form.Text className="text-muted">
        Tamaño del disco en GB
        </Form.Text>
        </Form.Group>            
        <Form.Group as={Col} className="mb-3" controlId="discoduro">
        <Form.Label>Tipo</Form.Label>
        <Form.Select className="mb-3" aria-label="Tipo de Disco" controlId="tipodd" onChange={handleTipodd}>
          <option value="SSD">SSD</option>
          <option value="HDD">HDD</option>
        </Form.Select>
      </Form.Group>
      </Row>           
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicForm;