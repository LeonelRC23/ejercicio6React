import React, { useState, useRef, useEffect } from "react";
import "../styles/cardColors.css";
import { Button, Form } from "react-bootstrap";
import CardSmall from "./CardSmall";
import { Toast } from "primereact/toast";

const CardColors = () => {
  const toast = useRef(null);
  const showRules = () => {
    toast.current.show({
      severity: "warn",
      summary: "Reglas",
      detail: "Puede ingresar colores fijos o hexadecimales.",
      life: 3000,
    });
  };
  const showSucces = () => {
    toast.current.show({
      severity: "success",
      summary: "Color agregado",
      detail: "Color agregado correctamente.",
      life: 3000,
    });
  };
  const [color, setColor] = useState("white");
  const [inputColor, setInputColor] = useState("");
  const [colorSave, setColorSave] = useState(
    JSON.parse(localStorage.getItem("colorKey")) || []
  );
  const onEnterPress = () => {
    if (inputColor.trim().length > 0) {
      let arrayAux = [...colorSave];
      setColor(inputColor);
      let auxEncontrado = arrayAux.filter((elm) => elm == inputColor);
      if (auxEncontrado.length === 0) {
        arrayAux.push(inputColor.trim());
        showSucces();
      } else {
        alert("color repetido");
      }
      setColorSave(arrayAux);
    } else {
      showRules();
    }
  };
  useEffect(() => {
    localStorage.setItem("colorKey", JSON.stringify(colorSave));
  }, [colorSave]);
  const deleteColor = (nombre) => {
    let aux = [...colorSave].filter((elm) => elm !== nombre);
    setColorSave(aux);
  };
  return (
    <div className="container">
      <div className="principalContainer p-0 py-3">
        <h3 className="px-4 m-0 mb-3">Administrar colores</h3>
        <Toast ref={toast} />
        <div className="infoContainer py-4 d-flex align-items-center justify-content-center">
          <div className="colorBlock" style={{ backgroundColor: color }}></div>
          <Form.Group className="mx-5">
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
              onChange={(event) => setInputColor(event.target.value)}
            />
            <div className="d-flex justify-content-end">
              <Button
                className="mt-3 me-3"
                variant="primary"
                type="button"
                onClick={onEnterPress}
              >
                Guardar
              </Button>
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="row m-0">
        {colorSave.map((elm, id) => (
          <CardSmall colorNombre={elm} key={id} deleteColor={deleteColor}/>
        ))}
      </div>
    </div>
  );
};

export default CardColors;
