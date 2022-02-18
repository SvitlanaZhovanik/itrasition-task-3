import { ButtonGroup, Button } from "react-bootstrap";

const Toolbar = ({ onDelete }) => {
  return (
    <ButtonGroup aria-label="Actions with users">
      <Button variant="secondary">Block</Button>
      <Button variant="secondary">Unblock</Button>
      <Button variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </ButtonGroup>
  );
};

export default Toolbar;
