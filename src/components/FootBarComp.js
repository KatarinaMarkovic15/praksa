import { Container, Row, Col } from 'react-bootstrap';

function FootBarComp() {
    return <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                Welcome, this application deals with displaying a list of 
                cocktails and gives the possibility to filter them.
                For each cocktail, it's possible to see a detailed view and the option of marking it
                as a "favorite".
                </Col>
            </Row>
        </Container>
    </footer>
};

export default FootBarComp;

// import React from 'react';
// import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

// export const Footer = () => {
//   return (
//     <CDBFooter className="shadow">
//       <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
//         <CDBBox display="flex" justifyContent="between" className="flex-wrap">
//           <CDBBox>
//             <a href="/" className="d-flex align-items-center p-0 text-dark">
//               <img alt="logo" src="logo" width="30px" />
//               <span className="ml-3 h5 font-weight-bold">Devwares</span>
//             </a>
//             <p className="my-3" style={{ width: '250px' }}>
//               We are creating High Quality Resources and tools to Aid developers during the
//               developement of their projects