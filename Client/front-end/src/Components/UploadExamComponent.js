import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import ModalSelectFile from '../Components/ModalSelectFile/ModalSelectFile';

const RequestPrediction = ({ patient }) => {
  const navigation = useNavigate();
  const [file, setFile] = useState(null);
  const [observations, setObservations] = useState("");
  const [uploadingState, setUploadingState] = useState("Not uploaded");



  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleObservationsChange = (e) => {
    setObservations(e.target.value);
    console.log(observations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    setUploadingState("Uploading");
    setTimeout(() => {
      axios
        .post("http://localhost:4000/upload-exam", formData)
        .then((response) => {
          console.log("File upload  succesfully");
          setUploadingState("Success");
        })
        .catch((err) => {
          setUploadingState("Error");
          console.log("Error uploading file", err);
        });
    }, 5000);
  };
  const handleCancel = () => {
    navigation(`/patients/${patient.id}`, { state: patient });
  };

  return (
    <div>
      <section className="upload-exam-container">
        {uploadingState === "Not uploaded" && (
          <section>
            <h3 className="titulo-terciario">
              Seleccione el archivo que desea asociar al paciente{patient.first_name} {patient.last_name}
            </h3>
            <ModalSelectFile/>
            <h3 className="titulo-terciario">Observaciones</h3>
            <textarea
              className="observations-input"
              type="text"
              name="observations"
              onChange={handleObservationsChange}
            ></textarea>

            <section className="upload-exam-buttons">
              <button
                onClick={handleCancel}
                className="request-prediction-button"
              >
                Cancelar
              </button>
              <button onClick={handleSubmit} className="upload-exam-button">
                Asociar Exámen
              </button>
            </section>
          </section>
        )}
        {uploadingState === "Uploading" && (
          <Spinner className="loading-spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {uploadingState === "Success" && (
          <section>
            <p>
              Se cargó exitosamente el exámen, lo podrás ver en le historial de
              exámenes del paciente
            </p>
            <section className="request-prediction-buttons">
              <button
                onClick={handleCancel}
                className="request-prediction-button"
              >
                Listo
              </button>
            </section>
          </section>
        )}
        {uploadingState === "Error" && (
          <section>
            <p>No se pudo cargar el exámen correctamente</p>
            <section className="request-prediction-buttons">
              <button
                onClick={handleCancel}
                className="request-prediction-button"
              >
                Listo
              </button>
            </section>
          </section>
        )}
      </section>
    </div>
  );
};

export default RequestPrediction;
