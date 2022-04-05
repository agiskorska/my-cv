import React from 'react'
import Navigation from '../Navigation/Navigation';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import QuickLinks from '../QuickLinks/QuickLinks';
import { Container,  Row, Col } from 'react-bootstrap';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';

const MainLayout = () => {
  return (
    <Container fluid className={clsx('p-0')} >
      <Row className={clsx(styles.main, 'p-0' )}>
        <Col md={2} lg={2} className={clsx(styles.dissapear, 'p-0')} >
          <Row className={styles.sideRow} >
            <Col className={clsx('d-sm-none')} size='1'><QuickLinks /></Col>
            <Col size='11'><SideBar /></Col>
          </Row>
        </Col>
        <Col md={10} lg={10}>
          <Row className={styles.content} >
            <Navigation />
            <Col md={10} ><Content /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MainLayout;
