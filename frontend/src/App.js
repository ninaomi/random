import React, {useEffect, useState} from 'react'
import './App.css';
import { Navigation, Sidebar } from './components';
function App() {

const [backendData, setBackendData]=useState([{}]);

useEffect(()=>{

fetch("/").then(response => response.json())
.then(data =>{setBackendData(data)})

},[])


return (
<div className="div1">
<Navigation />
<Sidebar />

</div>

)


}

export default App