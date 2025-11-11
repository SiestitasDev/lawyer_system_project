import Slider1 from '../../public/img/slider1.jpg'
import Bienvenidos1 from '../../public/img/bienvenidos1.png'
import firma1 from '../../public/img/firma1.jpg'
import { Handshake, Rows4,Map } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import trofeo1 from '../../public/img/trofeo1.png'
import trofeo2 from '../../public/img/trofeo2.png'
import trofeo3 from '../../public/img/trofeo3.png'
import trofeo4 from '../../public/img/trofeo4.png'
import manos from '../../public/img/manos.png'
import youtube from '../../public/img/youtube.png'
import imgForm from '../../public/img/img_form.png'

const Home = () => {

  const navigate = useNavigate()

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
                onClick={() => navigate('/login')}
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
        <section className='bg-[#161616] flex flex-col w-full justify-center items-center text-white'>
          <div className='flex flex-col w-[70%] gap-y-5 py-10'>
            <div>
              <h2 className='text-4xl font-semibold border-l-4 border-amber-300 pl-5'>RECONOCIMIENTOS</h2>
            </div>
            <div className='flex gap-x-3 justify-between'>
              <img className='w-[20%] h-[20%] ' src={trofeo1} alt="Trofeo 1" />
              <img className='w-[20%] h-[20%] ' src={trofeo2} alt="Trofeo 2" />
              <img className='w-[20%] h-[20%] ' src={trofeo3} alt="Trofeo 3" />
              <img className='w-[20%] h-[20%] ' src={trofeo4} alt="Trofeo 4" />
            </div>
          </div>
        </section>
        <section className='w-full flex flex-col justify-center items-center pb-15'>
          <div className='w-[60%] flex justify-between items-center py-15'>
            <div>
              <h2 className='text-3xl border-l-6 border-amber-200 pl-3 font-semibold'>AREAS DE PRÁCTICA</h2>
            </div>
            <div className='w-[50%]'>
              <p>Enfocamos nuestra práctica en dar solución a asuntos legales de alta complejidad, nos apasiona los retos y buscamos la excelencia en el servicio que brindamos a través de un equipo experimentado con altos estándares de ética y sentido de responsabilidad.</p>
            </div>
          </div>
          <div className='flex w-full justify-center items-center '>
            <div>
              <img src={manos} className='w-150 h-150'></img>
            </div>
            <div className='flex flex-col'>
              <div className='bg-[#E3E3E3] flex py-5 border-y-2 pl-3'>
                <div className='px-4 flex items-center bg-[#4A4949] text-white text-2xl'>1</div>
                <div className='px-5'>
                  <p>ASESORIA A TRABAJADORES</p>
                  <a href="">Ver más</a>
                </div>
              </div>
              <div className='bg-[#E3E3E3] flex py-5 border-b-2 pl-3'>
                <div className='px-4 flex items-center bg-[#4A4949] text-white text-2xl'>2</div>
                <div className='px-5'>
                  <p>ASESORIA A ORGANIZACIONES SINDICALES</p>
                  <a href="">Ver más</a>
                </div>
              </div>
              <div className='bg-[#E3E3E3] flex py-5 border-b-2 pl-3'>
                <div className='px-4 flex items-center bg-[#4A4949] text-white text-2xl'>3</div>
                <div className='px-5'>
                  <p>ASESORIA A EMPRESAS</p>
                  <a href="">Ver más</a>
                </div>
              </div>
              <div className='bg-[#E3E3E3] flex py-5 border-b-2 pl-3'>
                <div className='px-4 flex items-center bg-[#4A4949] text-white text-2xl'>4</div>
                <div className='px-5'>
                  <p>INSPECCIONES LABORALES</p>
                  <a href="">Ver más</a>
                </div>
              </div >
              <div className='bg-[#E3E3E3] flex py-5 border-b-2 pl-3'>
                <div className='px-4 flex items-center bg-[#4A4949] text-white text-2xl'>5</div>
                <div className='px-5'>
                  <p>RECUPERACIONES Y COBRANZAS LEGALES</p>
                  <a href="">Ver más</a>
                </div>  
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section className='bg-[#161616] w-full flex flex-col justify-center items-center text-white py-10'>
          <div className='w-[70%] flex flex-col justify-center items-center'>
            <div className='flex items-start w-full pb-5'>
              <h2 className='text-4xl font-semibold text-white border-l-6 border-amber-300 pl-3'>LEGAL TV</h2>
            </div>
            <div className='grid grid-cols-2 gap-y-5 gap-x-10'>
              <iframe width="550" height="315" src="https://www.youtube.com/embed/DpROLIYRnSU" title="Constitución de empresas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="550" height="315" src="https://www.youtube.com/embed/et9Y9U6aqXk" title="Empleabilidad de los jóvenes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="550" height="315" src="https://www.youtube.com/embed/LXK3jTHA1zE" title="Licencia por maternidad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="550" height="315" src="https://www.youtube.com/embed/4S0wv6dU2yc" title="Trabajadores CAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='py-10 text-2xl font-semibold flex flex-col items-center'>
              <h2>Mira más videos en nuestro canal de Youtube Legal TV:</h2>
              <img src={youtube} alt="Youtube Channel" />
            </div>
          </div>
        </section>
        <section className='bg-white flex w-full'>
          <div className='my-20 bg-[#FAFBFE] flex items-center justify-center gap-x-10 py-10'>
            <div className='flex w-[80%] gap-x-10 items-center'>
              <div className='border-8 border-black h-full w-full'>
                <div className='px-20 py-5'>
                  <h2 className='text-2xl font-semibold border-b-2 py-2'>Envíanos tu consulta</h2>
                </div>
                <form action="" className='flex flex-col py-5 px-20 gap-y-5 w-full h-full'>
                  <input type="text" placeholder='Nombre' className='px-2 py-3 border-1'/>
                  <input type="text" placeholder='Celular' className='px-2 py-3 border-1'/>
                  <input type="text" placeholder='Email' className='px-2 py-3 border-1'/>
                  <textarea name="" id="" placeholder='Mensaje' className='px-2 py-3 border-1'></textarea>
                  <button className='p-3 border-1 bg-black text-[#E3B576] rounded-3xl cursor-pointer hover:text-black hover:bg-[#E3B576] hover:border-1 transition-all duration-200 ' type='submit'>Enviar</button>
                </form>
              </div>
              <div className='w-full flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center mb-10'>
                  <h2 className='font-semibold text-3xl pb-3'>CONSULTAS:</h2>
                  <p className='w-[50%] min-w-[50%] text-justify'>ATENCIÓN A NIVEL NACIONAL CONSULTA PRESENCIAL Y ONLINE Reserve su cita por las siguientes vías: -Llamando a la central (+51) 1 7481222 -Utilizando el formulario de nuestra sección contáctenos. -Escribiendo al correo contacto@estudiovillanueva.pe -Mediante la mensajería instantánea WhatsApp que aparece en nuestra página.</p>
                </div>
                <div>
                  <img src={imgForm} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home