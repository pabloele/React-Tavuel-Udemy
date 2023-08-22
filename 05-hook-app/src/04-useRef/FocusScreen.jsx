import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Set focus
      </button>
    </>
  );
};
