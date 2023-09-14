import React from "react";

export default function PesanKamarPage(){
    return (
        <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
            <h1 className="m-4 text-2xl font-semibold">Pesan Kamar</h1>
            <div id="modal" className="bg-white border inset-0 rounded-lg mt-2 mx-4 mb-4 p-4 overflow-x-auto">
                <form className="border-collapse  rounded-lg text-sm text-left text-gray-500">
                    <div className="p-4 flex gap-4 flex-wrap">
                        <div className="flex flex-col">
                            <label className="text-zinc-800 ">Kategori</label>
                            <select name="kategori" id=""
                                className="focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray">
                                <option>--pilih kategori--</option>
                                <option>gold</option>
                                <option>silver</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-zinc-800 text-primary-grey">Lantai</label>
                            <select name="Lantai" id=""
                                className="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray">
                                <option>--pilih Lantai--</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">No kamar</label>
                            <select name="No kamar" id=""
                                className="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray">
                                <option>--pilih No kamar--</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Harga kamar</label>
                            <input type="text" name="Harga kamar" id="Harga kamar"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Tanggal check-in</label>
                            <input type="text" name="Tanggal check-in" id="Tanggal checkin"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">jam check-in</label>
                            <input type="text" name="jam check-in" id="jam check-in"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Tanggal Check-out</label>
                            <input type="text" name="Tanggal Check-out" id="Tanggal Check-out"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Jam Check-out</label>
                            <input type="text" name="Jam Check-out" id="Jam Check-out"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Jumlah hari</label>
                            <input type="text" name="jumlah-hari" id="jumlah-hari"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                    </div>
                    <div className="mx-2">
                        <h3 className="font-semibold text-secondary-gray">Custummer</h3>
                    </div>
                    <div className="p-4 flex gap-4 flex-wrap">
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Nik</label>
                            <input type="text" name="nik" id="nik"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Nama lengkap</label>
                            <input type="text" name="nama-lengkap" id="nama-lengkap"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">No telepon</label>
                            <input type="text" name="no-telepon" id="no-telepon"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Email</label>
                            <input type="text" name="email" id="email"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Alamat</label>
                            <input type="text" name="alamat" id="alamat"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                    </div>
                    <div className="p-4 flex gap-4 flex-wrap justify-end">
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Untuk berapa orang</label>
                            <input type="text" name="untuk-berapa-orang" id="untuk-berapa-orang"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Metode pembayaran</label>
                            <input type="text" name="metode-pembayaran" id="metode-pembayaran"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div className="flex flex-col text-secondary-gray">
                            <label className="text-zinc-800">Jumlah bayar</label>
                            <input type="text" name="jumlah-bayar" id="jumlah-bayar"
                                className="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                    </div>
                    <div className="flex justify-end p-4">
                        <button className="bg-blue-400 hover:bg-hover-blue text-white py-2 px-4 rounded-full">Bayar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}