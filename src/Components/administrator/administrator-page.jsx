import Modal from "./modal";
import DataAdmin from "./dataAdmin";
import { useEffect, useState } from "react";

export default function AdministratorPage() {
  const [state, setState] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetch("https://651107013ce5d181df5da09e.mockapi.io/admin")
      .then((res) => res.json())
      .then(setState);
  }, []);
  useEffect(() => {
    fetch("https://651107013ce5d181df5da09e.mockapi.io/admin")
      .then((res) => res.json())
      .then(setState);
  }, [showModal]);
  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto">
        <div
          id="modal-overlay"
          className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
        ></div>
        <div className="p-4 h-[calc(100vh-67.33px)]">
          <div>
            <h1 className="text-2xl font-semibold">Administrator</h1>
          </div>
          <div className="p-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div className="relative overflow-x-auto">
                <div className="flex justify-between m-4">
                  <Modal showModal={showModal} setShowModal={setShowModal} />
                  <input
                    type="search"
                    placeholder="cari..."
                    className="pl-4 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500"
                  />
                </div>
                <table className="w-full overflow-x-auto border-collapse  rounded-lg text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        No
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Nama Admin
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Username
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Level
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Last Login
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Status
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Opsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <DataAdmin dataAdmin={state} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
