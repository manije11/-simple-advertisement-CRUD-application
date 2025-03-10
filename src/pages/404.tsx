import Image from "next/image";

export default function NotFoundPage(){
    return(
        <>
        <Image src="/images/404-pages.png" alt="nothing" width={500} height={500} style={{margin:"auto"}}/>
        </>
    )
}