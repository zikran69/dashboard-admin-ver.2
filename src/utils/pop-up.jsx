export default function PopUp() {
  const close = () => {
    document.getElementById("layer").classList.toggle("hidden");
    document.getElementById("layer").classList.toggle("flex");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const {
      kategoriKamar,
      lantai,
      nomorKamar,
      fasilitas,
      harga,
      status,
      keterangan,
      image,
    } = Object.fromEntries(formData);
    close();
  };
  return (
    <div className="font-ralewa px-8 py-4 bg-zinc-100 w-fit rounded-sm">
      <div className="flex justify-between">
        <h1 className="mb-4 px-2 text-lg tracking-wider">Form Tambah Kamar</h1>
        <button type="button" onClick={close}>
          <i className="ri-close-line text-2xl font-semibold hover:text-hover-blue"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">Kategori Kamar:</label>
          <input
            name="kategoriKamar"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">Lantai:</label>
          <input
            name="lantai"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">Nomor Kamar:</label>
          <input
            name="nomorKamar"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">Fasilitas:</label>
          <input
            name="fasilitas"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">Harga:</label>
          <input
            name="harga"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">Status:</label>
          <input
            name="status"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">keterangan:</label>
          <input
            name="keterangan"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <div className="py-2 px-2">
          <label className="pb-1 pr-2 font-semibold">image:</label>
          <input
            name="image"
            className="pl-1 w-[400px] border-collapse bg-transparent"
          />
          <div className="h-[2px] w-[500px] bg-gray-300"></div>
        </div>
        <button
          type="submit"
          className="border bg-blue-400 px-4 py-1 text-lg text-white rounded-md mt-4 hover:bg-hover-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
