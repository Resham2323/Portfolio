const education = [
  {
    title: "Bachelor of Commerce (B.Com)",
    place: "College of Vocational Studies Sheikh Sarai Chirag Delhi",
    year: "2024 - prsent",
  },
  {
    title: "Senior Secondary (12th)",
    place: "SKV Chirag Delhi Soami Nagar ",
    year: "2024",
  },
  {
    title: "Secondary (10th)",
    place: "SKV Chirag Delhi Soami Nagar ",
    year: "2022",
  },
];


const Education = () => {
  return (
    <section id='education' className='h-full p-8'>
    <div className="py-10 p-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-2xl w-72 text-center
                       hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {edu.title}
            </h3>
            <p className="text-gray-400">{edu.place}</p>
            <p className="text-purple-400 mt-2">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Education;
