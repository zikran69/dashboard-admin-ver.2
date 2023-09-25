import PropTypes from "prop-types";
export default function NewKamar({ database }) {
  const db = database;
  const isiForm = () => {
    const popUp = document.getElementById("layer");
    popUp.classList.toggle("hidden");
    popUp.classList.toggle("flex");
    const create = (
      id,
      kategori,
      lantai,
      nomorKamar,
      fasilitas,
      harga,
      keterangan,
      status
    ) => {
      const newKamar = {
        id: id,
        kategori: kategori,
        lantai: lantai,
        nomorKamar: nomorKamar,
        fasilitas: fasilitas,
        harga: harga,
        keterangan: keterangan,
        status: status,
      };
      db.push(newKamar);
    };
    create(
      `id-${Math.random()}`,
      `kategori-${Math.random()}`,
      `lantai-${Math.random()}`,
      `nomorKamar-${Math.random()}`,
      `fasilitas-${Math.random()}`,
      `harga-${Math.random()}`,
      `keterangan-${Math.random()}`,
      `status-${Math.random()}`
    );
    // tambah(db);
    console.log(db);
  };
  return (
    <button
      onClick={isiForm}
      id="tambah"
      type="button"
      className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
    >
      <i className="ri-hotel-bed-line mr-2"></i>Tambah Kamar
    </button>
  );
}
NewKamar.propTypes = {
  database: PropTypes.array,
};
