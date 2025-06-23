"use client";

import Image from "next/image";
import { AuroraText } from "./magicui/aurora-text";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Shayan Chakraborty",
      role: "Full Stack Developer (Team Lead)",
      image:
        "https://plus.unsplash.com/premium_photo-1682432340856-d6cd7cd7090e?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Shayan Chakraborty portrait",
    },
    {
      name: "Turin Jana",
      role: "Generative AI Developer",
      image:
        "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHNoYWRvd3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Turin Jana portrait",
    },
    {
      name: "Aditi Agrahari",
      role: "Frontend Developer and UI/UX",
      image:
        "https://images.unsplash.com/photo-1508153460964-48ffffcb0829?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBzaGFkb3d8ZW58MHx8MHx8fDA%3D",
      alt: "Aditi Agrahari portrait",
    },
    {
      name: "Harshit Bhalani",
      role: "Generative AI Developer",
      image:
        "https://images.unsplash.com/photo-1672646673392-39603e215737?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1hbiUyMHNoYWRvd3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Harshit Bhalani portrait",
    },
  ];

  return (
    <section id="about" className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl text-slate-200 lg:text-7xl">
            Our <AuroraText>Team</AuroraText>
          </h1>
          <p className="mt-4 text-xl text-slate-300/80 max-w-3xl mx-auto">
            We're a dynamic group of individuals passionate about what we do and
            dedicated to delivering the best results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 p-6 shadow-lg transition-all duration-300 hover:bg-gray-900/80 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-slate-200">
                  {member.name}
                </h3>
                <p className="mt-2 text-blue-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
