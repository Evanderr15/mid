function Experience({ experience }) {
  return (
    <section className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-400 mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6 border-l-4 border-green-400 pl-4">
          <h3 className="text-xl font-medium text-white mb-1">{exp.role} at {exp.company}</h3>
          <p className="text-gray-400 mb-2">{exp.duration}</p>
          <p className="text-gray-300">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;