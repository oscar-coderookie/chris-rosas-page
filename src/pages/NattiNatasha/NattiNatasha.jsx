import React from "react";
import { SocialBar, GalleryArtists, ArtistsBio } from "../../components";
import "./NattiNatasha.scss";

const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F77292296_281549499454120_7112610377239675043_n-705x705.jpg?alt=media&token=feeae5c2-7cc6-4cca-a675-a61a6d4430c6",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F71910469_1795357117263245_1029615508408768772_n-824x1030.jpg?alt=media&token=3b8078db-47e7-45fa-9a4e-aab38cac446a",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F72216252_238155023819300_5001751198351316981_n-824x1030.jpg?alt=media&token=943b22ac-2b79-4ccf-b5e6-540034fca876",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F72308169_125288971871246_8823984978453134966_n-564x705.jpg?alt=media&token=5a51ade3-aed3-4197-84fc-1e3f26009fc6",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F72336322_419105838761215_859062624597998637_n-566x705.jpg?alt=media&token=1b081031-0479-4de1-b737-14c7da078d62",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F72701490_3139823906059854_6346396631706354477_n-564x705.jpg?alt=media&token=5463d494-8464-49e5-b6ae-07df038c106d",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F72900359_2309876485808111_109583339599425580_n-564x705.jpg?alt=media&token=2e6f91d2-745e-4808-89d9-87698a932279",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F73387307_104533870959079_1428518892702150119_n-705x705.jpg?alt=media&token=865b9921-22c3-4f4f-a3cc-f1af1116c36c",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F73455965_433942820567977_6040788848034286508_n-564x705.jpg?alt=media&token=7fa198dd-27f7-4310-aa84-88fb194ef9f1",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/chris-rosas-web.appspot.com/o/artistas%2Fnatti-natasha%2F74905871_170079570767899_8170043166864929891_n-705x705.jpg?alt=media&token=ba5e5e00-bfc9-4294-9087-7decedb901ca",
  },
];

const NattiNatasha = () => {
  return (
    <div className="natti-block">
      <div className="natti-natasha"></div>
      <SocialBar
        igFollowers="34,8 M"
        ytFollowers="4,8 M"
        spotyFollowers="7,3 M"
        ytLink="https://www.youtube.com/channel/UCu59H8LNti6mwvcGRMge5PA"
        igLink="https://www.instagram.com/nattinatasha/?hl=es"
        spotyLink="https://open.spotify.com/artist/1GDbiv3spRmZ1XdM1jQbT7"
      />
      <GalleryArtists images={images} />
      <ArtistsBio
        name="Natti Natasha"
        text1="Natalia Alexandra Gutiérrez Batista (10 de diciembre de 1986). Nació en Santiago de los Caballeros, República Dominicana. Cantante. Conocida como Natti Natasha artista dominicana de género urbano, pop latino y  bachata; actualmente trabaja con la Discográfica Pina Records.
      El primer encuentro de Natalia con la música fue a través de la Iglesia de su comunidad, en esta la artista era parte de un grupo infantil que llevaba a cabo diferentes actividades culturales, el talento de la artista sobresalió, al  observar el talento y buen recibimiento de los dotes musicales de Natalia, sus padres deciden fomentar la pasión de su hija, razón por la cual a los 8 años la inscriben en la  Escuela de Bellas Artes de Santiago."
        text2="Con el apoyo y la tutoría de Don Omar la artista se abre cambio por medio de la compilación “Love is pain”, en este álbum sale por primera vez su colaboración con Don Omar “Dutty Love”,  sencillo con el cual ganó tres premios Billboard Latinos; en 2012 Natalia firma contrato con Orfanato Music Group compañía dirigida por su mentor, con la cual sale su primer EP en ingles con el nombre All About Me, el éxito de la cantante la lleva a concluir su contrato con Don Omar en 2015, con este hace ultima colaboración con la canción “Perdido En Tus Ojos”,  la cual que sobrepasó los 100 millones de reproducciones en Vevo, además de ganar con esta un Disco de Platino en España."
      />
    </div>
  );
};

export default NattiNatasha;
