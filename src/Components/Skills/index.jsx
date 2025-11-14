function Skills({ skills }) {
  return (
    <section className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-400 mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="w-6 h-6 mr-3 rounded-sm border border-green-700"
            />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
