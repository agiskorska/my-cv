import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }} className={styles.root}>
        <Row className={styles.tree}>
            <Col style={{ paddingLeft: 10, paddingRight: 0 }}>src &gt; components &gt; Content &gt; JS Content.js &gt; ...</Col>
        </Row>
        <Row>
            <Col md={1}>1</Col>
            <Col>import React from 'react';</Col>
        </Row>
        
    </Container>
  )
}

export default Content;
