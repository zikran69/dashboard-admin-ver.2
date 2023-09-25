export default function AdministratorPage(){
    return(
        <div className="w-full">
            <main className="bg-primary-gray grow overflow-y-auto">
                <div id="modal-overlay" className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90">
                </div>
                <div className="p-4 h-[calc(100vh-67.33px)]">
                    <div>
                        <h1 className="text-2xl font-semibold">Administrator</h1>
                    </div>
                    <div className="p-4">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <div className="relative overflow-x-auto">
                                <div className="flex justify-between m-4">
                                    {/* <a href="./form-add-admin.html"
                                        className="py-1 px-4 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue">
                                        <i className="ri-add-line mr-2"></i>Tambah
                                    </a> */}
                                    <button id="form-tambah" type="button" className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue">
                                        <i className="ri-hotel-bed-line mr-2"></i>Tambah
                                    </button>
                                    <input type="search" placeholder="cari..."
                                        className="pl-4 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500" />
                                </div>
                                <table
                                    className="w-full overflow-x-auto border-collapse  rounded-lg text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                No
                                            </th>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                Nama Admin</th>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                Username
                                            </th>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                Level
                                            </th>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                Last Login</th>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                Status</th>
                                            <th
                                                className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                                                Opsi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10"
                                                data-cell="no">1</td>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10"
                                                data-cell="id-registrasi">Hilmi</td>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10"
                                                data-cell="nik">Hilmi@gmail.com</td>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10"
                                                data-cell="nama">Admin</td>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10"
                                                data-cell="no-kamar">2023-08-01</td>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10"
                                                data-cell="tanggal-checkin">Aktif</td>
                                            <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10 text-center"
                                                data-cell="opsi">
                                                <div className="w-[190px]">
                                                    <button type="button" title="detail"
                                                        className="form-detail-data mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"><i
                                                            className="ri-search-line text-white"></i></button>
                                                    <button type="button" title="hapus"
                                                        className="modal-hapusnya mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"><i
                                                            className="ri-delete-bin-line text-white"></i></button>
                                                    <button type="button" title="edit"
                                                        className="form-edit-data py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"><i
                                                            className="ri-file-edit-line text-white"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}