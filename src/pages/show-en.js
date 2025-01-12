// pages/index.js
import {useEffect, useState} from 'react';
import Link from "next/link";
import mycss from "./mycss.module.css";
import Image from "next/image";


export default function Home() {
    const [data, setData] = useState([]);
    const deleteItem = async (id) => {
        await fetch('/api/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }, params: {
                "id": id
            },
            body: JSON.stringify({id}),
        })
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/getdata', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }});
            const result = await response.json();
            setData(result);
        };
        fetchData();
    },[data]);

    return (
        <>
            <Link className="ml-16 text-white bg-blue-700 hover:bg-blue-100
            focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1" href="index">add Advertisement
            </Link>

            <select onChange={handleLanguage}>
                <option value="/en">English</option>
                <option value="/gn">Germany</option>
            </select>
            <ul className={mycss.general}>
                {data.map(item => (
                    <li key={item.id} className="bg-white rounded-md grow p-8 text-center">
                        <Link href={`/show/${item.id}`}><p className="text-black font-mono font-semibold">{item.name}</p></Link>
                        <Image src={`/images/${item.image}`} className="w-48 h-48 rounded-md" alt={item.name} width={500}
                               height={500}/>
                        <p className="py-2 text-black h-40 font-mono text-justify">{item.description}</p>
                        <div className="flex justify-between m-3">
                            <button onClick={() => deleteItem(item.id)} className="font-mono text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1">delete
                            </button>
                            <Link href={`/index?id=${item.id}`}  className="font-mono text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1"> edit </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}