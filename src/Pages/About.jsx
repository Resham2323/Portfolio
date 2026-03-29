import React from 'react'
import Typewriter from "typewriter-effect";
import Resham from "../assets/Resham.jpg";


const About = () => {
    return (
        <section id='about' className='px-8 p-8 mt-8'>
            <div className='flex flex-row gap-10 p-8 mt-8 h-full'>
                <div className='pt-8 ml-6 mt-8 min-w-35'>
                    <h1 className='text-5xl font-bold'>Hii I’m <br />Resham parveen</h1><br />
                    <h3 className='text-3xl fot-lg'>
                        I am a{" "}
                        <span className="inline-block text-violet-500">
                            <Typewriter
                                options={{
                                    strings: ["Full Stack Developer", "Programmer"],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                        </span>
                    </h3><br />
                    <p className='text-xl pr-8 mb-24 text-muted text-base/8 tracking-widest'>building responsive and user-friendly web applications. 🚀
                        <br /> I have worked on full-stack projects such as real time chat applicaton. I am currently seeking an internship opportunity to grow my skills, gain industry experience, and contribute to meaningful projects. And developing solutions that solve real-world problems.
                        My aim is to grow as a developer and craft impactful digital experiences. 🌟
                    </p>
                    <a
                        href="/resume.pdf"
                        download 
                        className="resume mb-5 px-8 py-4 mt-[50px] text-lg rounded-md">View Resume</a>
                </div>
                <div className='profile-img mt-14'>
                    <img src={Resham} className='rounded-full w-7xl' />
                </div>
            </div>
        </section>
    )
}

export default About
