import React, { Component } from 'react';
import "./NavBar.css";
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return (
            <div>
            <div class="navbar_component">
                <div className='navbar_logo'></div>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>  
                    <div className='navbar_location'>Bowling green, ohio</div>
                </div>
                <div className='navbar_searchcomponent'>
                    <div >
                    <select className='navdropdown'>
                        <option value=''> All </option>
                        <option value=''> Alexa </option>
                        <option value=''> Books </option>
                        <option value=''> Beauty </option>
                    </select>
                    </div>
                    <div>
                    <input type='text' className='navbar_searchbox'/>
                    </div>
                    
                    <div className='navbar_searchicondiv'>
                    <div className='navbar_searchicon'/>
                    </div>
                </div>    
                
                    <div className='navbar_text navbar_signin'>
                    <div style={{fontSize:"14px"}}>Hello, signin</div>
                    <div style={{fontWeight:"bold"}}>Account & Lists</div>
                    </div>
                    <div className='navbar_text navbar_returns'>
                        <div style={{fontSize:"14px"}}>Returns</div>
                        <div style={{fontWeight:"bold"}}>& Orders</div>
                    </div>
                    <div className='navbar_text navbar_cart'>
                        <div src=" " className='cart_image'/>
                        <div className='cart_item'>0</div>
                        <div className='navbar_textcart'>Cart</div>
                    </div>
                    
                   

            </div>
            <div className='navbar_footer'>
                <div className='navbar_footer_text'>Best seller</div>
                <div className='navbar_footer_text'>Medical Care</div>
                <div className='navbar_footer_text'>Beauty & Personal Care</div>
                <div className='navbar_footer_text'>Household, Health & Baby Care</div>
                <div className='navbar_footer_text'>Livestream</div>
                <div className='navbar_footer_text'>Coupons</div>
                <div className='navbar_footer_text'>Books</div>
                <div className='navbar_footer_text'>Handmade</div>
                <div className='navbar_footer_text'>Giftcards</div>
            </div>
            </div>
            
         );
    }
}
export default NavBar;

