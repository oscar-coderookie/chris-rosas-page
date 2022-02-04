import React from "react";
import { SocialBar, GalleryArtists } from "../../components";
import "./DaddyYankee.scss";

const images = [
  {
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F49526027_891848041206688_3830372954828196660_n-824x1030.jpg?alt=media&token=a4469f4d-1435-492b-b5f4-4452b8c5878f"
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F20759053_1940812436194343_8193692729021038592_n-823x1030.jpg?alt=media&token=ff4c3392-f2cf-4995-9c71-0d39c93caf3f"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F40083440_481888528956694_276583818034033985_n-1030x1030.jpg?alt=media&token=db47b62c-8215-4645-95f5-917d58a25683"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F52847535_154697712212274_3725693517783449125_n-825x1030.jpg?alt=media&token=8762e57e-e0ce-4903-8da3-a92ff70f15a6"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F49854164_2069419950014672_9151986397733790384_n-944x1030.jpg?alt=media&token=cc431c13-ad2e-402d-b7c8-1a087f20589e"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F74801823_120800006058907_6310755547999264405_n-705x705.jpg?alt=media&token=618a19a8-bf3c-4502-9502-12474eee0224"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F74536469_442161353119127_5117533859139601328_n-825x1030.jpg?alt=media&token=41c44ef2-e705-4c4a-a02e-35f0e203b850"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F74891086_554308905407051_6717204841403463196_n-705x705.jpg?alt=media&token=9ed6ec09-609e-44a6-97cd-c1f2e64f0790"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F75214711_575111276598901_203129582017561212_n-564x705.jpg?alt=media&token=fa02dfc8-a6c5-4808-9c28-fcef5c345bd6"
  },
  { 
    original: "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fdaddy-yankee%2F75640841_2674343782659971_8025759995263852029_n-564x705.jpg?alt=media&token=78125be5-a029-48b6-81cf-fb436cc52c2c"
  },

]

const DaddyYankee = () => {
  return (
    <div className="daddy">
      <div className="daddy-yankee"></div>
      <SocialBar
        igFollowers="44 M"
        ytFollowers="33,9 M"
        spotyFollowers="15,6 M"
        ytLink="https://www.youtube.com/channel/UC9TO_oo4c_LrOiKNaY6aysA"
        igLink="https://www.instagram.com/daddyyankee/?hl=es"
        spotyLink="https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"

      />
      <GalleryArtists images={images} />
    </div>
  );
};

export default DaddyYankee;
