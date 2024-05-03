import React, { useState } from 'react'
import Header from '../components/Header'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';


const ViewData = () => {

    const rec = JSON.parse(localStorage.getItem('detail')) || [];
    const [record, setRecord] = useState(rec);
    const [search, setSearch] = useState('')

    const filter = record.filter(val =>
        val.name.toLowerCase().includes(search.toLowerCase())
    )

    let allData = (setSearch.length !== 0) ? filter : record

    const deleteData = (id) => {
        let del = rec.filter((item) => item.id != id)
        setRecord(del)
        localStorage.setItem('detail', JSON.stringify(del))
    }

    const deleteAllData = (id) => {
        let del = []
        setRecord(del)
        localStorage.setItem('detail', JSON.stringify(del))
    }

    const csvData = allData.map(({ id, name, description, price, category }) => ({
        ID: id,
        Name: name,
        Description: description,
        Price: price,
        Category: category
    }));

    return (
        <>
            <Header />
            <div className='mt-5'>
                <Container>
                    <div className='d-flex align-items-center mb-3'>
                        <input type="text" placeholder='Search name' value={search} onChange={(e) => setSearch(e.target.value)} className='form-control w-25 ' />
                        <Button onClick={deleteAllData} variant='danger' className='mx-3'>Delete All</Button>
                        <Link to={`/add`}><Button variant='secondary'>Add Data</Button></Link>
                        <CSVLink data={csvData} filename={"data.csv"}>
                            <Button variant="success" className="ms-3">
                                Export CSV
                            </Button>
                        </CSVLink>
                    </div>
                    <Row>
                        <Table striped bordered hover variant='dark'>
                            <thead className='text-center'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    allData.map((val) => {
                                        return (
                                            <tr key={val.id}>
                                                <td>{val.id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.description}</td>
                                                <td>{val.price}</td>
                                                <td>{val.category}</td>
                                                <td className='w-25'>
                                                    <Button variant='danger' onClick={() => deleteData(val.id)}>Delete</Button>
                                                    <Link to={`/update/${val.id}`}>
                                                        <Button className='mx-3' variant='primary'>Edit</Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ViewData