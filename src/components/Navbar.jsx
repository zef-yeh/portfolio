function Navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-center gap-8 py-4 z-50">
      <a href="#home" className="text-decoration-line:underline hover:text-blue-400 transition-colors">Home</a>
      <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
      <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
      <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
    </nav>
  );
}
export default Navbar;