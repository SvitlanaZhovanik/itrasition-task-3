import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { writeUserData } from "../firebaseAPI";
import { toast } from "react-toastify";
import FormComponent from "./Form";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password, name) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        return auth.currentUser;
      })
      .then((user) => {
        if (user !== null) {
          dispatch(
            setUser({
              email: user.email,
              token: user.accessToken,
              id: user.uid,
              name: name,
            }),
          );
          writeUserData(
            user.uid,
            user.email,
            name,
            user.metadata.creationTime,
            user.metadata.lastSignInTime,
          );
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <FormComponent
      title="Register"
      handleClick={handleRegister}
      isRegister={true}
    />
  );
};

export default Register;
