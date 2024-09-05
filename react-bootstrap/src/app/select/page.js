import Form from "react-bootstrap/Form";

function SelectBasicExample() {
  return (
    <div className="info">
      <h1> Dropdown Menu </h1>
      <p className="text">
        {" "}
        A select dropdown menu is a user interface element commonly used in
        forms to allow users to choose one option from predefined choices. It
        displays a compact, clicable box that when clicked, reveals a vertical
        list of options. Users can scroll through and select their preferred
        choice.
      </p>

      <Form.Select className="selectmenu">
        <option> DropDown </option>
        <option> Latest </option>
        <option> Shoes + </option>
        <option>Clothing +</option>
        <option> Brands + </option>
        <option> Blog </option>
        <option> Sale </option>
      </Form.Select>
    </div>
  );
}

export default SelectBasicExample;
