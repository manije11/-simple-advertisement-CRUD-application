import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export default function Id(){
const router=useRouter();
const {id}=router.query;
    const [data,setData]=useState({});

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`/api/showDataById?id=${id}`);
                console.log('Response Status:', response.status); // بررسی وضعیت
                const text = await response.text();
                console.log('Raw Response:', text); // لاگ کل پاسخ
                const data = JSON.parse(text);
                setData(data);
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        };
            fetchItem();
    }, [id]);

    return (
        <div className="p-4">
            <Image src={`/images/${data.image}`} alt="image " className="w-2/5 h-64 object-cover rounded-full" width={500}
                     height={500}/>
            <h1 className="text-black p-4">{data.name}</h1>
            <p className="text-black p-4">{data.description}</p>

        </div>
    );
}
