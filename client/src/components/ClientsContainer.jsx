// Hanldes clients data logic and filters
import React, { useState, useCallback, useEffect } from "react";
import { ENDPOINT } from "../helpers/globalVars";
import useGetClients from "../hooks/useGetClients";
import ClientsTableList from "./ClientsTableList";
import HorLinesIcon from "../rsc/icons/hor-lines.PNG";
import { filters } from "../helpers/globalVars.js";

const API = `${ENDPOINT}/clients`;


const ClientsContainer = () => {
  const { clients, loading, error } = useGetClients(API);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [tags, setTags] = useState([])
  const [filteredClients, setFilteredClients] = useState(clients)
// my memoization
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredClients(clients)
  }, [clients])

  useEffect(() => {
    handleTagChangeFiltering(tags);
  }, [tags])
  

  const onHandleFilterClick = () => {
    setIsFilterActive(!isFilterActive);
  };

  const addTag = (event, field) =>{
    let newTag = {title: event.target.placeholder, value: event.target.value, field}
    let filteredTags = tags.filter(tag => tag.title !== event.target.placeholder);
    filteredTags.push(newTag)
    setTags(filteredTags)
  }

  const removeTag = (title) =>{
    let filteredTags = tags.filter(tag => tag.title !== title);
    setTags(filteredTags)
  }

  const handleTagChangeFiltering = (tags) =>{
      if(tags.length <= 0){
            handleSearch(search)
            return
      }
    let newclients=clients;
    tags.forEach(tag => {
        newclients=newclients.filter((client) => {
            return (
                client[String(tag.field)].toLowerCase().includes(tag.value.toLowerCase())
            );
        })
    });
    setFilteredClients(newclients)
  }

  const handleSearch = (newSearch)=>{
    setSearch(newSearch)
    
    let newclients=clients.filter((client) => {
        return (
            client.name.toLowerCase().includes(newSearch.toLowerCase()) ||
            client.country.toLowerCase().includes(newSearch.toLowerCase()) ||
            client.state.toLowerCase().includes(newSearch.toLowerCase())
        );
    })
    setFilteredClients(newclients)
  }


  return (
    <div className="ClientsContainer">
      <div className="filters-cont flex-col">
        {/*first row*/ }
        <div className="filters-and-search-cont flex-row">
             {/*filter btn and tags*/ }
            <div className="">
                <button className="white-btn" onClick={() => onHandleFilterClick()}>
                    <div className="flex-row center-center">
                        <img src={HorLinesIcon} alt="icon" width="20px" />
                        &nbsp;Filters
                    </div>
                </button>
                {
                    tags.map((tag) =>(
                        <button className="tag light-blue-btn">
                            <p>{tag.title}: {tag.value}</p> <p onClick={()=> removeTag(tag.title)} style={{cursor:'pointer'}}>X</p>
                        </button>
                    ))
                }
            {/*map the tags*/ }
            </div>
             {/*search input and create btn*/ }
            <div className="">
                <input type="" className="white-btn" placeholder="Search" value={search} onChange={(event) => handleSearch(event.target.value)}/>
                <button className="blue-btn create-btn">
                    <div className=" flex-row center-center">
                        <p style={{fontSize: 'x-large'}}>+</p>&nbsp;&nbsp;<p>Nuevo cliente</p>
                    </div>
                </button>
            </div>
        </div>
        {/*Second row*/ }
        {isFilterActive ? (
          <div className="flex-row justify-left">
            {filters.map((filter) => (
              <div className="filter-selector-cont" key={`filter-${filter.title}`}>
                <input
                  className="filter-selector white-btn"
                  list={`options-${filter.title}`}
                  onChange={(event) => addTag(event, filter.field)}
                  placeholder={filter.title}
                  onKeyPress={() => {return false;}}
                  onKeyDown={(event) => event.preventDefault()}
                />
                <datalist id={`options-${filter.title}`} className="datalist">
                  {filter.options.map((opt) => (
                    <option key={opt} className="option" value={opt}>{opt}</option>
                  ))}
                </datalist>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <ClientsTableList clients={filteredClients} setClients={setFilteredClients}></ClientsTableList>
    </div>
  );
};

export default ClientsContainer;
