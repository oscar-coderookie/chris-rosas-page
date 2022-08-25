import React , {useEffect, useState }from "react";
import "./SuperCarsPage.scss";
import { Carousel } from "react-responsive-carousel";


const carsImages = [
  { name: "Lamborghini Urus",
    imageURL: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2021/09_21/gallery_gateway_urus_01.jpg",
    prize: "1,2M"
  },
  { name: "Lamborghini Huracán",
    imageURL: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo_rwd_spyder/2021/06_22/Gallery/rwd_spyder_03.jpg ",
    prize: "1,5M"
  },
  { name: "Lamborghini Aventador",
    imageURL: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/2021/restyle_03_05/gallery/aven_s_03.jpg",
    prize: "900K"
  },
  { name: "Porsche Panamera",
    imageURL: "https://files.porsche.com/filestore/image/multimedia/none/model-series-g2-2nd-panamera-intro/preview/a0519320-d30a-11ea-80cc-005056bbdc38;sP;twebp/porsche-preview.webp",
    prize: "600K"
  },
  { name: "Audi SQ7",
    imageURL: "https://www.audi.es/dam/nemo/es/modelos/q7/SQ7_eos_2020/Audi_frontal_sq7_1920x1080_230719-2.png?imwidth=1439",
    prize: "600K"
  },
  { name: "TESLA Model X",
    imageURL: "https://tesla-cdn.thron.com/delivery/public/image/tesla/8c26f779-11e5-4cfc-bd7c-dcd03b18ff88/bvlatuR/std/4096x2561/Model-X-Main-Hero-Desktop-LHD",
    prize: "600K"
  },
]

const carsmini = [
  { name: "Lamborghini Urus",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/coches%2Fmobile%2Furus.png?alt=media&token=a5c2e6ed-1178-4f85-ae07-bc31c3891d58",
    prize: "1,2M"
  },
  { name: "Lamborghini Huracán",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/coches%2Fmobile%2FHuracan.png?alt=media&token=12309b5c-1293-4d8a-8e35-b3455710f9b2",
    prize: "1,5M"
  },
  { name: "Lamborghini Aventador",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/coches%2Fmobile%2Faventador.png?alt=media&token=067039a9-75db-4a58-9cc6-1f2035eb2f18",
    prize: "900K"
  },
  { name: "Porsche Panamera",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/coches%2Fmobile%2Fpanamera.png?alt=media&token=8afe3d74-ff99-43bb-aeee-97bcb9d00d93",
    prize: "600K"
  },
  { name: "Audi SQ7",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/coches%2Fmobile%2Fsq7.png?alt=media&token=3f630758-5e92-4563-b79c-991adc184e70",
    prize: "600K"
  },
  { name: "TESLA Model X",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/coches%2Fmobile%2Ftesla-model-x.png?alt=media&token=8c1a1ec1-e2e6-4497-839b-cab946a9b957"
  },
]
const SuperCarsPage = () => {
  const [breakpoint, setBreakpoint] = useState(true);

  const handleWindowResize = () => {
    if (window.innerWidth > 480) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };


  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 480) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="supercars-block">
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        renderThumbs={false}
        selectedItem={1}
      >
      { breakpoint ? carsImages.map((car, index) => {
        return (
          <div className="car-slide" key={index}>
            <img className="car-image" src={car.imageURL} alt={car.name} />
            <h2 className="car-name">{car.name}</h2>
          </div>
        );
      }): null}
      { !breakpoint ? carsmini.map((car, index) => {
        return (
          <div className="car-slide" key={index}>
            <img className="car-image" src={car.imageURL} alt={car.name} />
            <h2 className="car-name">{car.name}</h2>
          </div>
        );
      }): null}
      </Carousel>
    </div>
  );
};

export default SuperCarsPage;
