import { layer } from "./opsi";

export default function TambahKamar() {
  const tambahKamar = (e) => {
    e.preventDefault();
    layer(document.getElementById("layerFormTambah"));
  };
  return (
    <>
      <button
        onClick={tambahKamar}
        className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
      >
        <i className="ri-hotel-bed-line mr-2"></i>Tambah Kamar
      </button>
    </>
  );
}
