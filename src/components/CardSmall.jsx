import React from "react";
import { Button } from "react-bootstrap";
import "../styles/CardSmall.css";

const CardSmall = ({ colorNombre, deleteColor }) => {
  return (
    <div className="col-lg-4 col-md-6 p-0">
      <div className="cardSmallContainer m-4 py-2">
        <h4 className="px-4 m-0 mb-3">{colorNombre}</h4>
        <div className="d-flex justify-content-center">
          <div
            className="colorBlock"
            style={{ backgroundColor: colorNombre }}
          ></div>
        </div>
        <div className="d-flex justify-content-end">
          <Button
            className="mt-3 me-3"
            variant="danger"
            onClick={() => deleteColor(colorNombre)}
          >
            Borrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
