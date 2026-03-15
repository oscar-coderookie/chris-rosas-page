import React , {useEffect, useState }from "react";
import "./SuperCarsPage.scss";
import { Carousel } from "react-responsive-carousel";


const carsImages = [
  { name: "Lamborghini Urus",
    imageURL: "https://hips.hearstapps.com/hmg-prod/images/lamborghini-urus-se-1-662915ed8958c.jpg?crop=0.793xw:0.667xh;0.142xw,0.230xh",
    prize: "1,2M"
  },
  { name: "Lamborghini Huracán",
    imageURL: "https://www.diariomotor.com/imagenes/2019/02/lamborghini-huracan-evo-spyder-0219-016.jpg?class=XL",
    prize: "1,5M"
  },
  { name: "Lamborghini Aventador",
    imageURL: "https://www.topgear.com/sites/default/files/cars-car/image/2017/01/aventador-s_green_050.jpg",
    prize: "900K"
  },
  { name: "Porsche Panamera",
    imageURL: "https://fuelcarmagazine.com/wp-content/uploads/2019/10/P19_0813_a3_rgb.jpg",
    prize: "600K"
  },
  { name: "Audi SQ7",
    imageURL: "https://uploads.audi-mediacenter.com/system/production/media/122707/images/a9812b653e470a50b69c94be646c244361878d52/A240629_web_1920.jpg?1706257200",
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
