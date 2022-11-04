import pictures from "../src/img/img.png";

function App() {
  return (
    <>
      <header className="absolute items-center top-0 left-0">
        <div className="container px-20">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="py-10 text-slate-900 font-bold text-2xl mr-3">
                Cexup
              </h1>
            </div>
            <nav className="w-full justify-center items-center mt-2">
              <ul className="flex">
                <li>
                  <a
                    className="mx-6 text-[15px] font-medium text-gray-500"
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="mx-6 text-[15px] font-medium text-gray-500"
                    href=""
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="mx-6 text-[15px] font-medium text-gray-500"
                    href=""
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    className="mx-6 text-[15px] font-medium text-gray-500"
                    href=""
                  >
                    Partnerships
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* pages */}
      <section className="pt-16 pb-36">
        <div className="container px-20">
          <div className="item-center justify-between">
            <div className="flex flex-wrap">
              <div className="w-full self-center lg:w-1/2">
                <h1 className="text-4xl font-bold text-sky-800 mb-5">
                  Providing Easy Access to
                  <span> Healthcare for Everyone</span>
                </h1>
                <p className="font-medium text-slate-500 text-lg mb-16">
                  Cexup is providing White Label application for empowering
                  Hospitals & Clinics Through Innovative Integrated Telemedicine
                  & Digital Medical Check Up application with IoMT & AI that
                  integrate to Hospital Information System
                </p>
                <a
                  href="#"
                  className="bg-sky-700 px-8 py-4 rounded-2xl text-white font-bold text-lg"
                >
                  Set Demo
                </a>
              </div>
              <div className="w-full self-end lg:w-1/2">
                <div className="mt-5 ml-10">
                  <img
                    src={pictures}
                    alt="image homepage"
                    className="mx-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
