import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormComponent from "./Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
            name: user.displayName,
          }),
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return (
    <FormComponent
      title="Sign in"
      handleClick={handleLogin}
      isRegister={false}
    />
  );
};
export default Login;
