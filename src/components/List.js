import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
        // code here
        <>
          <ul>
          {listx.map((list) => (<li><ListItems valuex = {list}/></li>))}
          </ul>
          
        </>
  )
}

export default List;
