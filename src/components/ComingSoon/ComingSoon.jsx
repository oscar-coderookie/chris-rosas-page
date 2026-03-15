import React from 'react';
import './ComingSoon.scss';

const ComingSoon = ({urlIMG, title}) => {
  return (
    <div className='coming-soon'>
    {urlIMG === undefined ? <p>Próximamente</p> : <img className='coming-soon__img' src={urlIMG} alt={urlIMG} />}
    <h2 className='coming-soon__title'>{title}</h2>
    </div>
  )
}

export default ComingSoon