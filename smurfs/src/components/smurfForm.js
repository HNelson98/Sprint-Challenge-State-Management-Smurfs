import React, { useState } from 'react';
import axios from 'axios'

 const SmurfForm = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    });

    const inputChange = event => {
        event.persist();
        const newFormData = {
          ...data,
          [event.target.name]: event.target.value
        };
        setData(newFormData)
    }

    const onFormSubmit = event => {
        event.preventDefault();
        axios
          .post("http://localhost:3333/smurfs", data)
          .then(res => {
    
            setData({
              name: "",
              age: "",
              height: "",
            });
          })
          .catch(err => console.log(err.response));
      };



    return(
        <div>
            <form onSubmit={onFormSubmit}>
            <label htmlFor= 'name'>Name</label>
            <input
            id= 'name'
            name= 'name'
            value= {data.name}
            onChange= {inputChange}
            />
            <br/>

            <label htmlFor= 'age'>Age</label>
            <input
            id= 'age'
            name= 'age'
            value={data.age}
            onChange= {inputChange}
            />
            <br/>
            <label htmlFor= 'height'>Height</label>
            <input 
            id= 'height'
            name= 'height'
            value= {data.height}
            onChange= {inputChange}
            />
            <br/>
            <button>Submit</button>
            </form>
            

        </div>
    )
}

export default SmurfForm