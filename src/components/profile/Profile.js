import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { UserActions, UserUpdateActions } from '../../redux/actions/profileactions/Profileactions';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UserRemoveDb } from '../../redux/actions/loginactions/Loginactions';
import { useHistory } from 'react-router-dom';


function Profile() {


  const history = useHistory();


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setValue("firstname", state?.firstname);
    setValue("lastname", state?.lastname);
    setValue("email", state?.email);
    setValue("password", state?.password);
    setValue("contactno", state?.contactno);
    setValue("dob", state?.dob);
  };

  const dispatch = useDispatch();

  const state = useSelector(state => state?.users?.users);


  useEffect(() => {
    dispatch(UserActions());




  }, []);

  const UpdateProfile = (data) => {
    const datas = {
      firstname: data?.firstname,
      lastname: data?.lastname,
      email: data?.email,
      password: data?.password,
      contactno: data?.contactno,
      dob: data?.dob,
      image: "kalai.jpg"
    }

    const UserIds = localStorage.getItem("userId");

    dispatch(UserUpdateActions(JSON.parse(UserIds), datas, toast, handleClose))
  }


  const DBreamoveUser = () => {
    const UserIds = localStorage.getItem("userId");
    dispatch(UserRemoveDb(JSON.parse(UserIds),history,toast));
  }

  const Logout = () => {
    localStorage.removeItem("userId")
    toast.success("Logout Successfully...")
    setTimeout(() => {
      history.push("/")

    }, 500);
  }
  return (
    <div className='w-50 mx-auto mt-5'>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1_VtjGtCC4vy8wOd-kgNtNsR506rAiOsRw&usqp=CAU" alt="no image" style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%"
        }} />
      </div>
      <div className='mt-4 mb-3'>
        {state?.firstname}
      </div>
      <div className='mt-4'>
        {state?.lastname}
      </div>
      <div className='mt-4 mb-3'>
        {state?.email}
      </div>
      <div className='mt-4 mb-4'>
        {state?.dob}
      </div>
      <div>
        {state?.contactno}
      </div>


      <div className='mt-5 '>
        <Button onClick={handleShow} variant='warning'>Edit Profile</Button>
      </div>


      <div className='mt-4 d-flex gap-4'>
        <Button variant='danger' onClick={Logout}>Logout</Button>
        <Button variant='info' onClick={DBreamoveUser}>Remove Your Account...</Button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile Edit {state.firstname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                </Form.Group>
                <Form.Text className="text-muted">
                  {errors.password && <span className='text-danger'>password field is required</span>}

                </Form.Text>
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit(UpdateProfile)}>Update Profile</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Profile