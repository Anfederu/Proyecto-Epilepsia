import React from "react";

const EventTableComponent = ({ rows }) => {
  const headers = [
    "No.",
    "Nombre",
    "Fecha",
    "Tipo de evento",
    "Personal",
    "Accionables",
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div>
        <table class="styled-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {numbers.map((i) => (
              <tr>
                <td>{i}</td>
                <td>Cirujía</td>
                <td>11/29/2022</td>
                <td>Cirujía</td>
                <td>Andrés Naranjo</td>
                <td>
                  <button className="event-detail-button">Ver detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventTableComponent;
