import Logo from "./assets/logo.svg";
import Medicine from "./assets/medicine.png";
import Phone from "./assets/phone.svg";
import Rx from "./assets/rx.svg";
import Whatsapp from "./assets/whatsapp.svg";
import WWW from "./assets/www.svg";
function App() {
  return (
    <>
      <main className="h-screen w-screen">
        <div className="flex flex-row justify-center items-center w-full mt-5">
          <img src={Logo} alt="" className="w-20 h-20" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bebas text-4xl md:text-6xl tracking-wider">
              <span className="text-gray-900">JAN</span>
              <span className="text-red-600">MEDICO</span>
            </h1>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide text-gray-900">
              <span className="text-gray-900">PHARMACY</span>
            </h2>
          </div>
        </div>

        <h1 className="text-3xl md:text-3xl tracking-wider flex flex-col items-center justify-center w-full mt-5 font-extrabold">
          <div className="flex flex-row items-center justify-center w-full mt-4 font-extrabold text-3xl md:text-3xl">
            <span className="text-gray-900">Buy</span>
            <span className="text-red-600">JanAushadhi</span>
          </div>
          <span className="text-gray-900">Medicines Online</span>
        </h1>

        <h2 className="tracking-wider flex flex-row items-center justify-center w-full mt-4 font-bold">
          <span className="text-gray-900">
            and save upto 90% on your Medical Bills
          </span>
        </h2>
        <div className="flex flex-row items-center justify-center ">
          <img src={Medicine} alt="" className="w-[22rem]" />
        </div>
        <h3 className="text-xl md:text-xl tracking-wider flex flex-row items-center justify-center w-full mt-4 font-light">
          <span className="text-gray-900">Delivery in Delhi-NCR only</span>
        </h3>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <a
            href="tel:9266839372"
            className="flex items-center justify-start px-4 py-2 bg-white text-black rounded-lg shadow-lg border-2 border-black relative gap-4 w-[19rem]"
          >
            <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-[#E23F33] rounded-lg -z-10"></div>
            <img src={Phone} alt="" className="h-6 w-6" />
            <span className="font-bold text-lg">92668 39372</span>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <a
            href="https://wa.me/+919266839372"
            target="_blank"
            className="flex items-center justify-start px-4 py-2 bg-white text-black rounded-lg shadow-lg border-2 border-black relative gap-4 w-[19rem]"
          >
            <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-[#E23F33] rounded-lg -z-10"></div>
            <img src={Rx} alt="" className="h-6 w-6" />
            <span className="font-bold text-lg">Upload Prescription</span>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <a
            href="https://wa.me/+919266839372"
            target="_blank"
            className="flex items-center justify-start px-4 py-2 bg-white text-black rounded-lg shadow-lg border-2 border-black relative gap-4 w-[19rem]"
          >
            <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-[#E23F33] rounded-lg -z-10"></div>
            <img src={Whatsapp} alt="" className="h-6 w-6" />
            <span className="font-bold text-lg">Order on WhatsApp</span>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <button className="flex items-center justify-start px-4 py-2 bg-white text-black rounded-lg shadow-lg border-2 border-black relative gap-4 w-[19rem]">
            <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-[#E23F33] rounded-lg -z-10"></div>
            <img src={WWW} alt="" className="h-6 w-6" />
            <span className="font-bold text-lg">Order Online</span>
            <div className="flex flex-col items-end justify-center gap-0 ml-8">
              <div className="bg-[#D80001] text-white rounded-tr-xl rounded-bl-xl px-2 font-bold text-xs">
                COMING
              </div>
              <div className="text-[#D80001] font-bold text-xs">SOON</div>
            </div>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
