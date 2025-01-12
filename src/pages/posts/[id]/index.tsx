import {useRouter} from "next/router";

export default function PostSinglePage(){
    const router=useRouter();
    console.log(router.query)
    return(
        <h1>PostSinglePage  page {router.query.id}</h1>
    )
}