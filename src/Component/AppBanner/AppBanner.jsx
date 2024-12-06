
import bannerImg from "../../assets/website/banner.jpg";
import PlayStoreImg from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";


const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundPosition: "center",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
width: "100%",
height: "100%"

};

const AppBanner = () => {
  return <div className="container my-14">
    <div style={bannerStyle} className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
      <div>
      <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto">
        <h1 className="text-2xl text-center sm:text-4xl font-semibold">Download the App</h1>
      <p data-aos="fade-up"
      data-aos-delay="300"
      className="text-center sm:px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, pariatur incidunt sed iure enim nesciunt corporis, quis cum perspiciatis quisquam adipisci dolore quod molestias nostrum dolorem vitae magnam placeat delectus!
      </p>
      {/* images link */}
<div className="flex justify-center items-center gap-4">
  <a href="#">
    <img src={PlayStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
  </a>
  <a href="#">
    <img src={AppStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
  </a>
</div>


      </div>
      </div>
    </div>
  </div>;
};

export default AppBanner;
