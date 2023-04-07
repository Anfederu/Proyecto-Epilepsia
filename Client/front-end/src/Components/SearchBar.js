import React,{useState} from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");


    function handleChange(event){
        setSearchInput(event.target.value)
        console.log(searchInput)
    }

    function handleClick() {
        console.log("clickeado papi")
    }

    return (
        <div className='logo-search-container'>
            <img className="logo-image" src="icons/plogo.png"></img>
            <section className='search-bar-container'>
            <input
                className='search-bar'
                type="text"
                placeholder="Search a patient"
                onChange={handleChange}
                value={searchInput} />
            <button className='search-button' onClick={handleClick}>Buscar</button>
            </section>
            
        </div>
    );
}

export default SearchBar;
