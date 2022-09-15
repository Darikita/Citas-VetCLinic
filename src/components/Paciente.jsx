import logo from "../assets/logo.png";
import Swal from "sweetalert2";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente
    
    const handleEliminar = () => {
        const respuesta = Swal.fire({
          title: 'Deseas eliminar este paciente?',
          text: "No podras revertir esta accion",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#505050',
          cancelButtonColor: '#ff4562',
          confirmButtonText: 'Si eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Paciente Eliminado',  
            )
          }
        })
        if(respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
    <div className="mx-5 mb-10 bg-[#ebe3d7] shadow-md px-5 py-10 rounded-xl">
      <img className="ml-10 w-24 float-right m-0" src={logo} />
      <p className="font-bold mb-3 text-plomo uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-plomo uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-plomo uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-plomo uppercase">
        Fecha de Cita: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-plomo uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
        {sintomas}
        </span>
      </p>

      <div className="flex justify-center mt-10 gap-3">
        <button
          type="button"
          className="py-2 px-10 bg-plomo hover:bg-plomo-700 text-white font-bold uppercase rounded-lg text-[#ffffff]"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-7 bg-melon hover:bg-melon-700 text-white font-bold uppercase rounded-lg text-[#ffffff]"
          onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
