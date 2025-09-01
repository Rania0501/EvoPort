
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
      <section id={id} className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT — circular image with colored arcs */}
          <div className="relative w-full flex justify-center">
  <div className="relative inline-block">
    {/* Image */}
    <img
      src="WhatsApp Image 2025-09-01 at 14.21.52.jpeg"
      alt="Web development"
      className="h-72 w-72 object-cover shadow-xl md:h-66 md:w-96"
    />

  {/* Top-left corner */}
  <span className="absolute -top-4 -left-4 w-14 h-14 border-t-2 border-l-2 border-blue-steel"></span>

  {/* Bottom-right corner */}
  <span className="absolute -bottom-5 -right-5 w-40 h-40 border-b-8 border-r-8 border-blue-steel"></span>
</div>
</div>

  
          {/* RIGHT — text */}
          <div className="space-y-4  ">
           
            <p className="text-sm tracking-widest font-semibold text-slate-600">WHO I AM</p>
            <h2 className="relative ext-2xl md:text-3xl font-bold  text-blue-steel">
             About Me 

  <span className="absolute -left-1 -bottom-2 w-20 h-1 bg-gradient-to-r from-blue-steel via-steel-sky to-peach-cream rounded"></span>

            </h2>
        
            <p className="text-slate-600 pt-6">
              I’m a Full-Stack Web Developer focused on building fast, accessible, and scalable
              products end-to-end — from elegant UIs to robust APIs and cloud deployment.</p>
              <div className="max-w-md ">
  {infos.map((item, index) => (
    <div key={index} className="pr-50 text-sm">
      <div className="grid grid-cols-2 gap-y-2">
        <p className="font-semibold text-blue-steel">Name:</p>
        <p className="text-gray-700">{item.name}</p>

        <p className="font-semibold text-blue-steel">Age:</p>
        <p className="text-gray-700">{item.age}</p>

        <p className="font-semibold text-blue-steel">Email:</p>
        <p className="text-gray-700">{item.email}</p>

        <p className="font-semibold text-blue-steel">Address:</p>
        <p className="text-gray-700">{item.adress}</p>

        <p className="font-semibold text-blue-steel">Phone:</p>
        <p className="text-gray-700">{item.phone}</p>
      </div>
    </div>
  ))}
</div>

           
            
        </div>
        </div>
  
        
      </section>
    );
  }
  