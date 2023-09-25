export default function LaporanPage(){
    return(
        <div className="w-full">
            <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
                <h1 className="p-4 font-raleway text-2xl font-semibold">Laporan</h1>
                <form className="font-roboto px-6 mx-4 border rounded-lg bg-white max-lg:px-4 overflow-auto">
                    <div className="flex justify-start m-4 grid-flow-row">
                        <button id="#" type="button" className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue">
                            <i className="ri-filter-2-fill mr-2"></i>Filter 
                        </button>
                        <button id="#" type="button" className="py-1 px-5 ml-4 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue">
                            <i className="ri-printer-fill mr-2"></i>Print
                        </button>
                        <div className="flex justify-end ml-4 pl-6">
                            <input type="search" placeholder="cari..." className="pl-4 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500 text-center" />
                        </div>
                    </div>
                    <table className="mb-4 border-collapse  rounded-lg text-sm text-left text-gray-500 w-full">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50"ali>
                            <tr>
                                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">No</th>
                                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">Customer</th>
                                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">Transaksi</th>
                                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left">Detail</th>
                                <th className="border border-b-2 border-opacity-20 border-secondary-gray p-4 text-left w-[210px] min-w-[210px]">Opsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20"  data-cell="">1</td>
                                <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20"  data-cell="">
                                    <div>
                                        <div className="pb-1">
                                            <span className="mr-2">NIK:</span>
                                            <span>123</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Nama:</span>
                                            <span>test</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Telp:</span>
                                            <span>08123......</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20"  data-cell="">
                                    <div>
                                        <div className="pb-1">
                                            <span className="mr-2">Id Transaksi:</span>
                                            <span>123</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Kategori:</span>
                                            <span>test</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Nomor Kamar:</span>
                                            <span>....</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Harga Kamar:</span>
                                            <span>......</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20"  data-cell="">
                                    <div>
                                        <div className="pb-1">
                                            <span className="mr-2">CheckIn:</span>
                                            <span>...</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">CheckOUt:</span>
                                            <span>...</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Durasi:</span>
                                            <span>....</span>
                                        </div>
                                        <div className="pb-1">
                                            <span className="mr-2">Total Bayar:</span>
                                            <span>......</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border-secondary-gray border border-b-2 border-opacity-20">
                                    <button type="button" title="detail" className="mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"><i className="ri-search-line text-white"></i></button>
                                    <button type="button" title="hapus" className="mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"><i className="ri-delete-bin-line text-white"></i></button>
                                    <button type="button" title="edit" className="py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"><i className="ri-file-edit-line text-white"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </main>
        </div>
    )
}