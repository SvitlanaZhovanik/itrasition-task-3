import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { getDatabase, update, ref } from "firebase/database";

export default function HomePage() {
  const { isAuth, name, id } = useAuth();

  const updateLastLogin = () => {
    if (!isAuth) {
      return;
    }
    const db = getDatabase();
    update(ref(db, "users/" + id), {
      lastLogin: new Date(),
    });
  };
  updateLastLogin();

  return (
    <Container className="mt-4">
      {isAuth ? (
        <h1>
          Welcome, {name}. To work with users go to
          <Link to="users"> Users </Link>
        </h1>
      ) : (
        <>
          <h1>Hello</h1>
          <p>
            To use the application, you must
            <Link to="register"> register </Link>
            or
            <Link to="Login"> login </Link>
          </p>
        </>
      )}
    </Container>
  );
}
