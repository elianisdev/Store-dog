import React from 'react';


const TodoCounter = ({ completado, total }) => {

  return (
     <h1 style={{
       fontSize: '40px',
       backgroundColor: 'lavender',
       textAlign: 'center',
       margin:0,
       padding: '48px'
     }}>
       Completaste {completado} de {total} tareas
     </h1>
  );
};

export default TodoCounter;


