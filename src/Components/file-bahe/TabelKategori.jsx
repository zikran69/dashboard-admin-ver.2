import { useState } from "react";
import HapusKategori from "./HapusKategori";

const TryTabel = (props)=>{
    let dataKategori;
    let hapus;
    if(props.dataKategori == undefined){
        dataKategori = [];
    }else dataKategori = props.dataKategori;

    const opsi = (el)=>{
        const target = el.target;
        if(el.target.title == 'detail' || target.title == 'icon detail') console.log('ini detail');
        else if(target.title == 'edit' || target.title == 'icon edit') console.log('ini edit');
        else if(target.title == 'hapus' || target.title == 'icon hapus'){
            let tr;
            if(target.title == 'hapus'){
                tr = target.parentElement.parentElement.parentElement;
            }else tr = target.parentElement.parentElement.parentElement.parentElement;
            dataKategori.splice([tr.children[0].innerText-1], 1);
            console.log([tr.children[0].innerText-1]);
            hapus = dataKategori;
            props.menghapus(hapus);
        };
    }

    if(dataKategori.length > 0 && dataKategori != undefined){
        return(
        <>
            <table onClick={opsi} id="tabel" className="mb-4 border-collapse  rounded-lg text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">No</th>
                        <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">Kategori</th>
                        <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">Harga</th>
                        <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[250px]">Fasilitas</th>
                        <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">Status</th>
                        <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">Opsi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataKategori.map(({id, kategori, harga, fasilitas, status}, index)=>{
                            return(
                                <tr key={id}>
                                    <td  className= "p-4 border-secondary-gray border border-b-2 border-opacity-10">{index+1}</td>
                                    <td className= "p-4 border-secondary-gray border border-b-2 border-opacity-10">{kategori}</td>
                                    <td className= "p-4 border-secondary-gray border border-b-2 border-opacity-10">Rp{harga}</td>
                                    <td className= "p-4 border-secondary-gray border border-b-2 border-opacity-10">{fasilitas}</td>
                                    <td className= "p-4 border-secondary-gray border border-b-2 border-opacity-10">{status}</td>
                                    <td className= "p-4 border-secondary-gray border border-b-2 border-opacity-10">
                                        <div className="flex justify-center items-center flex-nowrap">
                                            <button type="button" title="detail" className="detail mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"><i title="icon detail" className="ri-search-line text-white"></i></button>
                                            <button type="button" title="hapus" className="hapus mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"><i title="icon hapus" className="ri-delete-bin-line text-white"></i></button>
                                            <button type="button" title="icon edit" className="edit py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"><i title="edit" className="ri-file-edit-line text-white"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
        )
    }
}

export default TryTabel;