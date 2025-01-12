import {useRouter} from "next/router";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";

export default function test({post}){
    const router=useRouter();
    const id=router.query?.id;
    return(
        <h2 className="text-black">
           Post : {post.title}
        </h2>
    )
}

export const getServerSideProps = async ({params})=>{
    let res=await fetch(`https://jsonplaceholder.typicode.com/todos/${params?.id}`);
    let post= await res.json();
    return{
        props: {
            post
        }
    }
}