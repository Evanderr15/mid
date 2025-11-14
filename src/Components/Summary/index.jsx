function Summary({ summary }) {
  return (
    <section className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-400 mb-4">Summary</h2>
      <p className="text-gray-300 leading-relaxed">{summary}</p>
    </section>
  );
}

export default Summary;