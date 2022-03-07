import React from 'react';
import './ComingSoon.scss';

const ComingSoon = ({urlIMG}) => {
  return (
    <div className='coming-soon'>
    {urlIMG === undefined ? <p>Próximamente</p> : <img className='coming-soon__img' src={urlIMG} alt={urlIMG} />}
    </div>
  )
}

export default ComingSoon