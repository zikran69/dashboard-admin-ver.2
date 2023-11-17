import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { global } from "../../assets/context";

export default function EditCategory() {
  const [getCategory, setGetCategory] = useState(null);
  const [editCategory, setEditCategory] = useState(null);
  const [upload, setUpload] = useState(null);
  const reader = new FileReader();
  const navigate = useNavigate();
  const dataId = useContext(global).dataId;

  useEffect(() => {
    fetch(`http://localhost:2000/category/${dataId}`)
      .then((res) => res.json())
      .then(setGetCategory);
  }, []);

  useEffect(() => {
    if (editCategory) {
      fetch(`http://localhost:2000/category/update/${dataId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(editCategory),
      })
        .then((res) => res.json())
        .then((res) => alert(res.message));
    }
  }, [editCategory]);

  useEffect(() => {
    setUpload(document.getElementById("upload"));
    if (upload) {
      upload.addEventListener("change", (e) => {
        reader.addEventListener("load", () => {
          localStorage.setItem("recent-image", reader.result);
          console.log(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      });
    }
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { nameCategory, price, facilityCategory, descCategory } =
      Object.fromEntries(formData);
    setEditCategory({
      nameCategory: nameCategory,
      price: price,
      facilityCategory: facilityCategory,
      descCategory: descCategory,
      image: localStorage.getItem("recent-image"),
    });
    setTimeout(() => {
      navigate("/category-page");
    }, 1000);
  };
  return (
    getCategory && (
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div
            id="modal-overlay"
            className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
          ></div>
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">Form Edit Category</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Name Category</label>
                        <select
                          name="nameCategory"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={getCategory.nameCategory}>
                            {getCategory.nameCategory}
                          </option>
                          <option value={"Junior Suite"}>Junior Suite</option>
                          <option value={"Executive Suite"}>
                            Executive Suite
                          </option>
                          <option value={"Super Delux"}>Super Delux</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Price ($/night)</label>
                        <input
                          name="price"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={getCategory.price}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Facilities</label>
                        <input
                          name="facilityCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={getCategory.facilityCategory}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <input
                          name="descCategory"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder={getCategory.descCategory}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Foto</label>
                        <input
                          id="upload"
                          name="image"
                          required
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
                        onClick={() => navigate("/category-page")}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  );
}
