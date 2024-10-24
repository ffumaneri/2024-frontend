import {Container, Nav } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BasicForm from './components/BasicForm';
import Users from './components/Users';
import UserForm from './components/UserForm';

function Home() {
  return <h2>React bootstrap app</h2>
}
function App() {
  return (
    <Router>
      <Container className='p-6 bg-dark text-white'>
        <Nav>
          <Nav.Item>
            <Nav.Link href="https://react-bootstrap.netlify.app/docs/getting-started/introduction">React Bootstrap docs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/basicform">Form Basico</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/users">Axios ejemplo - USERS</Nav.Link>
          </Nav.Item>
        </Nav>
        </Container>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basicform' element={<BasicForm/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adduser' element={<UserForm/>}/>
        <Route path='/edituser' element={<UserForm/>}/>
        </Routes>      
    </Router>
  );
}

export default App;
