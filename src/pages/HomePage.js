import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container>
      <h1>Hello</h1>
      <p>
        To use the application, you must
        <Link to="register"> register </Link>
        or
        <Link to="Login"> login </Link>
      </p>
    </Container>
  );
}
