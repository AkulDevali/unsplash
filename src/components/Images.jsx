import React from 'react';
import IndividualImage from './IndividualImage';
function Images(props) {

  return props.images.map((image)=>(
    <IndividualImage key={image.id} image={image} />
  ))
}

export default Images;
