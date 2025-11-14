function Header({ name, title, image }) {
  return (
    <header className="text-center mb-8 bg-black text-white py-12">
      <div className="flex items-center justify-center space-x-6">
        <img 
          src={image || "/assets/ander.jpg"} 
          alt="assets" 
          className="w-60 h-87 border-1 border-green-600 "
        />
        <div>
          <h1 className="text-5xl font-bold text-green-400 mb-2">{name}</h1>
          <p className="text-xl text-gray-300">{title}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
