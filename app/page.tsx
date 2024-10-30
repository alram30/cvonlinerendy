
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import Skills from "./components/Skills";
import "./raflyra-style.css"




export default function Gallery() {
  return (
    <section>
      <Hero/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
      <Skills/>

</section>
);
}