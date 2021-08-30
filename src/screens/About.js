import React from 'react';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
const About=()=>{
    return(
        <>
        <Menu />
        <br />
            <div class="aboutus-section">
        <div class="container">
            <div >
                <div class="col-lg-6 col-md-8 col-sm-12 ">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <h4>Why Online Retail System ?</h4>
                        <p class="aboutus-text">We designed it to bring everyone into this era of E-Commerce, to obtain financial stability. As we Know That Covid-19 has a negative impact on individuals' businesses from its first case of discovery till now having duration From November 2019 till June 2021 is 1.7 years which Impacting the Businesses, employment of people. In these tough conditions, we have to provide a way a light to these people so that they can start earning by selling online. To gain the financial stability and let the worries off.<br />
                        <span style={{fontWeight:"bolder"}}>“Ecommerce isn’t the cherry on the cake, it’s the new cake”</span></p>
                       
                        <p class="aboutus-text" style={{marginTop:"-25px"}}>If we are not realizing its importance till now, so we will be left behind just like other technologies from western world.
                        <br />
                        <span style={{fontWeight:"bolder"}}>“The e-commerce industry is a force that no investor can afford to ignore.”</span>
                        </p>
                        <a class="aboutus-more" href="#">read more</a>
                    </div>
                </div>
                <div  class="col-lg-6 col-md-4 col-sm-12 ">
                    <div class="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt="" />
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Your job is to do your job with all your heart to the best of your ability.Life will go  its own merry way as its own pace.But if you do then you and life -- will be richer for you being here.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>Techshoor Store Pakistan is part of the Delivery Hero group and is partner with Daraz, the leading fashion online store; Kaymu, the online platform for buying items in an assortment of categories; Lamudi, the best online real estate marketplace and Carmudi the leading vehicle marketplace.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>Be Strong, Be Fearless, Be Beautiful.And Believe that Anything Is Possible When You Have The Right People There To Support you.s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <Footer />
        </>
    )
}

export default About;