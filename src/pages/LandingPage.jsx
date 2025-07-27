import useTitle from "../hooks/useTitle";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";

function LandingPage() {
    useTitle("APP NAME");

    return (
        <Container classes="border-1 min-h-100">
            <Container classes="h-50 border-1">
                <Button classes="m-1" variant="btn-primary" size="btn-sm">
                    PRIMARY
                </Button>
                <Button classes="m-1" variant="btn-success" size="btn-md">
                    PRIMARY
                </Button>
                <Button classes="m-1" variant="btn-error" size="btn-lg">
                    PRIMARY
                </Button>
                <Button classes="m-1" variant="btn-warning" size="btn-xl">
                    PRIMARY
                </Button>
                <Button classes="m-1" variant="btn-info" size="btn-xxl">
                    PRIMARY
                </Button>
            </Container>
        </Container>
    );
}

export default LandingPage;
