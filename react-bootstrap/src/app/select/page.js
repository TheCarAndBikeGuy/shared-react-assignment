import Form from "react-bootstrap/Form";

function SelectBasicExample() {
  return (
    <div className="info">
      <h1> Hello </h1>
      <Form.Select className="selectmenu">
        <option> Dropdown </option>
        <option>Clothing </option>
        <option> Menswear</option>
        <option>T-shirts</option>
      </Form.Select>
    </div>
  );
}

export default SelectBasicExample;
