import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoginActionData } from '../../redux/actions/loginactions/Loginactions';
import { LoginUser } from '../../services/loginservice/login-service';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function Login() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const history = useHistory();
    const dispatch = useDispatch();

    const [user, setUsers] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const handleChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    }

    const Submituser = (e) => {


        const data = {
            email: email,
            password: password
        }

        dispatch(LoginActionData(data, history, toast));

    }
    return (
        <div className='row mx-auto w-50 mt-5'>
            <h1>Login Admin </h1>
            <div className="mt-4">
                <form>
                    <div class="mb-3 col-lg-12">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            {...register("email", { required: true })}
                            name="email" value={email} onChange={handleChange} aria-describedby="emailHelp" />
                        <div className='mt-2'>
                            {errors.email && <span className='text-danger'>Email field is required</span>}
                        </div>
                    </div>
                    <div class="mb-3 col-lg-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password"
                            {...register("password", { required: true })}
                            class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleChange} />
                        <div className='mt-2'>
                            {errors.password && <span className='text-danger mt-2'>password field is required</span>}
                        </div>
                    </div>

                    <div className='d-flex gap-4'>
                        <button class="btn btn-primary" onClick={handleSubmit(Submituser)}>Login</button>
                        <button class="btn btn-warning" onClick={() => history.push("/signup")}>Signup</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login