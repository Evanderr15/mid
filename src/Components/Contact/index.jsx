function Contact({ contact }) {
  return (
    <section className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-400 mb-4">Contact</h2>
      <div className="text-gray-300 space-y-2">
        <p><span className="text-green-400">Email:</span> {contact.email}</p>
        <p><span className="text-green-400">Phone:</span> {contact.phone}</p>
        <p><span className="text-green-400">LinkedIn:</span> {contact.linkedin}</p>
      </div>
    </section>
  );
}

export default Contact;