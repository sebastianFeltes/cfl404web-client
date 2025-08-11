import CardCursos from "../components/ui/CardCursos";

function Cursos() {
  return (
    <>
      <div className="text-3xl">Cursos</div>
      <div className="border-2 flex h-full w-full justify-center items-center">
        <CardCursos />
      </div>
    </>
  );
}

export default Cursos;
