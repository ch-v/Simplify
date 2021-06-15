import './App.css';
import './assets/css/simplify.min.css';

import { Routes, Route } from 'react-router-dom';
import { HomePage, Installation, NotFound } from './pages';
import { 
  Alert, 
  Avatar, 
  Button, 
  Badge, 
  Card, 
  Form,
  Image,
  Navbar,
  Navigation,
  List,
  Modal,
  Typography,
  Container,
} from './components';

function App() {
  return (
    <>
      <Container>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<Installation />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/badge" element={<Badge />} />
            <Route path="/button" element={<Button />} />
            <Route path="/card" element={<Card />} />
            <Route path="/form" element={<Form />} />
            <Route path="/image" element={<Image />} />
            <Route path="/list" element={<List />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </Container>
    </>
  );
}

export default App;
