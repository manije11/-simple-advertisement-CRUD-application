// pages/updateUser.js
import {useEffect, useState} from 'react';
import mycss from "../../mycss.module.css";

export default function UpdateUser() {
    // const [data, setData] = useState([]);
    // const [id, setId] = useState(null);

    // const showdata = async () => {
    //     const response = await fetch(`/api/showDataById?id=${id}`);
    //     const result=await response.json();
    //     setData(result);
    //     console.log(result);
    // }
    //
    //    useEffect(() => {
    //        const url = window.location.href;
    //        const idFromUrl = url.split('/').pop();
    //        setId(idFromUrl);
    //        showdata();
    // },[id])
    console.log(data.name)
    // const [name, setName] = useState();
    // const [description, setDescription] = useState('');
    // const [image, setImage] = useState(null);
    console.log('befor showdata')
    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', name);
    //     formData.append('description', description);
    //     formData.append('image', image);
    //     formData.append('id', id);
    //     const response = await fetch('/api/updateData', {
    //         method: 'PUT',
    //         body: formData,
    //     });
    //     const result = await response.json();
    //     console.log(result);
    //     if (result) {
    //         alert('enter data :)')
    //     } else {
    //         alert('Error deleting data');
    //     }
    // };
    console.log('after showdata')
    return (
        <p>test</p>
        // <form onSubmit={handleUpdate} className={mycss.insertform}>
        //     <input
        //         type="text"
        //         placeholder="Name"
        //         value={name}
        //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
        //         focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        //          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1"
        //         onChange={(e) => setName(e.target.value)}
        //         required
        //     />
        //     <textarea
        //         placeholder="description"
        //         value={description}
        //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
        //         focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        //          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1"
        //         onChange={(e) => setDescription(e.target.value)}
        //         required
        //     />
        //     <input
        //         type="file" className="my-1"
        //         placeholder="file"
        //         value={image}
        //         onChange={(e) => setImage(e.target.files[0])}
        //     />
        //     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800
        //     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
        //      rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-1">Update
        //     </button>
        // </form>
    );
}

