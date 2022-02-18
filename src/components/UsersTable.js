import { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { getUsers } from "../firebaseAPI";

const UsersTable = () => {
  const [users, setUsers] = useState({});
  const [checkboxes, setCheckboxes] = useState([]);

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

  console.log(checkboxes);
  return (
    <Form className="mt-4">
      <Table striped bordered responsive hover variant="dark">
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                label="All check"
                checked={allChecked}
                onChange={checkAll}
              />
            </th>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Last login</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map((user, idx) => {
            const userValue = users[user];
            return (
              <tr key={user}>
                <td>
                  <Form.Check
                    type="checkbox"
                    name="user"
                    value={user}
                    checked={checkboxes[idx]?.checked}
                    id={idx}
                    aria-label="Check item"
                    onChange={() => checkCur(idx)}
                  />
                </td>
                <td>{user}</td>
                <td>{userValue.name}</td>
                <td>{userValue.email}</td>
                <td>{userValue.createProfile}</td>
                <td>{userValue.lastLogin}</td>
                <td>{userValue.status ? "block" : "unblock"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Form>
  );
};
export default UsersTable;
