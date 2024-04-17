
import  "./Footer.css"
import { BsBagFill } from "react-icons/bs";

const Footer=()=>{
    return(
        <div>
            
            <footer className="mart">
                

            <div>
                <h2><BsBagFill />Mart</h2>
                <p>Lorem ipsum dolor sitnamet,<br></br>
                    consectetur adipiscing elit.<br></br>
                    Auctor libero id et,in<br></br> gravida.Sdiam duis<br></br> mauris nula cursus.
                    Eart et<br></br> lectus vel sollicitudin elit<br></br> at amet
                </p>
            </div>

            <div className="margin">
                <h2>About Us</h2>
                <p>Careers</p>  
                <p>Our stores</p>
                <p>Our Cares</p>
                <p>Term & condition</p>
                <p>Privacy Policy</p>

            </div>
            <div className="margin">
                <h2 >Customer Care</h2>
                <p>Help Center</p>
                <p>How to buy</p>
                <p>Track Your Order</p>
                <p>Corporate & "Bulk Purchasing</p>
                <p>Returns & Refunds</p>
            </div>

            <div className="margin">
                <h2>Contact Us</h2>
                <p>70 Washington Square</p>
                <p>South New York,NY 10012,</p>
                <p>United States</p>
                <p>Email:example@gmail.com</p>
                <p>Phone:+1 1123 456 780</p>
                    
            </div>


            </footer>
            </div>
        
    )
}
export default Footer