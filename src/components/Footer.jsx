const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">E-Learning Platform</p>
          <p className="text-sm text-gray-400">Empowering learners worldwide</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-400 text-xl">
            <i className="fab fa-facebook-f cursor-pointer hover:text-blue-500"></i>
            <i className="fab fa-twitter cursor-pointer hover:text-blue-400"></i>
            <i className="fab fa-linkedin-in cursor-pointer hover:text-blue-600"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-pink-500"></i>
          </div>
          <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  