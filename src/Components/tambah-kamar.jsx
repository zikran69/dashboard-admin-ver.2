import { Link } from "react-router-dom";

export default function TambahKamar() {
  
  return (
    <>
    <Link to="/tambah-kamar">
      <button
        
        className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
      >
        <i className="ri-hotel-bed-line mr-2"></i>Tambah Kamar
      </button>
    </Link>
    </>
  );
}
