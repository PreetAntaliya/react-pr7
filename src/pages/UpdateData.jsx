import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateData = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [record, setRecord] = useState((JSON.parse(localStorage.getItem('detail'))) || []);

    const handleSubmit = (e) => {
        e.preventDefault()
        let old = [...record]
        let up = old.map((val) => {
            if (val.id == id) {
                return { ...val, name, description, price, category }
            }
            return val
        })
        localStorage.setItem('detail', JSON.stringify(up))

        navigate('/')
    }

    useEffect(() => {
        let data = record.find(item => item.id == id)
        if(data){
            setName(data.name)
            setDescription(data.description)
            setPrice(data.price)
            setCategory(data.category)
        }
    },[id])

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

export default UpdateData