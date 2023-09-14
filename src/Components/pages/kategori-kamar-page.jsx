import React, { useState } from "react";
import kategori from '../../kategori.json'
import Search from "../file-bahe/Search.jsx";
import Tambah from "../file-bahe/Tambah.jsx";
import TabelKategori from "../file-bahe/TabelKategori.jsx";

export default function KategoiKamarPage(props){
    const [storage, setStorage] = useState(kategori);
    // const [postKategori, setPostKategori] = useState(storage);
    // let dataKategori = storage;

    // if(dataKategori.length>1){
    //     document.querySelector('table').classList.remove('hidden');
    // }

    const dataTambahKategori = value=>{
        setStorage(value.map(el=>el));
        // dataKategori = value;
        // setPostKategori(value.map(el=>el));
        // console.log(storage)
    }
    
    const dataMencari = (value)=>{
        // setPostKategori(value.map(el=>el));
    }
    const deleteKategori = (value)=>{
        setStorage(value.map(el=>el));
        // dataKategori = value;
        // setPostKategori(value.map(el=>el))
        // console.log(storage)
    }
    
    return(
    <div className="w-full">
        <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">Kategori Kamar</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
            <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
                <Tambah dataKategori={storage} menambahKategori={dataTambahKategori} />
                <Search dataKategori={storage} mencariKategori={dataMencari} />
            </div>
            <TabelKategori dataKategori={storage} menghapus={deleteKategori}/>
        </form>
    </div>
    </div>
    )
}   
