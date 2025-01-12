// pages/index.js
import {useEffect, useState ,useRef} from 'react';
import mycss from "../mycss.module.css";
import Image from "next/image";

export default function Home() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setId(urlParams.has('id'));
        const showdata = async () => {
            const idFromUrl = urlParams.get('id');
            const response = await fetch(`/api/showDataById?id=${idFromUrl}`).then(res=>res.json());
            return (
                setData(response)
            )
        }
        if(urlParams.has('id')){
            showdata();
        }

    }, [])

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(data.image);

    const [fileUrl, setFileUrl] = useState();
    //const [imageBlob, setImageBlob] = useState(null);

    const handleFileChange = () => {
        const url = URL.createObjectURL(imageRef.current.files[0]);
        setFileUrl(url);
        console.log(url);
    };
    // const [name, setName] = useState();
    // const [description, setDescription] = useState();
    //const [image, setImage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('image', imageRef.current.files[0]);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        console.log(result);
        if (result) {
            alert('enter data :)')
        } else {
            alert('Error deleting data');
        }

    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('image', imageRef.current.files[0]);
        formData.append('id', id);
        const response = await fetch('/api/updateData', {
            method: 'PUT',
            body: formData,
        });
        const result = await response.json();
        console.log(result);
        if (result) {
            alert('update data :)')
        } else {
            alert('Error deleting data');
        }
    };

    const handleClick = (e) => {
        if (id) {
            handleUpdate(e);
        } else {
            handleSubmit(e);
        }
    }
    const handleChange = (e) => {
        setData(e.target.value);
    };
    return (
        <form onSubmit={handleClick} className={mycss.insertform} onChange={handleChange}>
            <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1"
                placeholder="Name" value={data.name}
                 // onChange={(e) => setName(e.target.value)}
                ref={nameRef}
            />
            <textarea
                placeholder="Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1"
                value={data.description}
                // onChange={(e) => setDescription(e.target.value)}
                ref={descriptionRef}
            />
                <Image
                    src={fileUrl ? fileUrl : `/images/${data.image}`}
                    alt="image of sofa" className="w-48 h-48 rounded-md" width={500} height={500}/>

            <input value={fileUrl ? fileUrl : data.image}/>
            <input
                type="file" className="my-1"
                 onChange={handleFileChange}
                //onChange={(e) => setImage(e.target.files[0])}
                 ref={imageRef}
            />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
             rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1">Upload
            </button>
        </form>
    );
}