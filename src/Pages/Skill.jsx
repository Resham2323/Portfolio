import { FaHtml5, FaCss3Alt, FaNodeJs, FaServer,  FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss ,SiJsonwebtokens, SiEjs, SiExpress} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
   { name: "Node.js", icon: <FaNodeJs /> },
{ name: "Express.js", icon: <SiExpress /> },
{ name: "REST API", icon: <FaServer /> },
{ name: "JWT Auth", icon: <SiJsonwebtokens /> },
{ name: "EJS", icon: <SiEjs /> },
];

const Skill = () => {
  return (
    <section id='skill' className='min-h-screen mt-8 p-8'>
          <div className="pt-10">
      <h2 className="text-4xl font-bold text-center mt-8 mb-12">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col items-center justify-center 
                       hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            <div className="text-5xl text-purple-500 mb-4">
              {skill.icon}
            </div>
            <p className="text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default Skill
