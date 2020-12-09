/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY

const SearchGif = () => {
    const [gif, setGif] = useState('');
    const [name, setName] = useState('dogs');
    const fetchGif = async (name) =>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${name}`;
        //promise
        const {data } = await axios.get(url);
        console.log(data);

        const imageSrc = data.data.images.fixed_width.url;
        setGif(imageSrc);
    } 

    useEffect(()=>{
        fetchGif(name);
    },[name]);

    const handleClick = () => {
        fetchGif(name);
 }
    return(
        <>
        <div className="container">
    <h3>Generated {name}</h3>
           <img width={350} src={gif}></img>
           <input value={name} onChange={(e) => setName(e.target.value)}></input>
           <button onClick={handleClick} type="button" className="btn btn-outline-dark">New</button>
        </div>
        </>
    )

}

export default SearchGif;