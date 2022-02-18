import { Container } from "react-bootstrap";
import { useAuth } from "../hooks/use-auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import UsersTable from "../components/UsersTable";
import { useEffect, useState } from "react";
import { getUsers } from "../firebaseAPI";
import { deleteUserData } from "../firebaseAPI";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";

export default function UsersPage() {
  const [users, setUsers] = useState({});
  const [checkboxes, setCheckboxes] = useState([]);

  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    !isAuth && navigate("/");
  }, [isAuth, navigate]);
  useEffect(() => {
    getUsers().then((items) => {
      setCheckboxes(
        Object.keys(items.val()).map((item, idx) => {
          return { id: idx, value: item, checked: false };
        }),
      );
      return setUsers(items.val());
    });
  }, []);
  const allChecked = checkboxes.every(({ checked }) => checked);
  const checkAll = () => {
    setCheckboxes((checkboxes) => {
      return checkboxes.map((checkbox) => ({
        ...checkbox,
        checked: !allChecked,
      }));
    });
  };
  const checkCur = (idx) => {
    setCheckboxes((checkboxes) => {
      return checkboxes.map((checkbox, index) => {
        if (index === idx) {
          return {
            ...checkbox,
            checked: !checkbox.checked,
          };
        }
        return checkbox;
      });
    });
  };
  const handleDeleteUser = () => {
    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked) {
        return;
      }
      deleteUserData(checkbox.value);
      const auth = getAuth();
      if (checkbox.value === auth.currentUser.uid) {
        dispatch(removeUser());
      }
    });
    getUsers().then((items) => {
      setUsers(items.val());
    });
  };

  return (
    <Container className="mt-4">
      <Toolbar onDelete={handleDeleteUser} />
      <UsersTable
        users={users}
        checkboxes={checkboxes}
        onChangeCheck={checkCur}
        checkAll={checkAll}
        allChecked={allChecked}
      />
    </Container>
  );
}
