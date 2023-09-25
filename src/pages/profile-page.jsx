export default function ProfilePage() {
  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-6 font-raleway text-3xl font-semibold">
          Profile Hotel
        </h1>
        <div className="px-16 max-md:px-6 py-6 grid grid-cols-1 gap-3 overflow-auto">
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1 ">
            <div className="flex items-center">
              <i className="ri-hotel-fill text-4xl text-third-blue"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg ">
                MyHotel
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-customer-service-2-fill text-4xl"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg ">
                021-1239875
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-mail-check-fill text-4xl text-third-blue"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg">
                contact@myhotel.group
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-map-pin-fill text-4xl text-hover-red"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg">
                Jl. Soekarno-Hatta 2023 Yogyakarta, Indonesia
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-global-line text-4xl text-third-blue"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg">
                https://www.myhotel-yogya.com
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-facebook-circle-fill text-4xl text-third-blue"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg">
                myhotelOnFacebook
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-twitter-fill text-4xl text-third-blue"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg">
                myhotelOnTwitter
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
          <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
            <div className="flex items-center">
              <i className="ri-instagram-fill text-4xl text-pink-400"></i>
              <span className="ml-2 border-collapse focus:outline-none font-raleway text-lg">
                myhotelOnInstagram
              </span>
            </div>
            <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
