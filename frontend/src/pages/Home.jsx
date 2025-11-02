import Slider1 from '../../public/img/slider1.jpg'
import Bienvenidos1 from '../../public/img/bienvenidos1.png'
import firma1 from '../../public/img/firma1.jpg'
import { Handshake, Rows4,Map } from 'lucide-react'

const Home = () => {
  return(
    <>
      <header className="bg-black w-full h-24 flex items-center">
        <div className="flex text-white items-center">
          <h1 className="text-2xl flex justify-center items-center text-center">Estudio Juridico Ortiz Asociados</h1>
        </div>
        <div className="w-full pr-10">
          <ul className="w-full text-white flex justify-between items-center">
            <li className="flex items-center justify-center w-full">Inicio</li>
            <li className="flex items-center justify-center w-full">Nuestra firma</li>
            <li className="flex items-center justify-center w-full">Especialidades</li>
            <li className="flex items-center justify-center w-full">Contacto</li>
            <li className="flex items-center justify-center w-full bg-yellow-500 py-2 text-black font-semibold cursor-pointer hover:bg-yellow-400">Llamenos al 991-259-680</li>
          </ul>
        </div>
      </header>
      <main className='flex flex-col w-full'>
        <section className="w-full bg-linear-to-t bg-[#050505] flex flex-col relative">
          <img src={Slider1} className='w-full h-170'></img>
          <div className="absolute inset-0 bg-black/50 flex flex-col">
            <div className='flex flex-col gap-y-15 text-white px-30 justify-center h-full'>
              <p>Es uno de los estudios jurídicos</p>
              <h1 className='text-5xl font-semibold'>Lideres en el mercado legal Peruano</h1>
              <button 
                className='bg-black p-3 text-yellow-200 border-2 border-amber-300 rounded-3xl font-semibold w-[10%] cursor-pointer hover:bg-yellow-200 hover:text-black transition-all duration-100'
              >
                Agendar una cita
              </button>
            </div>
          </div>
        </section>
        <section className='bg-[#1F1F1F]'>
          <div className='flex grid-cols-3 w-[60%] mx-auto gap-x-10'>
            <div className='flex flex-col w-200 bg-white border-4 border-yellow-200 gap-y-2 p-10'>
              <h2 className='font-semibold text-2xl'>Servicio Garantizado</h2>
              <p>Nos apasiona los retos, asumimos el caso como nuestro y nos esforzamos para obtener los mejores resultados.</p>
            </div>
            <div className='flex flex-col w-200 bg-white border-4 border-yellow-200 gap-y-2 p-10'>
              <h2 className='font-semibold text-2xl'>Especialistas en diversas áreas del Derecho</h2>
              <p>Nuestro equipo destaca por su experiencia y formación profesional en el Perú y el extranjero.</p>
            </div>
            <div className='flex flex-col w-200 bg-white border-4 border-yellow-200 gap-y-2 p-10'>
              <h2 className='font-semibold text-2xl'>Soporte Personalizado</h2>
              <p>Atención legal con enfoque personalizado, adaptamos nuestras soluciones a la estrategia y características de cada cliente.</p>
            </div>
          </div>
          <div className='w-full flex justify-center items-center my-30'>
            <div className='flex w-[60%] gap-x-20'>
              <div className='flex items-center'>
                <img src={Bienvenidos1} className='w-300 '></img>
              </div>
              <div className='text-white'>
                <div className='flex flex-col gap-y-5'>
                  <h2 className='text-4xl font-semibold text-center'>Bienvenidos al Estudio Villanueva Abogados E.I.R.L.</h2>
                  <p>Firma Legal Especializada en Defensa Legal y Asesoramiento Integral. Desde 1995 te ayudamos a encontrar soluciones eficaces a los problemas más complejos.</p>
                </div>
                <div className='flex flex-col gap-y-8 mt-10'>
                  <div>
                    <h2 className='text-3xl font-semibold text-center'>¿Por qué elegir al Estudio Villanueva Abogados?</h2>
                  </div>
                  <div>
                    <Handshake size={40} color={'#fbbf24'}/>
                    <p>Porque tenemos mas de 25 años de experiencia en el mercado legal peruano.</p>
                  </div>
                  <div>
                    <Rows4 size={40} color={'#fbbf24'}/>
                    <p>Porque contamos con un equipo comprometido, altamente capacitados, liderados por abogados de amplia trayectoria en el campo público y privado.</p>
                  </div>
                  <div>
                    <Map size={40} color={'#fbbf24'}/>
                    <p>Porque nos encontramos ubicados en una zona céntrica de la ciudad de Lima, contando con una infraestructura moderna, con tecnología de punta y cómodos ambientes de estilo clásico europeo donde se respira historia, arte y cultura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#575757] flex flex-col justify-center items-center text-white w-full py-10'>
          <div className='w-[60%] '>
            <div>
              <h1 className='text-4xl font-semibold border-l-8 border-orange-300 pl-8'>Nuestra firma</h1>
            </div>
            <div className='grid grid-cols-2 gap-x-10 my-10'>
              <div className='flex flex-col gap-y-5 '>
                <h2 className='text-xl font-semibold'>¿Quiénes somos?</h2>
                <p>Firma legal con más de 25 años de experiencia, comprometida con entregar calidad y valor a nuestros clientes, contamos con un equipo comprometido, altamente capacitado y un Estudio Museo con un ambiente de estilo clásico europeo donde se respira historia, arte y cultura. Nos preocupamos por mejorar y alcanzar la excelencia en el servicio que brindamos, nos apasiona los retos y nos esforzamos por encontrar soluciones eficaces a los problemas más complejos. Atendemos a nivel nacional e internacional. Empadronados en el registro Nacional de Proveedores RUC 10224862569. </p>
                <h2 className='text-xl font-semibold'>Nuestro Equipo</h2>
                <p>Nuestro equipo está integrado por abogados de diversas especialidades altamente capacitados con sólidos valores como la honestidad y transparencia, liderados por su Titular Gerente el Dr. Pedro Villanueva con mas de 25 años de experiencia profesional en el campo público y privado, con estudios de Maestría y Doctorado en Derecho en la UNMSM, posgraduado PADE en Gestión de Recursos Humanos en ESAN, Economía del Trabajo en la Universidad de Buenos Aires – UBA. Argentina. Asesor jurídico de empresas por la Universidad de Salamanca – España. Se desempeño como Magistrado Laboral en Poder Judicial del Perú, Profesor Universitario, ejerciendo la docencia en Derecho Laboral y Derecho Procesal Laboral. Asesor y consultor Laboral de Empresas Públicas y Privadas. Conferencista académico y autor de artículos jurídicos para el Diario Oficial El Peruano, la Revista JUS y diversas revistas especializadas en materia laboral y empresarial. Fundador de Abogados Laboralistas Perú y actual CEO en Estudio Villanueva Abogados.</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-y-13'>
                <div className='flex flex-col gap-y-2'>
                  <h2 className='text-xl font-semibold'>Partiendo de esa premisa</h2>
                  <p>Aunado a valores como la honestidad y transparencia, nuestro Estudio brinda un servicio de primer nivel a sus clientes, con calidad y eficiencia comprobada y una atención personalizada, comprometiéndonos con sus necesidades, asumiendo la defensa como propia y guardando total fidelidad.</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                 <h2 className='text-xl font-semibold'>Nuestro Estudio</h2>
                 <p>Ha logrado alcanzar prestigio profesional que nuestros clientes y competidores reconocen y nos esforzamos constantemente buscando alcanzar la excelencia que nuestra Firma persigue.</p>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <h2 className='text-xl font-semibold'>Nuestra Visión</h2>
                  <p>Ser el Estudio líder en el mercado legal peruano y ser reconocido a nivel internacional como un Estudio modelo en la prestación de servicios profesionales en el campo del Derecho.</p>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <img src={firma1} alt="Firma Villanueva Abogados" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home