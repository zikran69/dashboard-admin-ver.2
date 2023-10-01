import { useEffect, useState } from "react";
import { useContext } from "react";
import { global } from "../assets/context";

import ListTable from "../Components/list-table";
import TambahKamar from "../Components/tambah-kamar";
import Cari from "../Components/Cari";

export default function ListKamarPage() {
  const loadUpdate = useContext(global).loadUpdate;
  const dataHotel = useContext(global).dataHotel;
  const [display, setDisplay] = useState(dataHotel);

  useEffect(() => {
    setDisplay(dataHotel);
  }, [dataHotel]);

  const cari = (value) => {
    setDisplay(dataHotel.filter((e) => e.nomorKamar.includes(value)));
  };

  const hapus = (value) => {
    fetch(`https://6507a74b3a38daf4803f9ee4.mockapi.io/api/v1/rooms/${value}`, {
      method: "DELETE",
    });
    loadUpdate(true);
    alert("berhasil dihapus!");
  };

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">List Kamar</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <TambahKamar />
            <Cari cari={cari} />
          </div>
          <ListTable dataHotel={display} hapus={hapus} />
        </form>
      </div>
    </div>
  );
}
