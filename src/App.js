import "./App.css";
import { Form, Button, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="me-auto">
        <Nav>
          <Nav.Link href="#iphone">Apple</Nav.Link>
          <Nav.Link href="#samsung">Samsung</Nav.Link>
          <Nav.Link href="#huawei">Huawei</Nav.Link>
          <Nav.Link href="#oppo">Oppo</Nav.Link>
          <Nav.Link href="#Xiaomi">Xiaomi</Nav.Link>
        </Nav>
      </header>
      <main>
        <h1 className="title"> Phone Shop </h1>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </main>
      <footer className="me-auto">
        <div class="footer">
          © 2021 Copyright : Phoneshop.com created by H.Aymen
        </div>
      </footer>
    </div>
  );
}

export default App;
