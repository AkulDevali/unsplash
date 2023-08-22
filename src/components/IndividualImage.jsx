import React from 'react';

function IndividualImage(props){
  return (
    <div className= 'photo'>
      <img src={props.image.urls.small} alt="unsplash pic"/>
    </div>
  )
}

export default IndividualImage;
