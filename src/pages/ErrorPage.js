import NavBarComp from '../components/NavBarComp';
import FootBarComp from '../components/FootBarComp';

function ErrorPage() {
    return (
      <>
      <NavBarComp />
        <main>
          <h1>An error occurred!</h1>
          <p>Could not find this page!</p>
        </main>
        <FootBarComp />
      </>
    );
  }
  
  export default ErrorPage;