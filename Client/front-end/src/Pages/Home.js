import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [searchInput, setSearchInput] = useState("");
    const navigation = useNavigate();


    function handleChange(event){
        setSearchInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        navigation('/patients',{ state:searchInput})
    }

    return (
        <div className='logo-search-container'>
            <img className="logo-image" src="icons/plogo.png"></img>
            <form className='search-bar-container' onSubmit={handleSubmit} >
            <input
                className='search-bar'
                type="text"
                placeholder="Search a patient"
                onChange={handleChange}
                value={searchInput} />
            <button className='search-button'>Buscar</button>
            </form>
            
        </div>
    );
}

export default Home;