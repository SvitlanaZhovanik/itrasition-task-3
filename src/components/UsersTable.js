import { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { getUsers } from "../firebaseAPI";

const UsersTable = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getUsers().then((items) => {
      return setUsers(items.val());
    });
  }, []);

  return (
    <Form className="mt-4">
      <Table striped bordered responsive hover variant="dark">
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" id="1" label="All check" />
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
          {Object.keys(users).map((user) => {
            const userValue = users[user];
            return (
              <tr key={user}>
                <td>
                  <Form.Check
                    type="checkbox"
                    name={user}
                    value={false}
                    id="1"
                    aria-label="Check item"
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
