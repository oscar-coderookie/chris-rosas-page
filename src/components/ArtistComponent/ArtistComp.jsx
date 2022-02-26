<>
urlHero,
igFollowers,
spotyFollowers,
spotyLink,
igLink,
ytFollowers,
ytLink,
images,
name,
txt1,
txt2,
txt3,
<img src={urlHero} alt={urlHero} className="artist-hero" />
      <div className="artist-bio">
        <SocialBar
          igFollowers={igFollowers}
          ytFollowers={ytFollowers}
          spotyFollowers={spotyFollowers}
          ytLink={ytLink}
          igLink={igLink}
          spotyLink={spotyLink}
        />
        <div className="artist-gallery">
        <GalleryArtists images={images} />
        </div>
      </div>
      <ArtistsBio
        name={name}
        text1={txt1}
        text2={txt2}
        text3={txt3}
      />
</>