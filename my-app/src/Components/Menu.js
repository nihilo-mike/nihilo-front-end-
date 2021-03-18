import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import axios from 'axios';

export const Menu=()=>{

  const handleClick = (event,data) => {
    const txt=data.target.innerText;
    let numb = txt.match(/\d/g);
     numb = numb.join("");
    axios.delete(`https://nihiloacc.herokuapp.com/api/Transaction/${numb}`,
    {'headers':{'Authorization':localStorage.getItem('token')}})
    .then(response=>{
      if(response.status==200){
      alert(numb+"  "+"has been succesfully deleted")
      }
    });
  }
  
   const attributes = {
    className: 'custom-root',
    disabledClassName: 'custom-disabled',
    dividerClassName: 'custom-divider',
    selectedClassName: 'custom-selected'
  }
 
return(
<ContextMenu id="ID" className="menu">
      <MenuItem
        data={{ action: 'delete' }}
        onClick={handleClick}
        attributes={attributes}
      >
        Delete
      </MenuItem>
    </ContextMenu>
    );
}