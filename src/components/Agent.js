import Agung from "./img/profile/Agung.jpg";
import Aru from "./img/profile/Aru.jpeg";
import Albi from "./img/profile/Albi.jpg";

export default function Agent() {
  return (
    <div className="xl:mx-40 lg:mx-12 pb-32 pt-24">
      <h1 className="pt-20 pb-14 font-bold text-slate-900 text-4xl text-center">DX AGENTS</h1>

      <div id="sosmed" className="xl:flex justify-center items-center mb-8 mx-[420px] border-2 border-yellow-200 rounded-2xl text-slate-500 hidden">
        <h1 className="pr-3 text-xl">Tap the card to open social media</h1>
        <button
          className="font-bold text-red-600 text-2xl"
          onClick={function hide() {
            const sosmed = document.querySelector("#sosmed");
            sosmed.style.display = "none";
          }}
        >
          x
        </button>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-6 place-items-center">
        <a href="https://www.instagram.com/difhaels/?hl=id" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl bg-slate-200 hover:bg-slate-100 -ml-16 sm:ml-16">
          <div className="flex items-center justify-between p-3">
            <img src={Agung} alt="Agung" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">Agung Saputra</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">Difhaels</h1>
            </div>
          </div>
        </a>

        <a href="https://www.instagram.com/aruchvy_/" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 ml-16">
          <div className="flex items-center justify-between p-3">
            <img src={Aru} alt="Aru" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">Aru Chevy</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">Grouu</h1>
            </div>
          </div>
        </a>

        <a href="https://www.instagram.com/salf_yurara/?hl=id" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 -ml-16 sm:ml-16">
          <div className="flex items-center justify-between p-3">
            <img src={Albi} alt="Albi" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">Albi Fahri</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">Kuroneko</h1>
            </div>
          </div>
        </a>

        <a href="#" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 ml-16">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">D**R**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
        </a>

        <a className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 -ml-16 sm:ml-16">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">K**S**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
        </a>

        <a href="#" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 ml-16">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">W**H**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
        </a>

        <a href="#" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 -ml-16 sm:ml-16">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">B**M**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
        </a>

        <a href="#" target={"_blank"} className="w-[285px] h-[125px] shadow-2xl  bg-slate-200 hover:bg-slate-100 ml-16">
          <div className="flex items-center justify-between p-3">
            <img alt="???" className="w-[100px] h-[100px]" />
            <div>
              <h1 className="text-xl text-center">A**S**</h1>
              <div className="w-[150px] h-[2px] bg-slate-900 mx-auto mt-[3px]"></div>
              <h1 className="text-xl text-center">******</h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
