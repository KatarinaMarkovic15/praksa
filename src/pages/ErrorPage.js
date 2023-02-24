import NavBarComp from '../components/NavBarComp';
import FootBarComp from '../components/FootBarComp';
import { Alert } from 'react-bootstrap';

function ErrorPage() {
    return (
      <>
      <NavBarComp />
        <main>
          <h1>An error occurred!</h1>
          <Alert variant='danger'>Could not find this page!</Alert>
        </main>
        <FootBarComp />
      </>
    );
  }
  
  export default ErrorPage;