import React from 'react';

const projects = [
  { id: 1, title: 'Cardboard Spaceship' },
  // Add more projects here
];

export const Box1 = () => {
  return (
    <section className="px-4 sm:px-16 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Featured Projects</h1>
      <div className="border-t-2 border-zinc-700">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center py-4">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-4"></span>
            <h2 className="text-xl font-semibold">{project.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};
