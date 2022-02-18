import { Form, Table } from "react-bootstrap";

const UsersTable = ({
  users,
  checkboxes,
  onChangeCheck,
  checkAll,
  allChecked,
}) => {
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
                    onChange={() => onChangeCheck(idx)}
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
