import React from 'react'

const projects = [
  {
    image:"/thumnail.png",
    title:"Chat & Video Call App",
    des:"Built a real-time chat and video calling application with features like friend requests, messaging, and live video communication. Implemented secure authentication and real-time updates for seamless user interaction.*May take a few seconds to load (hosted on Render).*",
    live:"https://speakify-rqz3.onrender.com/",
    github:"https://github.com/Resham2323/Speakify",
    preview:"/SpeakifyDocs.pdf"
  },
  {
    image:"/AirbnbThumnail.png",
    title:"Airbnb",
    des:"Developed a full-stack Airbnb clone with authentication, CRUD operations for property listings, and map integration for location-based features. Focused on building a responsive and user-friendly interface. *May take a few seconds to load (hosted on Render).*",
    live:"https://airbnb-clone-1-rvns.onrender.com/listings",
    github:"https://github.com/Resham2323/Airbnb-clone",
    preview:"/AirbnbDocs.pdf"
  },
  {
    image:"/ChatgptThumnail.png",
    title: "ChatGPT Clone",
    des: "Created a ChatGPT-like application with user authentication and API-based responses. Designed a clean and interactive UI for smooth conversation experience. *May take a few seconds to load (hosted on Render).*",
    live:"https://chatzie-rhyy.vercel.app/",
    github:"https://github.com/Resham2323/Chatzie",
    preview:"/chatzie.Temp.png"
  }
]
const Projects = () => {
  return (
    <section id='project' className='mb-8'>
    <div className="py-10">
      <h2 className='text-4xl font-bold mb-20 text-center'>Projects</h2>
      <div className="grid md:grid-cols-3 px-32 gap-12 ">
        {projects.map((p, i) => (
          <div key={i} className="rounded-2xl h-full hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-500/30">
           <img 
           src={p.image} 
           alt={p.title} 
           className="w-full h-78 object-cover p-4"/>
           {/* content */}
           <div className="p-5">
            <h3 className='text-xl font-semibold text-white mb-2'>{p.title}</h3>

            <p className="text-gray-400 text-md mb-4">
                {p.des}
            </p>
            {/* buttons */}
            <div className="flex gap-8">
                <a
                  href={p.github}
                  target="_blank"
                  className="px-6 py-3 border border-purple-500 rounded-lg text-md hover:bg-purple-500"
                >
                  GitHub
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  className="px-6 py-3 border border-purple-500 rounded-lg text-md hover:bg-purple-500"
                >
                  Live
                </a>
                <a
                  href={p.preview}
                  target="_blank"
                  className="px-6 py-3 border border-purple-500 rounded-lg text-md hover:bg-purple-500"
                >
                Preview 
                 </a>
              </div>

           </div>
          </div>
        ))}

      </div>
    </div>
    </section>
      
  )
}

export default Projects;
