import React from 'react';

const ExamBucketTableComponent = ({rows}) => {
    const headers = ['No.','Nombre', 'Fecha','Path']

 
console.log(rows)
  return (
    <div>
      <table class="styled-table-be">
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
       
            
          {rows.map((row, i) => (
            <tr>
              <td><input type="radio" value={i+1} name="exam"></input></td>
              <td>{row.name}</td>
              <td>{row.date}</td>
              <td>{row.path}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
      <section className="upload-exam-buttons">
              <button  className="select-exam-button">
                Seleccionar Exámen
              </button>
            </section>
    </div>
  );
}

export default ExamBucketTableComponent;
