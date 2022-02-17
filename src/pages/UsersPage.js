import { Container } from "react-bootstrap";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <Container className="mt-4">
      <Toolbar />
      <UsersTable />
      {!isAuth && navigate("/")}
    </Container>
  );
}
