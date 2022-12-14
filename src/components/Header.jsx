import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="container p-9 bg-[#ebe3d7] rounded-xl ">
      <header className="md:flex ">
        <img className=" mx-auto ml-10 md:w-44 w-48" src={logo} />
        <h1 className="font-black text-[#505050] text-4xl md:text-6xl text-center md:mr-24 mt-11">
          Seguimiento {""}
          <span className="text-[#ff4562]">de Pacientes</span>
        </h1>
      </header>
    </div>
  );
}
export default Header;
