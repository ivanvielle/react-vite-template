import useTitle from "../hooks/useTitle";
import Container from "../components/Container/Container";
import FadeContainer from "../components/Container/FadeContainer";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/Input/FormInput";
import loginBg from "../assets/images/Auth/loginBg.jpg";
import { FaBeer } from "react-icons/fa";
import { useState, useRef } from "react";

function LandingPage() {
    useTitle("APP NAME - tagline");
    const inputPasswordRef = useRef();
    const [pType, setPType] = useState("password");

    const handleInputType = () => {
        console.log(inputRef.current.type);

        if (inputRef.current.type === "password") {
            setPType("text");
        } else {
            setPType("password");
        }
    };

    return (
        <Container
            classes="min-h-100 d-flex flex-col gap-1 w-full px-3"
            width="container-2xl"
            backgroundColor="dark"
        >
            <FadeContainer
                classes="h-full min-h-100 d-flex flex-col flex-center p-relative"
                bgImg={loginBg}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <Typography variant="h1">Buttons</Typography>
                <Button
                    classes="m-1 w-25 w-md-75"
                    variant="btn-primary"
                    size="btn-sm"
                    label="PRIMARY - small"
                />
                <Button
                    classes="m-1 w-25 w-md-75"
                    variant="btn-success"
                    size="btn-md"
                    label="SUCCESS - medium"
                />
                <Button
                    classes="m-1 w-25 w-md-75"
                    variant="btn-error"
                    size="btn-lg"
                    label="SUCCESS - large"
                />

                <Button
                    classes="m-1 w-25 w-md-75"
                    variant="btn-warning"
                    size="btn-xl"
                    label="WARNING - extra large"
                />

                <Button
                    classes="m-1 w-25 w-md-75"
                    variant="btn-info"
                    size="btn-2xl"
                    label="INFO - 2 extra large"
                />
            </FadeContainer>

            <FadeContainer
                classes="h-full min-h-100 d-flex flex-col flex-center"
                backgroundColor="success"
            >
                <Typography variant="h1">Typography</Typography>
                <Typography variant="h1">H1</Typography>
                <Typography variant="h2">H2</Typography>
                <Typography variant="h3">H3</Typography>
                <Typography variant="h4">H4</Typography>
                <Typography variant="h5">H5</Typography>
                <Typography variant="h6">H6</Typography>
                <Typography variant="p">p</Typography>
                <Typography variant="span">span</Typography>
            </FadeContainer>

            <FadeContainer
                classes="h-full min-h-100 d-flex flex-col flex-align-center"
                backgroundColor="warning"
            >
                <Typography variant="h1">Form</Typography>
                <Container
                    classes="h-full min-h-100 w-full d-flex flex-md-col gap-2 p-2"
                    backgroundColor="transparent"
                >
                    <Form
                        label="LOGIN"
                        classes="h-full min-h-100 h-sm-full w-full border-3 text-dark d-flex flex-col"
                        formBg="form-light"
                    >
                        <Container classes="p-2" backgroundColor="inherit">
                            <Typography variant="h2">LOGIN</Typography>
                        </Container>

                        <Container
                            classes="p-2 flex-1 d-flex flex-col gap-3"
                            backgroundColor="inherit"
                        >
                            <FormInput
                                classes="w-full"
                                type="text"
                                name="email"
                                placeholder="Enter email / username"
                                icon="FaBeer"
                                iconSize={30}
                                iconPosition="start"
                                iconColor="red"
                            />
                            <FormInput
                                ref={inputPasswordRef}
                                classes="w-full text-xs"
                                type="password"
                                name="loginPassword"
                                placeholder="Enter password"
                                icon="FaBeer"
                                iconSize={30}
                                iconPosition="end"
                                iconColor="blue"
                                iconFunc={handleInputType}
                            />
                        </Container>
                    </Form>
                    <Form
                        label="REGISTER"
                        classes="h-full min-h-100 h-sm-full w-full border-3 d-flex flex-col"
                        formBg="form-error"
                    >
                        <Container classes="p-2" backgroundColor="inherit">
                            <Typography variant="h2">REGISTER</Typography>
                        </Container>

                        <Container
                            classes="p-2 flex-1 d-flex flex-col gap-1"
                            backgroundColor="inherit"
                        >
                            <FormInput
                                classes="w-full"
                                type="password"
                                name="registerPassword"
                                placeholder="Enter password"
                            />
                        </Container>
                    </Form>
                </Container>
            </FadeContainer>

            <FadeContainer
                classes="h-full min-h-100 d-flex flex-col flex-center"
                backgroundColor="error"
            ></FadeContainer>

            <FadeContainer
                classes="h-full min-h-100 d-flex flex-col flex-center"
                backgroundColor="info"
            ></FadeContainer>
        </Container>
    );
}

export default LandingPage;
