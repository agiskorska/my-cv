import MainLayout from "./components/MainLayout/MainLayout";
import MainTitle from "./components/MainTitle/MainTitle";
import styles from "./App.module.scss";
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container fluid className={styles.root}>
      <MainTitle /> 
      <MainLayout />
    </Container>
  );
}

export default App;
