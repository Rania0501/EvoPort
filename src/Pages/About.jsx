import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function About({id}) {
    const infos=[
        {
            name:"FELLOUS EHSAIN Rania",
            age:"20",
            email:"raniafellousehsai@gmail.com",
            adress:"Tanger",
            phone:"+212 638 780 274"
            
            
        }
    ]
    
    return (
      <section id={id} className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          
          {/* TITLE */}
          <div className="order-1 w-full text-center md:text-center md:order-1 md:col-span-4">
            <p className="text-sm tracking-widest font-semibold text-slate-600 dark:text-slate-200">WHO I AM</p>
            <h2 className="relative text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-blue-steel inline-block">
              About Me
              <span className="absolute -left-1 -bottom-2 w-20 h-1 bg-gradient-to-r from-blue-steel via-steel-sky to-peach-cream rounded"></span>
            </h2>
          </div>
    
          {/* IMAGE */}
          <div className="order-2 flex justify-center md:justify-start md:order-1 ml-6">
            <div className="relative inline-block">

                <LazyLoadImage
 src="imgEvoport.webp"
                alt="Web development"
  className="
  h-48 w-56 
  sm:h-70 sm:w-72 
  md:h-80 md:w-96 
  lg:h-88 lg:w-[28rem] 
  2xl:h-[32rem] 2xl:w-[36rem] 
 object-contain shadow-xl mx-auto
"
  effect="blur" // effet de flou pendant le chargement
/>
              {/* Corners */}
              <span className="absolute -top-4 -left-4 w-14 h-14 border-t-2 border-l-2 border-blue-steel"></span>
              <span className="absolute -bottom-5 -right-5 w-40 h-40 border-b-8 border-r-8 border-blue-steel"></span>
            </div>
          </div>
    
          {/* TEXT + INFOS */}
          <div className="order-3 space-y-4 text-center md:text-left md:order-2">
            <p className="text-slate-600 pt-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base lg:text-md 2xl:text-lg dark:text-slate-300">
              I’m a Full-Stack Web Developer focused on building fast, accessible, and scalable
              products end-to-end — from elegant UIs to robust APIs and cloud deployment.
            </p>
    
            <div className="max-w-md mx-auto md:mx-0">
              {infos.map((item, index) => (
                <div key={index} className="text-sm sm:text-base lg:text-md 2xl:text-lg">
                  <div className="grid grid-cols-2 gap-y-2 text-center md:text-left">
                    <p className="font-semibold text-blue-steel">Name:</p>
                    <p className="text-gray-700 dark:text-slate-200">{item.name}</p>
    
                    <p className="font-semibold text-blue-steel">Age:</p>
                    <p className="text-gray-700 dark:text-slate-200">{item.age}</p>
    
                    <p className="font-semibold text-blue-steel">Email:</p>
                    <p className="text-gray-700 dark:text-slate-200">{item.email}</p>
    
                    <p className="font-semibold text-blue-steel">Address:</p>
                    <p className="text-gray-700 dark:text-slate-200">{item.adress}</p>
    
                    <p className="font-semibold text-blue-steel">Phone:</p>
                    <p className="text-gray-700 dark:text-slate-200">{item.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
    
  }
