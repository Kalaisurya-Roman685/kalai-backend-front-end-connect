import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Button, Col, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux'


import { UserMangeActions, UserMangeDelete } from '../../redux/actions/useractions/Useractions';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';



function Home() {

  const dispatch = useDispatch();


  const history = useHistory();








  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(UserMangeActions());
  }, []);



  const Deleteuser = (id) => {
    dispatch(UserMangeDelete(id, toast, history))
  }








  return (
    <div>


      <div className='d-flex justify-content-end mx-5 mt-3 mb-4 gap-5'>
        <Button onClick={() => history.push("/create")}>+ Add User</Button>
        <div>
          <Button variant='warning' onClick={() => history.push("/profile")}>Profile</Button>
        </div>
      </div>

      <div className='row d-flex justify-content-center gap-2'>
        {state?.userdata?.usermanage?.map((item, index) => {

          return (
            <div className='card col-lg-4 col-md-8 col-sm-10 col-xs-10 h-auto p-4'>
              <div className='d-flex gap-5'>
               
                <div>
                  <img src={`http://localhost:8000/${item?.image}`} alt="no image" style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }} />
                </div>
                <div>
                  <div className='mt-2'>
                    {item?.title}
                  </div>
                  <div className='mt-2'>
                    {item?.des}
                  </div>
                  <div className='mt-2'>
                    {item?.startdate}
                  </div>
                  <div className='mt-2'>
                    {item?.enddate}
                  </div>
                  <div className='mt-2'>
                    <h6>
                      {item?.refercode}

                    </h6>                  </div>
                  <div>
                    <div className='d-flex gap-5 cursor-pointer mt-4'>
                      <div style={{ cursor: "pointer" }} >
                        <ion-icon name="eye-outline"></ion-icon>

                      </div>
                      <div style={{ cursor: "pointer" }} onClick={() => history.push(`/create/${item?._id}`)}>
                        <ion-icon name="create-outline"></ion-icon>



                      </div>
                      <div style={{ cursor: "pointer" }} onClick={() => Deleteuser(item?._id)}>
                        <ion-icon name="trash-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>
      {/* <div className='w-80 mx-auto col-lg-10'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Reffercode</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>


            </tr>
          </thead>
          <tbody>

            {state?.userdata?.usermanage?.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    <td>{item?.refercode}</td>

                    <td>{item?.startdate}</td>
                    <td>{item?.enddate}</td>
                    <td>
                     
                      </div>
                    </td>
                  </tr>
                </>
              )
            })}


          </tbody>
        </Table>
      </div> */}

    </div>
  )
}

export default Home