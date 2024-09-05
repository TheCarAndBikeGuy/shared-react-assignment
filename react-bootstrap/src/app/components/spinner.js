import Spinner from "react-bootstrap/Spinner";

export default function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="loader"> loading...</span>
    </Spinner>
  );
}
