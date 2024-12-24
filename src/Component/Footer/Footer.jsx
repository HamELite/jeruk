
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
        {/* company details sections */}
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Jeruk Mint</h1>
        <p className="text-sm max-w-[300px]">Jus jeruk mint ini sangat cocok dinikmati di pagi hari sebagai sarapan atau minuman sore yang menyegarkan. Baik saat Anda sedang bersantai di rumah atau saat berkumpul dengan teman-teman, jus ini pasti akan mencuri perhatian.
        </p>
        </div>
      {/**Navlink Section */}
      <div>
        <h1 className="text-3xl font-bold">Quick Links</h1>
        <div className="grid grid-cols-2 gap-3">
{/** first column links */}
<div>
<ul className="space-y-2">
<li>
  <a href="#">Home</a>
</li>
<li>
  <a href="#">Tentang</a>
</li>
<li>
  <a href="#">Kontak</a>
</li>
<li>
  <a href="#">Cari Buah</a>
</li>
<li>
  <a href="#">Privacy Policy</a>
</li>
  
</ul>

</div>
{/** second column links */}
<div>
<ul className="space-y-2">
<li>
  <a href="#">Home</a>
</li>
<li>
  <a href="#">Tentang</a>
</li>
<li>
  <a href="#">Kontak</a>
</li>
<li>
  <a href="#">Cari Buah</a>
</li>
<li>
  <a href="#">Privacy Policy</a>
</li>
  
</ul>

</div>
        </div>
      </div>
      
      {/**social link section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Follow Us</h1>
      <div id="kontak">
        <p>+62-882-0030-41011</p>
        <p>Semarang,Jawa Tengah</p>
      </div>
      <div className="flex items-center gap-3">
        <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
        <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
        <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
        <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
      </div>
      
      </div>
      </div>
     {/**copyright section */}
     <p className="text-white text-center mt-8 pt-8 border-t-2">Copyright &copy; 2024 Companny Name. All rights reserved</p>
      </div>
      </div>;
};

export default Footer;
