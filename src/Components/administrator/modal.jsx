import React, { useEffect, useState } from "react";
// import data from "./data.json";

export default function Modal({ showModal, setShowModal }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [lastLogin, setLast] = useState("12 September 2023");
  const [status, setStatus] = useState("Aktive");
  const [level, setLevel] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const admData = {
      nik,
      name,
      username,
      password,
      phone,
      address,
      lastLogin,
      status,
      level,
    };

    fetch("https://651107013ce5d181df5da09e.mockapi.io/admin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admData),
    })
      .then((res) => {
        alert("Saved successfully.");
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // useEffect(()=>{

  // },[showModal])
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
      >
        <i className="ri-hotel-bed-line mr-2"></i>Tambah
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Form Tambah Admin</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handlesubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                    <div className="md:col-span-3">
                      <label>Level</label>
                      <select
                        onChange={(e) => setLevel(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                      >
                        <option value="0">--pilih level--</option>
                        <option>Admin</option>
                        <option>Superadmin</option>
                      </select>
                    </div>
                    <div className="md:col-span-3">
                      <label>NIK</label>
                      <input
                        type="text"
                        onChange={(e) => setNik(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="NIK"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Nama Lengkap</label>
                      <input
                        type="text"
                        value={name}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama Lengkap"
                        required
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Nomor Telepon</label>
                      <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Nomor Telepon"
                      />
                    </div>
                    <div className="md:col-span-6">
                      <label>Alamat</label>
                      <input
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Alamat"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Email</label>
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Email"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Password</label>
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Password"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label>Foto</label>
                      <input
                        type="file"
                        className="py-[7px] h-10 pl-4 border rounded-sm bg-gray-50 md:w-[500px] lg:w-full"
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
