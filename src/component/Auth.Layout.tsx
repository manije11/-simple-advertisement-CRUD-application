import React, {ReactNode} from "react";
import mycss from "../pages/mycss.module.css"

export default function AuthLayout({children} : {children:ReactNode}){
    return(
        <div className={mycss.generalpage}>
            {children}
        </div>
    )
}