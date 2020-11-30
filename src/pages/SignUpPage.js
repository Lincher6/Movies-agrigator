import React, {useContext, useState} from 'react'
import {useHistory} from "react-router-dom";
import {FooterContainer, HeaderContainer} from "../containers";
import {Form} from "../components";
import {FirebaseContext} from "../context/firebaseContext";

export const SignUpPage = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()
    const firebase = useContext(FirebaseContext)

    const isInvalid = email === '' || password === '' || firstName === ''

    const handleSubmit = (e) => {
        e.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result =>
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
                    .then(() => {
                        history.push('/browse')
                    })
            )
            .catch(error => {
                setFirstName('')
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form onSubmit={handleSubmit}>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Input
                        placeholder="First name"
                        value={firstName}
                        onChange={({target}) => setFirstName(target.value)}
                    />
                    <Form.Input
                        placeholder={"Email address"}
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                    <Form.Input
                        placeholder={"Password"}
                        type={"password"}
                        autocomplete={"off"}
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type={"submit"}>
                        Sign Up
                    </Form.Submit>


                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}