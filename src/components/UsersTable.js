import { Form, Table } from "react-bootstrap";

const UsersTable = () => {
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" id="1" aria-label="Check item" />
            </td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
};
export default UsersTable;
