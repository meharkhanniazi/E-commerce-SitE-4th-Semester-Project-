import React, {  useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';import BusinessIcon from '@material-ui/icons/Business';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { ExpandMoreOutlined } from '@material-ui/icons';
import GradientIcon from '@material-ui/icons/Gradient';
import TuneIcon from '@material-ui/icons/Tune';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

import { useHistory } from 'react-router-dom';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function CustomizedMenus() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let history=useHistory()
  const handleClose = () => {
    setAnchorEl(null);
  };
  // let [name,setName]=useState("");
  let a=JSON.parse(localStorage.getItem("User"));
  // setName(a.name)

  return (
        <>
        {
            a ? 
            <div>
            <div
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
             {a ? <span style={{fontSize:"12px"}}>{a.name}</span> : <div />}  <ExpandMoreOutlined />
            </div>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              
             
      
              <StyledMenuItem  style={{padding:"15px",fontSize:"22px"}}>
              <ListItemIcon>
                  <LibraryBooksIcon color="#002f34" fontSize="Large" />
                </ListItemIcon>
                <ListItemText style={{marginLeft:"-22px" ,color:"#002f34",fontSize:"16px"}} primary="My orders" onClick={() => history.push("/myorders") } />
              </StyledMenuItem>
             

          
              
              <div >
      
              
              
              <div ></div>
              
              </div>
              
              <div >
              
      
              </div>
              <hr style={{marginTop:"-5px"}} />
              <div style={{marginTop:"-20px"}}>
              <StyledMenuItem style={{padding:"15px",fontSize:"22px"}}>
              <ListItemIcon>
                  <ExitToAppIcon color="#002f34" fontSize="Large" />
                </ListItemIcon>
                <ListItemText style={{marginLeft:"-22px" ,color:"#002f34"}} primary="Logout" onClick={() => {
                  
                
                  localStorage.setItem("User",null)
                  localStorage.setItem("jwt",null)
                  history.push("/")
                 
               }}/>
               
              </StyledMenuItem>
      
              </div>
      
            </StyledMenu>
          </div>
          :
          <div />
        }
        </>
  );
}
export default CustomizedMenus;