

const Tambah = (props)=>{
    const tambahKategori = ()=>{
        const dataKategori = props.dataKategori;
        const createKategori = (parKategori, parHarga, parFasilitas, parStatus)=>{
            const newKategori = {
                id : Math.random()*321,
                kategori: parKategori,
                harga: parHarga,
                fasilitas: parFasilitas,
                status: parStatus
            }
            dataKategori.push(newKategori);
        }
        createKategori(
                'vvip', 
                300, 
                'dummy', 
                'tersedia'
                ); 
        props.menambahKategori(dataKategori);
    }
    return(
        <button onClick={tambahKategori} id="tambah" type="button" className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue">
            <i className="ri-hotel-bed-line mr-2"></i>Tambah
        </button>
    )
}

export default Tambah;