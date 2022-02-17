import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import FormComponent from "./Form";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, email, name, createProfile, lastLogin) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    email: email,
    block: false,
    name: name,
    createProfile,
    lastLogin,
  });
}

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
      .catch(console.error);
  };
  return (
    <FormComponent
      title="register"
      handleClick={handleRegister}
      isRegister={true}
    />
  );
};

export default Register;
