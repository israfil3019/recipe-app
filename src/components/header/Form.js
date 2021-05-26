import { useRef } from "react";

function Form({ myQuery }) {
  const search = useRef();
  const type = useRef();
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control"
          ref={search}
          type="search"
          name="search"
        />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            myQuery(search.current.value, type.current.value);
          }}
        >
          Search
        </button>

        <select className="custom-select" ref={type}>
          <option value="1">Breakfast</option>
          <option value="2">One</option>
          <option value="3">Two</option>
          <option value="4">Three</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
