import { ButtonGroup, Button } from "react-bootstrap";

const Toolbar = () => {
  return (
    <ButtonGroup aria-label="Actions with users">
      <Button variant="secondary">Block</Button>
      <Button variant="secondary">Unblock</Button>
      <Button variant="secondary">Delete</Button>
    </ButtonGroup>
  );
};

export default Toolbar;
