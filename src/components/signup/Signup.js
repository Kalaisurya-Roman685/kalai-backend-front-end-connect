import React from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserSignup } from '../../redux/actions/loginactions/Loginactions';


function Signup() {

    const history = useHistory();

    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


    const CreateUser = (data) => {
        const datas = {
            firstname: data?.firstname,
            lastname: data?.lastname,
            email: data?.email,
            password: data?.password,
            contactno: data?.contactno,
            dob: data?.dob,
            image: "kalai.jpg"
        }
        dispatch(UserSignup(datas, history, toast));

    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <div>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>first name</Form.Label>
                            <Form.Control type="text" placeholder="Enter firstname"

                                {...register("firstname", { required: true })}
                            />
                            <Form.Text className="text-muted">
                                {errors.firstname && <span className='text-danger'>firstname field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name"
                                {...register("lastname", { required: true })}
                            />
                            <Form.Text className="text-muted">
                                {errors.lastname && <span className='text-danger'>lastname field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                {...register("email", { required: true })}
                            />
                            <Form.Text className="text-muted">
                                {errors.email && <span className='text-danger'>email field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            <Form.Text className="text-muted">
                                {errors.password && <span className='text-danger'>password field is required</span>}

                            </Form.Text>
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>contact no</Form.Label>
                            <Form.Control type="number" placeholder="Enter contact no"
                                {...register("contactno", { required: true })}
                            />
                            <Form.Text className="text-muted">
                                {errors.contactno && <span className='text-danger'>contactno field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>dob</Form.Label>
                            <Form.Control type="date" placeholder="Enter date"
                                {...register("dob", { required: true })}
                            />
                            <Form.Text className="text-muted">
                                {errors.dob && <span className='text-danger'>dob field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <div className='d-flex gap-5'>
                    <Button variant="danger" onClick={() => history.push("/")}>
                        Login
                    </Button>
                    <Button variant="success" onClick={handleSubmit(CreateUser)}>Signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup