/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import ReactTable from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Form, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NewProcess.css';

function selectItem(items, setItems, value, checked) {
  const { id } = value.original;
  if (checked) { setItems([...items, { id }]); } else {
    const result = items.filter((i) => i.id !== id);
    setItems(result);
  }
}

function NewProcess() {
  const [data] = useState([
    {
      select: 'Purchase Rugs - PP781763',
      id: 'IHA250525',
      description: 'IRAN HAMADAN',
      assortment: 'RUGS',
      entity: '0001',
    },
    {
      select: 'Purchase Rugs - PP781763',
      id: 'IHA250526',
      description: 'IRAN HAMADAN',
      assortment: 'RUGS',
      entity: '0001',
    },
    {
      select: 'Purchase Rugs - PP781763',
      id: 'IHA250527',
      description: 'IRAN HAMADAN',
      assortment: 'RUGS',
      entity: '0001',
    },
    {
      select: 'Purchase Rugs - PP781763',
      id: 'IHA250528',
      description: 'IRAN HAMADAN',
      assortment: 'RUGS',
      entity: '0001',
    },
  ]);
  const [companyAoptions] = useState([
    { value: '1', name: 'MetroCarpetDistributor' },
    { value: '2', name: 'MetroCarpetFactory' },
    { value: '3', name: 'option3' },
    { value: '4', name: 'option4' },
  ]);
  const [companyBoptions] = useState([
    { value: '1', name: 'MetroCarpetFactory' },
    { value: '2', name: 'MetroCarpetDistributor' },
    { value: '3', name: 'option3' },
    { value: '4', name: 'option4' },
  ]);
  const [processType] = useState([
    { value: '1', name: 'Purchase' },
    { value: '2', name: 'process2' },
    { value: '3', name: 'process3' },
    { value: '4', name: 'process4' },
  ]);

  const [items, setItems] = useState([]);

  console.log(items);

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="gray-label">
              Type of Process
            </Form.Label>
            <select
              className="selector process-selector pos-lt rel-text-white w-20"
              name="companyA"
            >
              {processType.map((e, key) => (
                <option key={key} value={e.value}>
                  {e.name}
                </option>
              ))}
            </select>

            <Link className="blue-button gen-button plus-button-icon rel-text-white w-5" size="sm" to="/create-process-type">
              <FontAwesomeIcon icon={faPlus} className="iconPlus" />
            </Link>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="gray-label">
                Company A
            </Form.Label>
            <select
              className="selector company-selector pos-lt rel-text-white"
              name="companyA"
            >
              {companyAoptions.map((e, key) => (
                <option key={key} value={e.value}>
                  {e.name}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Group>
            <Form.Label className="gray-label">
                Company B
            </Form.Label>
            <select
              className="selector company-selector pos-rt rel-text-white"
              name="companyB"
            >
              {companyBoptions.map((e, key) => (
                <option key={key} value={e.value}>
                  {e.name}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
      </Row>
      <div className="reactTable">
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'Select',
              Cell: (value) => (
                <div>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onChange={(e) => selectItem(items, setItems, value, e.target.checked)} />
                  </Form.Group>
                </div>
              ),
            },
            {
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Description',
              accessor: 'description',
            },
            {
              Header: 'Assortment',
              accessor: 'assortment',
            },
            {
              Header: 'Entity',
              accessor: 'entity',
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
      <div className="pos-rt mb-5">
        <Link className="gray-button gen-button rel-text-blue mr-5 w-20" size="sm" to="/">
          <FontAwesomeIcon icon={faTimes} className="iconCheck" />
          Cancel
        </Link>
        <Link className="blue-button gen-button rel-text-white w-20" size="sm" to="/">
          <FontAwesomeIcon icon={faCheck} className="iconCheck" />
          Confirm
        </Link>
      </div>
    </Container>
  );
}

export default NewProcess;
