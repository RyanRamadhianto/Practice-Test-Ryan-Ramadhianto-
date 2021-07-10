import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import {API_URL} from '../../constans/API'
import { registerUser } from '../../redux/actions/user'
import { connect } from 'react-redux'


class Register extends React.Component {
    state = {
        fullName: "",
        userName: "",
        email:"",
        password: "",
    }

    InputHandler = (event) => { 
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value })
    }

    registerHandler = () => {
        const { fullName, username, email, password} = this.state;
        Axios.post(`${API_URL}/users`, {
            fullName,
            username,
            email,
            password,
            role : "user",
        })
        .then(() => {
            alert("Berhasil mendaftarkan user!")
        })
        .catch(() => {
            alert("Gagal mendaftarkan user!")
        })
    
    }

    render() {   
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                      <h1>Register now!</h1>
                      <p className="lead">
                          Register now and start shopping in the most affordable ecommerce
                          plstform
                      </p>
                    </div>
                </div>
                <div className="row mt-5" >
                 <div className="col-4 offset-4">
                     <div className="card">
                         <div className="card-body">
                             <h5 className="font-weight-bold mb-3">Register</h5>
                             <input name="fullName" onChange={this.InputHandler} placeholder="Full Name" type="text" className="form-control my-2" />
                             <input name="username" onChange={this.InputHandler} placeholder="Username" type="text" className="form-control my-2" />
                             <input name="email" onChange={this.InputHandler} placeholder="Email" type="text" className="form-control my-2 " />
                             <input name="password" onChange={this.InputHandler} placeholder="Password" type="Password" className="form-control my-2" />
                             <div className="d-flex flex-row justify-content-between align-items-center">
                                 <button onClick={() => this.props.registerUser(this.state)} className="btm-btn-primary at-2">
                                     Register
                                 </button>
                                 <Link to="/login">Or login</Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        )
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = {
    registerUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);