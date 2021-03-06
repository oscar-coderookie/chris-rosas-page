import React from "react";
import { SocialBar, GalleryArtists, ArtistsBio } from "../../components";
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
      <GalleryArtists images={images}/>
      <ArtistsBio
      className="daddy-yankee__bio"
      name="Daddy Yankee"
      text1="A los 18 a??os, Daddy Yankee hizo su primer proyecto oficial, titulado No Mercy (1995), con el apoyo de DJ Playero, quien se convirti?? en un gran amigo y uno de los promotores de su carrera. Iniciando el nuevo milenio, Yankee incursion?? como productor; El cartel: los intocables (1997) y El cartel II: los Cangris (2001).  Sus letras se inspiraban en los ambientes conflictivos de su barrio, R??o Piedras, antigua municipalidad anexionada a la capital, San Juan de Puerto Rico. Realmente, nunca fue un joven aplicado y entregado a la escuela, antes de querer ser cantante quer??a dedicarse al b??isbol. En su tiempo libre bailaba break dance.

      Con DJ Playero aprendi?? a mezclar en estudio ritmos de reggae y de hip hop. DJ Playero sab??a que Daddy ten??a grandes aptitudes para el rap, las grabaciones caseras fueron muy populares entre los j??venes de la isla. Un tema interpretado por el joven debutante se titul?? Pers??gueme, no te detengas. Para ese momento se encontraba casado con Mireddys Gonz??lez, y de esta uni??n naci?? su primer hijo. Tuvo un problema en su barrio y fue herido con una bala en su f??mur, estuvo en recuperaci??n durante un a??o. Como consecuencia no pudo pensar m??s en ser un beisbolista. Conoci?? a Nico Canada un productor, que logr?? impulsar su carrera. Desde este momento firm?? como Daddy Yankee."
      text2=" 
      Este artista se ha caracterizado por estar abierto a recibir otras tendencias, interesado en la evoluci??n de su m??sica. Por ejemplo, con El Cartel: The Big Boss (2007) realiz?? varias mezclas de hip hop. Daddy Yankee super?? a los m??s multitudinarios artistas de los g??neros latinos tradicionales en relaci??n a la asistencia a sus conciertos, eran realmente multitudinarios. Fue contactada para ser el protagonista de la pel??cula Talento de Barrio (2008), no solo actu??, sino que tambi??n compuso la banda sonora hom??nima. El filme refleja las duras condiciones de vida de los barrios marginales puertorrique??os en que creci?? el propio Yankee.
      Lanz?? un ??lbum llamado Mundial (2010), en este se acerc?? a un g??nero muy popular en su pa??s el merengue. Con la gira de Prestige (2012) reafirm?? su posici??n en el mundo del reggaet??n y reafirm?? a sus colegas y a los fan??ticos del reggaet??n porque es el Daddy o el Cangry como muchos lo llamaban. El mencionado disco fue disco de oro, algunas de sus canciones alcanzaron la primera posici??n en las listas Billboard, como Lovumba, nominado Grammy latinos y Limbo. En 2015 se llev?? a cabo el lanzamiento de King Daddy II, aqu?? predomin?? el g??nero urbano."

      text3="En su etapa de madurez el reggaetonero no ha dudado en defender este g??nero frente a quienes lo asociaron con la delincuencia. Daddy Yankee ha desarrollado varias iniciativas altruistas como la fundaci??n Coraz??n Guerrero, dedicada a la reinserci??n de presos. En el transcurso de su carrera ha sido nombrado de muchas maneras y todas apuntan a exaltar su puesto en este g??nero relativamente nuevo. Es conocido como el ??Rey de la Improvisaci??n?? por su habilidad creativa, por esto ha ganado durante cinco a??os consecutivos el Street Jam Reggae Awards.
      
      Actualmente la carrera de Daddy Yankee ha tenido mucho ??xito y ha logrado colaboraciones con importantes cantantes como Luis Fonsi, con quien lanz?? la canci??n Despacito, recibieron varios premios. Uno de ellos fue entregado en los Premios Billboard Latino 2018; Canci??n del A??o, Canci??n del A??o Airway y Canci??n del A??o Digital fueron algunos de los reconocimientos que recibieron. Otra de los temas m??s populares actualmente es Dura. Ha sido una sensaci??n a nivel mundial."
      />
    </div>
  );
};

export default DaddyYankee;
