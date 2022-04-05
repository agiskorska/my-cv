import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }} className={styles.root}>
        <Row className={styles.tree}>
            <Col style={{ paddingLeft: 10, paddingRight: 0 }}>src &gt; components &gt; Content &gt; JS Content.js &gt; ...</Col>
        </Row>
        <Row className={styles.text}>
            <Col md={1}><span className={styles.gray}>1</span></Col>
            <Col>
            <p>
              <span className={styles.purple}>import </span><span className={styles.blue}>React</span><span className={styles.purple}> from</span><span className={styles.orange}> 'react'</span><span className={styles.white}>;</span>
            </p>
            </Col>
        </Row>
        
    </Container>
  )
}

export default Content;
