/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Cockpit from "../components/Cockpit";
import ParticleBackground from "./ParticleBackground";
// import Map from "../components/map/Map";

function Home() {
  return (
    <div>
      <Cockpit />
      <ParticleBackground />
      {/* <Map /> */}
    </div>
  );
}
export default Home;
