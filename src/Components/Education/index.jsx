function Education({ education }) {
  return (
    <section className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-400 mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
          <p className="text-gray-400">{edu.school}, {edu.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;