import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Page from '../../layout/PageLayout';
import {ToDoService} from '../../../services/todo.service'
import { Container, Divider } from '@material-ui/core';


const Home =  ({ location: { pathname } }) => {
 
 

let [responseData, setResponseData] = useState('NO DATA AVAILABLE')
if (pathname !== '/') {
  return null;
}

    // fetches data
    const fetchData = (e) => {
        e.preventDefault()
        ToDoService.fetchItems()
        .then((response)=>{
            setResponseData(response)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
 
  
  return (
    <Page header="Home Page" subHeader="working on dashboard">
      <h3>Home page</h3>
      <Divider />
      <Container>
      <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
            {responseData && 
                 <p>{JSON.stringify(responseData)}</p>
           }
      </Container>
    </Page>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
