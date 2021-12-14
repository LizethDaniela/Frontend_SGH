import React from 'react'
import {FaPhoneSquareAlt,FaFacebookSquare} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./footer.css"
export const Footer=()=>{

    return(
    <>
    <div className="footer">
        <div className="row">
            <div className="col-ms-4"> 
                </div>
                    <div className="col-ms-4">
                    
                        <p className="contacto">
                            CONTACTO
                        </p>
                        <p >
                            <MdLocationOn className="cont-icons"/>
                            <span className="direccion">
                                Av. Las Banderas (Ciudadela Universitaria),   Ciudad de Potosí
                            </span>
                        </p>
                        
                        <p >
                        <FaPhoneSquareAlt className="cont-icons"/>
                            <span className="direccion">
                            Teléfono: (591) 2 6222365 - 2 6227323
                            </span>
                        </p>
                        
                        <p >
                        <FaFacebookSquare className="cont-icons"/>
                            <span className="direccion">
                            INGENIERÌA DE SISTEMAS UATF
                            </span>
                        </p>
                    </div>
                    <div className="escudo">
                        <img src={'/imgauth/escudo.png'} className="escudo"/>
                    </div>
                </div>
            
            </div>
            <div className="pie-footer">
                <div className="row">
                    <div className="cold-md-12">
                        <p>Copyright ©-Universidad Autònoma Tomàs Frìas | Ingenierìa de Sistemas </p>
                    </div>
                </div>
            </div>
    </>
    );
    }