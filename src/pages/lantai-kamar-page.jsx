import { useState } from "react";
import { useContext } from "react";
import { global } from "../assets/context";

import LantaiTable from "../Components/lantai-table";
import NewKamar from "../Components/tambah-kamar";

export default function LantaiKamarPage() {
  const [database, setDatabase] = useState(useContext(global).database);
  const updateDb = useContext(global).updateDb;

  const tambah = (value) => {
    setDatabase(value.map((el) => el));
    updateDb(value);
  };

  const hapus = (value) => {
    setDatabase(value.map((el) => el));
    updateDb(value);
  };

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">
          Lantai Kamar
        </h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <NewKamar database={database} tambah={tambah} />
            {/* <Search dataKategori={database} mencariKategori={dataMencari} /> */}
          </div>
          <LantaiTable database={database} dbHapus={hapus} />
        </form>
      </div>
    </div>
  );
}
