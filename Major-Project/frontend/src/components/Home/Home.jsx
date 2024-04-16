import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "joota japani",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/1.mpeg"),
    img: "/assets/11.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "FAME TALK",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/2.mpeg"),
    img: "/assets/22.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "HOLA AMIGO",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/3.mpeg"),
    img: "/assets/33.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "4.10",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/4.mpeg"),
    img: "/assets/44.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "NGL",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/5.mpeg"),
    img: "/assets/55.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Abbu",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/6.mpeg"),
    img: "/assets/66.jpeg",
  },

  {
    id: Math.random() * Date.now(),
    title: "Saza-E-Maut",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/7.mpeg"),
    img: "/assets/77.jpeg",
  },

  {
    id: Math.random() * Date.now(),
    title: "G-YAAN",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/8.mpeg"),
    img: "/assets/88.jpeg",
  },

  {
    id: Math.random() * Date.now(),
    title: "Abbu",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/9.mpeg"),
    img: "/assets/99.jpeg",
  },

  {
    id: Math.random() * Date.now(),
    title: "Abbu",
    artist: "KR$NA",
    mp3: new Audio("/assets/mp3/10.mpeg"),
    img: "/assets/100.jpeg",
  },

];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
