import { User, FileText, Phone, MapPin } from 'lucide-react'
import React from 'react'

function About() {
    return (
        <section id="about" className="min-h-[95vh] flex items-center bg-slate-800 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                {/* Profile Pic */}
                <div className="flex justify-center">
                    <img
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="rounded-full shadow-lg w-80 h-80 object-cover"
                    />


                </div>

                {/* About Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 flex items-center text-blue-400">
                        <User className="mr-2" /> About Me
                    </h2>

                    <p className="text-gray-300 mb-3">
                        Hi, I'm <span className="font-semibold text-white">Krishna Faujdar</span>,
                        currently in my <span className="text-blue-400">third year</span> of pursuing a
                        <span className="text-blue-400"> B.Tech in Computer Science</span> at the
                        <span className="text-blue-400"> Indian Institute of Information Technology, Raichur (IIITR)</span>.
                    </p>

                    <p className="text-gray-300 mb-3">
                        I am a passionate <span className="font-medium">full-stack developer</span> who enjoys
                        building scalable and user-friendly applications.
                        My strong interests include <span className="text-blue-400">Artificial Intelligence</span>,
                        <span className="text-blue-400"> System Design</span>, and
                        <span className="text-blue-400"> Cloud Computing</span>.
                    </p>

                    <p className="text-gray-300 mb-4">
                        Beyond coding, I like exploring new technologies, contributing to open source, and working
                        on projects that challenge my problem-solving skills.
                    </p>

                    {/* Contact Info */}
                    <div className="text-gray-300 mb-6 space-y-2">
                        <p className="flex items-center">
                            <Phone className="mr-2 text-blue-400" size={18} /> +91 8619064840
                        </p>
                        <p className="flex items-center">
                            <MapPin className="mr-2 text-blue-400" size={18} /> Bharatpur, Rajasthan, India
                        </p>
                    </div>

                    {/* Resume Link */}
                    <a
                        href="https://drive.google.com/file/d/1KHyr4fzU-C1lkTeKC92o8lzWR8K_E5hD/view?usp=drivesdk" // <-- Replace with your actual resume link/file
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                        <FileText className="mr-2" size={20} /> View Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
