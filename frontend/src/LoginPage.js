import {React, useState, useRef} from 'react';
import {Form, Input, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {userLogin} from './api/userApi';
import "./LoginPage.css";

const LoginPage = () => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showNormalWarning, setShowNormalWarning] = useState(false);
    const formRef = useRef(null);
    const resetFormRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // get the email and password from the form
        console.log(e)
        try{
            const response = await userLogin({email, password});
            if (response.status === 200) {
                console.log("in if");
                navigate("/home");
            }
            else {
                console.log("in else");
                alert(response.message);
            }
        } catch (error) {
            if (error.status === 404) {
                setEmailError("User not found");
            }
            else if (error.status === 401) {
                setPasswordError("Invalid password");
            }
            else {
                alert("Something went wrong, please try again later.");
            }
        }
    }

    const handleResetSubmit = (e) => {
        const email = e.target.resetEmail.value;
        console.log(email);
        console.log("reset submit");
    }

    const onValidation = (e) => {
        e.preventDefault();
        console.log("check result", formRef.current.checkValidity());
        if (formRef.current.checkValidity()) {
            handleSubmit(e);
        } else {
            setShowNormalWarning(true);
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

    const handleEmailChange = (e) => {
        setEmailError("");
        setShowNormalWarning(false);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordError("");
        setShowNormalWarning(false);
        setPassword(e.target.value);
    }

    return (
        <div className="loginPage-pane">
            <div className="loginPage-wrapper">
            <div className="login-title">Client Login</div>
                {!showForgotPassword ? (
                    <div className="login-content">
                        <Form className="login-form" noValidate validated={validated} onSubmit={onValidation} ref={formRef} autoComplete="off">
                            <Form.Group className="d-flex flex-column mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control isInvalid={emailError || showNormalWarning} type="email" name="loginEmail" placeholder="Enter email" required onChange={handleEmailChange} value={email} />
                                <Form.Control.Feedback type="invalid">
                                    {showNormalWarning ? "Please enter a valid email address." : emailError}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control isInvalid={passwordError} type="password" name="loginPassword" placeholder="Enter password" required onChange={handlePasswordChange} value={password} />
                                <Form.Control.Feedback type="invalid">
                                    {passwordError}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" className='btn-submit btn-fullwidth mt-2'>Login</Button>
                        </Form>

                        <a className="text-link mt-2" onClick={() => {setShowForgotPassword(true); setValidated(false);}}>Forgot Password</a>
                    </div>
                ) : (
                    <div className="login-content">
                        <div className="login-subtitle">We will send a link to your email to reset your password.</div>
                        <Form className="login-form" onSubmit={onResetValidation} ref={resetFormRef} autoComplete="off">
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="resetEmail" placeholder="Enter email" value={email} />
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