import React, {useState, useEffect} from 'react'
import "./Modal.css";



function Modal ({closeModal,setData,productsData,setCount,count}){
    
    const [addFormData, setAddFormData] = useState({
        first: '',
        last: '',
        handle: ''
    })
    
    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value;

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue;
        

        

        setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id:count,
            first: addFormData.first,
            last: addFormData.last,
            handle: addFormData.handle
        }

        
        const newContacts = [...productsData, newContact]
        setData(newContacts)
        setCount(handleClick);
        closeModal(false)

    }

    
    const handleClick =  () => setCount(count+1)

    return( <div onSubmit={handleAddFormSubmit,handleClick} className = 'modalBackground'> 
                
                    <form  onSubmit={handleAddFormSubmit}>  
                <div className = 'modalContainer'>
                    
                      <div className="titleCloseBtn"> 
                        <button onClick = {() => closeModal(false)}>X</button>
                      </div>
                    <div className= 'title'></div>
                        <h3 > Please fill out the form</h3>
                    <div className= 'body'></div>
                        <label>* First name:</label>
                        
                        <input  type='name' name='first' required='required' placeholder='First name' onChange = {handleAddFormChange} ></input>
                        
                        <label>* Last name:</label>
                    
                        <input  type='name' name='last' required='required' placeholder='Last name' onChange = {handleAddFormChange} ></input>
                        
                        <label>* Handle:</label>
                        
                        <input  type="text" name='handle' required='required' placeholder='handle' onChange = {handleAddFormChange} ></input>
                        
                    <div className= 'footer'></div>
                        <button style={{backgroundColor: 'lightGreen'}} type='' >submit</button>
                        <button onClick = {() => closeModal(false)} id="cancelBtn">Exit</button>

                </div>
                    </form>    
                
           </div>
    )
}

export default Modal
