function Navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-center gap-8 py-4 z-50">
      <a href="#home" className="text-decoration-line:underline hover:text-blue-400 transition-colors">home</a>
      <a href="#stuff" className="hover:text-blue-400 transition-colors">stuff</a>
      {/* <a href="#projects" className="hover:text-blue-400 transition-colors">projects</a> */}
      <a href="#contact" className="hover:text-blue-400 transition-colors">contact</a>
    </nav>
  );
}
export default Navbar;