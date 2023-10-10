import React,{useContext} from 'react'
import Link from "next/link";
import Image from "next/image"
// import AuthContext from "../../stores/authContext.js"

export default function SNS() {

    const waMessage = "ok wa test"
    
    return (
        <menu className="SNS">
            <li id="fb">
            {/* https://www.npmjs.com/package/react-facebook */}
                <a href="https://www.facebook.com/genevieve.achi/" target="_blank" rel="noopener noreferrer">
                </a>
            </li>
            <li id="whatsapp">
            {/* https://faq.whatsapp.com/5913398998672934/?locale=fr_FR */}
                {/* <Link href="" target="_blank"></Link> */}
                <Link href={"https://wa.me/+2250709360672?text="+encodeURI(waMessage)} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        {/* <Image
                            loader={myLoader}
                            src={`https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png`}
                            alt={" "}
                            width={50} height={50}
                        /> */}
                        {/* <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="contacter la librairie puissance divine via wahtsapp ! " /> */}
                    </a>
                </Link>
            </li>
            <li id="ytube">
                <a href="https://www.facebook.com/genevieve.achi/" target="_blank" rel="noopener noreferrer">
                </a>
            </li>
            <li id="instam">
                <a href="https://www.facebook.com/genevieve.achi/" target="_blank" rel="noopener noreferrer">
                </a>
            </li>
            <li id="tiktok">
                <a href="https://www.facebook.com/genevieve.achi/" title=" librairie puissance divine abidjan 2plateaux rue des jardins" target="_blank" rel="noopener noreferrer">
                </a>
            </li>
        </menu>
    )
}
