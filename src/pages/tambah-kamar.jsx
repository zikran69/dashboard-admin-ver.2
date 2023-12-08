import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
export default function TambahKamarForm() {
  const [createRoom, setCreateRoom] = useState(null);
  const [response, setResponse] = useState([]);
  const [connected, setConnected] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (createRoom) {
      fetch(`${import.meta.env.VITE_ADDR_API}/rooms/`, {
        headers: {
          Authorization: `Bearer ${auth.isAuthenticated()}`,
        },
        method: "POST",
        body: createRoom,
      })
        .then((res) => res.json())
        .then(setResponse)
        .catch(() => {
          setConnected(false);
        });
    }
  }, [createRoom]);

  useEffect(() => {
    if (response.success) {
      alert(response.success);
    }
    if (response.message) {
      alert(response.message);
      auth.logout();
      navigate("/");
    }
    if (!connected) {
      alert("database not conected...");
      setConnected(true);
    }
  }, [response.success, response.message, connected]);
  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setCreateRoom(formData);
    setTimeout(() => {
      navigate("/list-rooms");
    }, 1000);
  };

  return (
    <>
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div
            id="modal-overlay"
            className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
          ></div>
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">Form Add Room</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Room Category</label>
                        <select
                          name="categoryId"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>Admin</option>
                          <option value={2}>Superadmin</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Floor</label>
                        <select
                          name="floorId"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Name Room</label>
                        <input
                          name="nameRoom"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Name Room"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Number Room</label>
                        <select
                          name="numberRoom"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <input
                          name="descRoom"
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Desc"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Status</label>
                        <select
                          name="statusId"
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>Empty</option>
                          <option value={2}>Booked</option>
                        </select>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Link to="/list-rooms">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => navigate("/list-rooms")}
                        >
                          Close
                        </button>
                      </Link>
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
    </>
  );
}
