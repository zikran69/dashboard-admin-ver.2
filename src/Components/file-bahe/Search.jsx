const Search = (props)=>{
    const cari = (e)=>{
         const filtered = props.dataKategori.filter(item => item.kategori.includes(e.target.value));
         props.mencariKategori(filtered);
    }
    return(
        <input onChange={cari} type="search" placeholder="cari..." className="pl-4 pr-2 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500 order-first sm:order-last text-lg" />
    )
}

export default Search;