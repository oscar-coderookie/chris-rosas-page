import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {db} from "./../../config/firebase";
import { doc, getDoc } from "firebase/firestore/lite";


const ArtistComp = () => {
  const [dataArtist, setDataArtist] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const fetchArtist = async () => {
      const docRef = doc(db, "artistas", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
       return setDataArtist(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchArtist();
  }, []);

  return (
    <div>Hello</div>
  )
}

export default ArtistComp