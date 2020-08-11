import React, {useState} from "react";
import {useForm} from "react-hook-form";
import apiCall from "../../utils/apiCall";

export default function Login() {
    const {register, handleSubmit, watch, errors} = useForm();

    const [err, setErr] = useState('');
    const login = (data) => {
            console.log(document.cookie);
            apiCall('login', 'POST', data).then(({data, status}) => {
                if (status = 200) {
                    localStorage.setItem('user',JSON.stringify(data));
                }
            }).catch((e) => {
                setErr('Sai thông tin đăng nhập')
            })

    }
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth">
                    <div className="row w-100">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left p-5">
                                {/*<div className="brand-logo">*/}
                                {/*    <img src="../../images/logo.svg"/>*/}
                                {/*</div>*/}
                                <h4>Xin chào bạn</h4>
                                <h6 className="font-weight-light">Đăng nhập để mua hàng nhé</h6>
                                <span className="text-danger">{err}</span>
                                <form onSubmit={handleSubmit(login)} className="pt-3">
                                    <div className="form-group">
                                        <input
                                            ref={
                                                register({
                                                    required: true
                                                })
                                            }
                                            name='email'
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="exampleInputEmail1"
                                            placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            ref={
                                                register({
                                                    required: true
                                                })
                                            }
                                            name='password'
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"/>
                                    </div>
                                    <div className="mt-3">
                                        <button type='submit'
                                                className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN
                                            IN
                                        </button>
                                    </div>
                                    {/*<div className="my-2 d-flex justify-content-between align-items-center">*/}
                                    {/*    <div className="form-check">*/}
                                    {/*        <label className="form-check-label text-muted">*/}
                                    {/*            <input type="checkbox" className="form-check-input"/>*/}
                                    {/*            Keep me signed in*/}
                                    {/*        </label>*/}
                                    {/*    </div>*/}
                                    {/*    <a href="#" className="auth-link text-black">Forgot password?</a>*/}
                                    {/*</div>*/}
                                    {/*<div className="mb-2">*/}
                                    {/*    <button type="button"*/}
                                    {/*            className="btn btn-block btn-facebook auth-form-btn">*/}
                                    {/*        <i className="mdi mdi-facebook mr-2"/>Connect using facebook*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account? <a href="register.html"
                                                                  className="text-primary">Create</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>
            {/* page-body-wrapper ends */}
        </div>

    )
}
