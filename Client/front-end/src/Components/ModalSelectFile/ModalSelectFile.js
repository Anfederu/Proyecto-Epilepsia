import React, {useState} from 'react';
import ExamBucketTableComponent from './../ExamBucketTableComponent/ExamBucketTableComponent'

const ModalSelectFile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
       // document.body.style.overflow = 'hidden'; // prevent scrolling on background
      };

  const closeModal = () => {
    setIsOpen(false);
   // document.body.style.overflow = 'auto'; // enable scrolling on background
  };

  const rows = [{
    "name": "1026597845MRI_3_04_2021",
    "date": "3/04/2021",
    "path": "temp/mri/abril/"
  },{
    "name": "1026597845MRI_3_04_2021",
    "date": "3/04/2021",
    "path": "temp/mri/abril/"
  },{
    "name": "1026597845MRI_3_04_2021",
    "date": "3/04/2021",
    "path": "temp/mri/abril/"
  }]


  return (
    <div>
    <button className="select-exam-button" onClick={openModal} >Seleccionar archivos</button>
      {isOpen && <div className="modal-page-container">
        <div className="modal-container">
          <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
            <h2>Exámenes disponibles en el contenedor del hospital</h2>
            <ExamBucketTableComponent rows={rows}/>
          </div>
        </div>
      </div>}
  </div>
  );
}

export default ModalSelectFile;
