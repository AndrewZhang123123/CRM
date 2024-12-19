import {React, useState, useRef} from 'react';
import {Form, Input, Button} from 'react-bootstrap';
import "./LoginPage.css";

const LoginPage = () => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const formRef = useRef(null);
    const resetFormRef = useRef(null);

    const handleSubmit = (e) => {
        // get the email and password from the form
        console.log(e)
        const email = e.target.loginEmail.value;
        const password = e.target.loginPassword.value;
        console.log(email, password);
        console.log("submit");
    }

    const handleResetSubmit = (e) => {
        const email = e.target.resetEmail.value;
        console.log(email);
        console.log("reset submit");
    }

    const onValidation = (e) => {
        e.preventDefault();
        setValidated(true);
        if (formRef.current.checkValidity()) {
            handleSubmit(e);
        } else {
            console.log("invalid");
        }
    }

    const onResetValidation = (e) =>{
        e.preventDefault();
        setValidated(true);
        if (resetFormRef.current.checkValidity()) {
            handleResetSubmit(e);
        } else {
            console.log("invalid");
        }
    }

    return (
        <div className="loginPage-pane">
            <div className="loginPage-wrapper">
            <div className="login-title">Client Login</div>
                {!showForgotPassword ? (
                    <div className="login-content">
                        <Form className="login-form" noValidate validated={validated} onSubmit={onValidation} ref={formRef}>
                            <Form.Group className="d-flex flex-column mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="loginEmail" placeholder="Enter email" required />
                                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="loginPassword" placeholder="Enter password" required />
                                <Form.Control.Feedback type="invalid">Please enter a valid password.</Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" className='btn-submit btn-fullwidth mt-2'>Login</Button>
                        </Form>

                        <a className="text-link mt-2" onClick={() => {setShowForgotPassword(true); setValidated(false);}}>Forgot Password</a>
                    </div>
                ) : (
                    <div className="login-content">
                        <div className="login-subtitle">We will send a link to your email to reset your password.</div>
                        <Form className="login-form" onSubmit={onResetValidation} ref={resetFormRef}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="resetEmail" placeholder="Enter email" />
                            </Form.Group>
                            <Button type="submit" className='btn-submit btn-fullwidth mt-2'>Send</Button>
                        </Form>
                        <a className="text-link mt-2" onClick={() => {setShowForgotPassword(false); setValidated(false);}}>Sign-in as user</a>
                    </div>
                )}
            </div>
        </div>
        )
}

export default LoginPage;