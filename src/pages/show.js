// pages/index.js
import {useEffect, useState} from 'react';
import Link from "next/link";
import mycss from "./mycss.module.css";
import Image from "next/image";


export default function Home() {
    const [data, setData] = useState([]);
    const [selectItem,setSelectItem]=useState('');

    const handleLanguage = (event) => {
        setSelectItem(event.target.value);
    };
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
            <div className="flex flex-row justify-between">
                <Link className="ml-16 text-white bg-blue-700 hover:bg-blue-100
            focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1" href="index"> {(selectItem === '/en') ? 'add Advertisement' : 'Anzeige hinzufügen'}
                </Link>
                <select onChange={handleLanguage} className="border border-black text-black">
                    <option value="" className="text-black">Language</option>
                    <option value="/en" className="text-black">English</option>
                    <option value="/de" className="text-black">Germany</option>
                </select>
            </div>

            <ul className={mycss.general}>
                {data.map(item => (
                    <li key={item.id} className="bg-white rounded-md grow p-4 text-center">
                        <Link href={`/show/${item.id}`}><p className="text-black font-mono font-semibold">{item.name}</p></Link>
                        <Image src={`/images/${item.image}`} className="w-48 h-48 rounded-md m-auto" alt={item.name} width={500}
                               height={500}/>
                        <p className="py-2 text-black h-24 font-mono text-justify">{item.description}</p>
                        <div className="flex justify-between m-3">
                            <button onClick={() => deleteItem(item.id)} className="font-mono text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1"> {(selectItem === '/en') ? 'delete' : 'löschen'}
                            </button>
                            <Link href={`/index?id=${item.id}`}  className="font-mono text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1">
                                {(selectItem === '/en') ? 'edit' : 'bearbeiten'}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}