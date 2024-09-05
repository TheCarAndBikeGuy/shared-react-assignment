import Spinner from "react-bootstrap/Spinner";
export default function BasicSpinner() {
  return (
    <Spinner animation="border" role="status">
      <span className="spinner"> </span>
    </Spinner>
  );
}
