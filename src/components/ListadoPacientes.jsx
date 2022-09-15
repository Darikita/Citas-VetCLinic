import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
    {pacientes && pacientes.length ? (
      <>
      <h2 className="font-black text-[#505050] text-3xl text-center">
        Listado Pacientes
      </h2>
      <p className="text-xl text-[#505050] mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-[#ff4562] font-bold text-xl">Pacientes y Citas</span>
      </p>
        <div className="md:h-screen overflow-scroll">
        {pacientes.map((paciente) => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))}
        </div>
        </>
        ) : (
                <>
                    <h2 className="text-[#505050] font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-[#505050]">
                        Comienza agregando pacientes {''}
                        <span className=" text-[#ff4562] font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
      
    </div>
  );
};

export default ListadoPacientes;
