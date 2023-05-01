import React, { useState, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'

import { UserMangeActions, UserMangeCreate, UserMangeDelete, UserMangeEditData } from '../../../../redux/actions/useractions/Useractions';



import { useForm } from 'react-hook-form';

import { useHistory, useParams } from 'react-router-dom';
import { UserMangeEdit, UserMangeSingleUser } from '../../../../services/userservices/usermanage-services';


function Create() {





    const id = window.location.pathname.slice(8, 300);


    const history = useHistory();

    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


    const [sample, setSample] = useState("");

    const [imageget, setImageGet] = useState("");

    const HandleImages = (e) => {
        setSample(e.target.files[0]);
    }



    console.log(sample,"sample")

    const onSumbitUser = (data) => {
        const UserIds = localStorage.getItem("userId");
        const FormDatas = new FormData();
        FormDatas.append("title", data?.title);
        FormDatas.append("des", data?.des);
        FormDatas.append("userId", JSON.parse(UserIds));
        FormDatas.append("enddate", data?.enddate);
        FormDatas.append("startdate", data?.startdate);
        FormDatas.append("refercode", "");
        FormDatas.append("image", sample);
        dispatch(UserMangeCreate(FormDatas, toast, history))
    }

    useEffect(() => {

        UserMangeSingleUser(id).then((res) => {
            setValue("title", res?.data?.title);
            setValue("des", res?.data?.title);
            setValue("startdate", res?.data?.startdate);
            setValue("enddate", res?.data?.enddate);
            setImageGet(res?.data?.image);

        }).catch((err) => {
            console.log(err);
        })

    }, [id, sample])


    const EditUser = (data) => {
        const UserIds = localStorage.getItem("userId");

        const FormDatas = new FormData();
        FormDatas.append("userId", JSON.parse(UserIds));
        FormDatas.append("title", data?.title);
        FormDatas.append("des", data?.des);
        FormDatas.append("enddate", data?.enddate);
        FormDatas.append("startdate", data?.startdate);
        FormDatas.append("refercode", "");
        FormDatas.append("image", sample);

        dispatch(UserMangeEditData(id, FormDatas, toast, history));
    }



    return (
        <div >
            <div className='mx-auto w-50 col-lg-10 mt-5 h-auto'>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="test" placeholder="Enter user name"   {...register("title", { required: true })} />
                            <Form.Text className="text-muted">
                                {errors.title && <span className='text-danger'>title field is required</span>}

                            </Form.Text>
                        </Form.Group>


                    </Col>
                    <Col>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descriptions</Form.Label>
                            <Form.Control type="test" placeholder="Enter user name"   {...register("des", { required: true })} />
                            <Form.Text className="text-muted">
                                {errors.des && <span className='text-danger'>desc field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>


                <Row>
                    <Col>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" placeholder="enter start date" {...register("startdate", { required: true })} />
                            <Form.Text className="text-muted">
                                {errors.startdate && <span className='text-danger'>startdate field is required</span>}

                            </Form.Text>
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter end date" {...register("enddate", { required: true })} />
                            <Form.Text className="text-muted">
                                {errors.enddate && <span className='text-danger'>enddate field is required</span>}

                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Refer Code</Form.Label>
                            <Form.Control type="text" placeholder="Refer Code..." disabled />
                        </Form.Group>

                    </Col>



                </Row>


                <div>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" className="d-none" id="image" accept="image/png, image/gif, image/jpeg" onChange={HandleImages} />
                        <div>
                            <label htmlFor='image'>
                                Upload Images
                            </label>
                        </div>
                    </Form.Group>
                </div>



                <div>


                    {sample ?

                        <>
                            <img src={URL.createObjectURL(sample)} alt="no image" style={{ borderRadius: "20px", margin: "2% 0px", width: "130px", height: "130px" }} />

                        </> :

                        <>


                            {imageget && <>

                                <img src={`http://localhost:8000/${imageget}`} alt="no image" style={{
                                    width: "130px",
                                    height: "130px",
                                    objectFit: "cover",
                                    borderRadius: "10px"
                                }} />
                            </>}

                        </>

                    }



                </div>



                <div className='mt-5'>
                    {id ? <>
                        <Button className='success' variant='success' onClick={handleSubmit(EditUser)}>Update</Button>

                    </> : <>


                        <Button className='success' variant='success' onClick={handleSubmit(onSumbitUser)}>Create</Button>
                    </>}
                </div>


            </div>
        </div>
    )
}

export default Create