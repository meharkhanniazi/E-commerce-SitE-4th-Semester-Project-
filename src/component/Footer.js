import React from 'react';

const Footer=()=>{
    return(
        <>

  <footer class="page-footer text-center font-small mt-4 wow fadeIn" style={{backgroundColor:"#929FBA"}}>


{/* <!--/.Call to action--> */}

<hr class="my-4" />

{/* <!-- Social icons --> */}
<div class="pb-4" >
    <a style={{color:"#fff"}} href="https://www.facebook.com/techshoor" target="_blank">
        <i class="fab fa-facebook-f mr-3" ></i>
    </a>

    <a style={{color:"#fff"}} href="https://twitter.com/techshoor" target="_blank">
        <i class="fab fa-twitter mr-3"></i>
    </a>

    <a style={{color:"#fff"}} href="https://www.youtube.com/c/TechShoor" target="_blank">
        <i class="fab fa-youtube mr-3"></i>
    </a>

    <a style={{color:"#fff"}} href="https://github.com/Tech-Shoor" target="_blank">
        <i class="fab fa-github mr-3"></i>
    </a>
</div>
{/* <!-- Social icons --> */}

{/* <!--Copyright-->/ */}
<div class="footer-copyright py-3" style={{backgroundColor:"rgba(0,0,0,.2)"}}>
    © 2021 Copyright:
    <a href="https://techshoor,com/" target="_blank"> <span style={{color:"#fff"}}>techshoor.com</span> </a>
</div>
{/* <!--/.Copyright--> */}

</footer>
{/* <!--/.Footer--> */}
        
        </>
    )
}

export default Footer;