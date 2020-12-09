/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY

const GetGif = () => {
    const [gif, setGif] = useState('');

    useEffect(()=>{
        //async arrow function
        const fetchGif = async () =>{
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
            //promise
            const {data } = await axios.get(url);
            console.log(data);

            const imageSrc = data.data.images.downsized_large.url;
            setGif(imageSrc);
        } 

        fetchGif();
    },[]);

    return(
        <>
        <div>
           <img src={gif}></img>
        </div>
        </>
    )

}

export default GetGif;