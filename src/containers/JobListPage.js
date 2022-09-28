import React, { useState } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import InnerHeader from '../components/InnerHeader'
import JobListInner from '../components/JobListInner'
import JobSidebarFilter from '../components/JobSidebarFilter'

const JobListPage = () => {
  const [joblstloop, SetJobLstLoop] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  let active = 3;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <InnerHeader title="Jobs" />
      <section>
        <div className='block no-padding'>
          <Container fluid className='p-0'>
            <Row className='m-0'>
              <Col lg="3" className='column px-3 border-right'>
                <JobSidebarFilter />
              </Col>
              <Col lg="9">
                <div className="filterbar mt-5">
                  <h5>98 Jobs &amp; Vacancies</h5>
                </div>
                <div className='job-list-modern'>
                  {
                    joblstloop.map((ele, index) => {
                      return <JobListInner index={index} />
                    })
                  }
                  <div className='jobpagination d-inline-block w-100 text-center'>
                    <Pagination className='my-5 mx-auto'>{items}</Pagination>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default JobListPage