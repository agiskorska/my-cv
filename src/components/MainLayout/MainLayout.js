import React from 'react'
import Navigation from '../Navigation/Navigation';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import QuickLinks from '../QuickLinks/QuickLinks';
import { Container,  Row, Col } from 'react-bootstrap';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Row className={styles.main} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Col md={2} lg={3} className={styles.dissapear} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row className={styles.sideRow} >
            <Col className='d-sm-none' xs={1} sm={1} md={1} lg={1}><QuickLinks /></Col>
            <Col xs={11} sm={11} md={11} lg={11}><SideBar /></Col>
          </Row>
        </Col>
        <Col md={10} lg={9}>
          <Row className={styles.content}>
            <Navigation />
            <Col md={10}><Content /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MainLayout;
