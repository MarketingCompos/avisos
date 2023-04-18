import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    
    <Form className='form'>
      <Form.Group className="mb-3" controlId="url" id='url'>
        <Form.Label>URL</Form.Label>
        <Form.Control type="url" placeholder="Digite a URL" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
  );
}

export default BasicExample;
