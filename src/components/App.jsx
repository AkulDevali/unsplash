import React from 'react';
import axios from 'axios';
import Images from "./Images";
function App() {
  const [query, setQuery] = React.useState("random");
  const [images, setImages] = React.useState([]);
  const fetchAPI=async()=>{
    var URL = 'https://api.unsplash.com/search/photos?page=2&client_id=Hh9dJmNRzbD4jL5wqAFAx8pGvci4PFdpljMnO0wwA9Q&query='+query;
    console.log(URL);
    const response = await axios.get(URL);
    // console.log(response.data);
    const data = await response.data;
    setImages(data.results);
    // console.log(images.results.length);
  }
  function handleClick(event){

    fetchAPI();
    event.preventDefault();
  }

  function handleChange(event){
    setQuery(event.target.value);
  }

  return (
    <div className='container'>
     <br></br>
     <button onClick={fetchAPI} className='btn btn-primary btn-md'>
     Fetch Unsplash API </button>
     <form>
      <input placeholder="Search" onChange={handleChange} value={query}/>
      <button onClick={handleClick} >Submit</button>
     </form>

     <br></br>
        <div className='photos'>
          {images.length > 0 && (
            <Images images={images} />
          )}
        </div>
    </div>
  );
}

export default App;
