import React,{useState, useEffect} from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Modal from "./Modal";

let  productsData = [{
    
    
    id: 1,
    first: "Mark",
    last: 'Otto',
    handle: "@mdo",
    
},{ 
    id: 2, 
    first: "Jacob",
    last: 'Thornton',
    handle: "@fat"
},{
    
    id: 3,
    first: "Larry",
    last: 'the Bird',
    handle: "@twitter"
    
    
}


];


    
   

const Starting = () => {

    

    const [products, setProducts] = useState(productsData);
    const [count, setCount] = useState(4);
    const [openModal,setOpenModal] = useState(false);
         
    
     // const update = (data) => {
       // let newProducts = [...products]
      //  newProducts[0].first = data
        

     // setProducts(newProducts)

    //}
       
     
      function handleAdd() {
        const first =  'first' ;
        const last = 'last';
        const handle = 'handle' ;
        const handleClick =  () => setCount(count+1)
        const newList = products.concat({first:first,last:last,handle:handle, id:count });
        
        setCount(handleClick);
        
        setProducts(newList)
      }

       const handleRemove = () => {
       let newList = products.filter((id) => products.id !== id);
       const removeClick =  () => setCount(count-1)

       setCount(removeClick);
       setProducts(newList);
      }

      const handleChange = () => {

      }

      return (
          <div >
            

        {openModal && <Modal closeModal={setOpenModal} setData={setProducts} productsData = {products} setCount={setCount} count={count} />}
        <BootstrapTable  data={products} cellEdit={{ mode: 'click' }}    striped hover>
            
            
               
            <TableHeaderColumn isKey dataField='id'  >#</TableHeaderColumn>
            <TableHeaderColumn dataField='first'  >First</TableHeaderColumn>
            <TableHeaderColumn dataField='last'>Last</TableHeaderColumn>
            <TableHeaderColumn dataField='handle'>Handle</TableHeaderColumn>
            
        </BootstrapTable>
            
            
            <div    >
                
                <button type='button' style={{backgroundColor: 'white',color: 'black',border: '2px solid red',margin:'2px'}}  onClick={() => handleRemove(products.pop())}>delete </button>
                <button type='button' style={{backgroundColor: 'white',color: 'black',border: '2px solid #4CAF50',margin:'2px'}}  onClick = {() => {setOpenModal(true);}}>Add</button>
            </div>


           
            
            

            
        </div>

        
    )   

    

}

export default Starting;
 