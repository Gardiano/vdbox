
import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

import '../../styles/buttons/backButton.css';

export const BackButton = ( ) => {
    const navigate = useNavigate( );
 return (
    <>
        <button className='backButton' onClick={ ( ) => navigate( -1 ) } > 
            <label> <BsArrowReturnLeft /> </label> 
        </button> 
    </>
   );
};