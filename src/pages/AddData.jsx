import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddData = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [record, setRecord] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: Math.floor(Math.random() * 1000), name, description, price, category
        }
        let old = [...record, obj]
        setRecord(old)
        localStorage.setItem('detail', JSON.stringify(old))

        setName("")
        setDescription("")
        setPrice("")
        setCategory("")

        navigate(`/`)
    }

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem('detail')) ?  JSON.parse(localStorage.getItem('detail')) : [] ;
        setRecord(all)
    },[])

    return (
        <>
            <Header />
            <div className='mt-5'>
                <Container className='w-25 text-center'>
                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AddData