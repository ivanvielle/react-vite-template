import useTitle from "../hooks/useTitle";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import loginBg from "../assets/images/Auth/loginBg.jpg";

function LandingPage() {
    useTitle("APP NAME - tagline");

    return (
        <Container classes="min-h-100" backgroundColor="dark">
            <Container
                classes="min-h-100 d-flex flex-col gap-1 max-w-xxl w-full"
                variant="container-xl"
                backgroundColor="light"
            >
                <Container classes="flex-1 px-3">
                    <Button classes="m-1" variant="btn-primary" size="btn-sm" label="PRIMARY" />
                    <Button classes="m-1" variant="btn-success" size="btn-md" label="SUCCESS" />
                    <Button classes="m-1" variant="btn-error" size="btn-lg" label="SUCCESS" />

                    <Button classes="m-1" variant="btn-warning" size="btn-xl" label="WARNING" />

                    <Button classes="m-1" variant="btn-info" size="btn-xxl" label="INFO" />
                </Container>

                <Container classes="flex-1 px-3">
                    <Typography variant="h1">H1</Typography>
                    <Typography variant="h2">H2</Typography>
                    <Typography variant="h3">H3</Typography>
                    <Typography variant="h4">H4</Typography>
                    <Typography variant="h5">H5</Typography>
                    <Typography variant="h6">H6</Typography>
                    <Typography variant="p">p</Typography>
                    <Typography variant="span">span</Typography>
                </Container>

                <Container classes="flex-1 px-3"></Container>

                <Container classes="flex-1 px-3"></Container>
            </Container>
        </Container>
    );
}

export default LandingPage;
