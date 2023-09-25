export default function CheckinKamarPage(){
    return(
        <div className="w-full"> 
            <main className="bg-primary-gray grow overflow-y-auto">
            <div id="modal-overlay" className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90">
            </div>
            <div className="p-2 h-[calc(100vh-67.33px)]">
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">Check In</h1>
                </div>
                <div className="p-6 m-3 bg-white">
                    <div id="modal"
                        className="hidden absolute bg-white inset-0 m-auto w-[90%] h-[550px] rounded  overflow-y-auto">
                        <div className="flex justify-between px-2">
                            <h3 className="my-4 ml-2 text-2xl font-semibold">detail Check-in</h3>
                            <button id="close-modal" className="text-3xl"><i
                                    className="ri-close-fill text-secondary-gray hover:text-secondary-blue"></i></button>
                        </div>
                        <div className="p-2">
                            <form action="#">
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="kategori"
                                            className="text-secondary-gray">Kategori</label>
                                        <select name="kategori" id=""
                                            className="w-full focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded border border-gray-300">
                                            <option>--pilih kategori--</option>
                                            <option>gold</option>
                                            <option>silver</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="Lantai"
                                            className="text-secondary-gray">Lantai</label>
                                        <select name="Lantai" id=""
                                            className="w-full focus:outline-secondary-gray p-2.5 rounded border border-gray-300">
                                            <option>--pilih Lantai--</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="No kamar">No kamar</label>
                                        <select name="No kamar" id=""
                                            className="w-full focus:outline-secondary-gray p-2.5 rounded border border-gray-300">
                                            <option>--pilih No kamar--</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="Harga kamar">Harga kamar</label>
                                        <input type="text" name="Harga kamar" id="Harga kamar"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="Tanggal check-in">Tanggal check-in</label>
                                        <input type="text" name="Tanggal check-in" id="Tanggal checkin"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="jam check-in">jam check-in</label>
                                        <input type="text" name="jam check-in" id="jam check-in"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="Tanggal Check-out">Tanggal Check-out</label>
                                        <input type="text" name="Tanggal Check-out" id="Tanggal Check-out"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="Jam Check-out">Jam Check-out</label>
                                        <input type="text" name="Jam Check-out" id="Jam Check-out"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="jumlah-hari">Jumlah hari</label>
                                        <input type="text" name="jumlah-hari" id="jumlah-hari"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                </div>
                                <div className="mx-2">
                                    <h3 className="font-semibold">Custummer</h3>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="nik">Nik</label>
                                        <input type="text" name="nik" id="nik"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="nama-lengkap">Nama lengkap</label>
                                        <input type="text" name="nama-lengkap" id="nama-lengkap"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="no-telepon">No telepon</label>
                                        <input type="text" name="no-telepon" id="no-telepon"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="alamat">Alamat</label>
                                        <input type="text" name="alamat" id="alamat"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="untuk-berapa-orang">Untuk berapa orang</label>
                                        <input type="text" name="untuk-berapa-orang" id="untuk-berapa-orang"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="metode-pembayaran">Metode pembayaran</label>
                                        <input type="text" name="metode-pembayaran" id="metode-pembayaran"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-zinc-800" htmlFor="jumlah-bayar">Jumlah bayar</label>
                                        <input type="text" name="jumlah-bayar" id="jumlah-bayar"
                                            className="focus:outline-secondary-gray p-2 rounded border border-gray-300" />
                                    </div>
                                </div>
                                <div className="flex justify-end p-4">
                                    <button className="bg-secondary-blue text-white py-2 px-4 rounded">check-in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex p-2 mb-2 justify-end w-full">
                        <div>
                            <input type="search" placeholder="search"
                                className="px-2 py-1 border border-secondary-gray rounded-full focus:outline-secondary-gray" />
                        </div>
                    </div>
                    <table className="border-collapse  rounded-lg text-sm text-left text-gray-500 bg-white w-full">
                        <thead className="text-xs text-gray-700 bg-gray-50 uppercase">
                            <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    no
                                </th>
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    id
                                    registrasi</th>
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    nik
                                </th>
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    nama
                                </th>
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    no
                                    Kamar</th>
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    tanggal check in</th>
                                <th
                                    className="hidden md:table-cell border-2 border-opacity-10 border-secondary-gray p-2 text-left">
                                    opsi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no">1</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="id-registrasi">REG001</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nik">
                                    1234567890</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nama">John
                                    Doe</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no-kamar">
                                    101</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="tanggal-checkin">2023-08-01</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
                                    data-cell="opsi"><button title="detail" className="px-5 py-1 rounded-md bg-green-400 hover:bg-hover-green"> <i
                                            className="ri-search-line text-white"> </i></button></td>
                            </tr>
                            <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no">2</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="id-registrasi">REG002</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nik">
                                    9876543210</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nama">Jane
                                    Smith</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no-kamar">
                                    102</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="tanggal-checkin">2023-08-02</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
                                    data-cell="opsi"><button title="detail" className="px-5 py-1 bg-green-400 hover:bg-hover-green rounded-md"> <i
                                            className="ri-search-line text-white"> </i></button></td>
                            </tr>
                            <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no">3</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="id-registrasi">REG003</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nik">
                                    5555555555</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nama">
                                    Michael Johnson</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no-kamar">
                                    103</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="tanggal-checkin">2023-08-03</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
                                    data-cell="opsi"><button title="detail" className="px-5 py-1 bg-green-400 hover:bg-hover-green rounded-md"> <i
                                            className="ri-search-line text-white"> </i></button></td>
                            </tr>
                            <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no">4</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="id-registrasi">REG004</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nik">
                                    1111111111</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nama">Susan
                                    Williams</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no-kamar">
                                    104</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="tanggal-checkin">2023-08-04</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
                                    data-cell="opsi"><button title="detail" className="px-5 py-1 bg-green-400 hover:bg-hover-green rounded-md"> <i
                                            className="ri-search-line text-white"> </i></button></td>
                            </tr>
                            <tr className="odd:bg-zinc-400 odd:bg-opacity-10 md:odd:bg-transparent">
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no">5</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="id-registrasi">REG005</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nik">
                                    9999999999</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="nama">Robert
                                    Brown</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="no-kamar">
                                    105</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10"
                                    data-cell="tanggal-checkin">2023-08-05</td>
                                <td className="md:before:content-none before:capitalize before:content-[attr(data-cell)':'] before:block before:font-semibold flex justify-between md:table-cell p-3 border-secondary-gray border-2 border-opacity-10 md:text-center"
                                    data-cell="opsi"><button title="detail" className="px-5 py-1 bg-green-400 hover:bg-hover-green rounded-md"> <i
                                            className="ri-search-line text-white"> </i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        </div>
    )
}