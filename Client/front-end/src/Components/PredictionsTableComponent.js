import React, {useEffect, useState} from 'react';
import axios from "axios";

const PredictionsTableComponent = ({rows,patient}) => {
    const headers = ['No.','ID Predicción', 'Fecha', 'Accionables']
    const [predictions, setpredictions] = useState([]);

    useEffect(() => {
      axios
        .get(`http://localhost:4000/predictions/${patient.document_id}`)
        .then((res) => {
          setpredictions(res.data);
        });
    }, []);
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
          {predictions.map((prediction,i) => (
            <tr>
              <td>{i+1}</td>
              <td>{prediction.prediction_id}</td>
              <td>{prediction.date_requested}</td>
              <td>
              <button className='event-detail-button'>Ver detalle</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
            
        </div>
    );
}

export default PredictionsTableComponent;
