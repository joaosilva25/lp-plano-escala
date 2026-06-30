import { Hero } from "./components/sections/Hero";
import { Video } from "./components/sections/Video";
import { Problems } from "./components/sections/Problems";
import { Solution } from "./components/sections/Solution";
import { Benefits } from "./components/sections/Benefits";
import { Selection } from "./components/sections/Selection";
import { WhatYouLearn } from "./components/sections/WhatYouLearn";
import { CtaBanner } from "./components/sections/CtaBanner";
import { Mentor } from "./components/sections/Mentor";
import { Cost } from "./components/sections/Cost";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      {/* <Video /> */}
      <Problems />
      <Solution />
      <Benefits />
      <Selection />
      <WhatYouLearn />
      <CtaBanner />
      <Mentor />
      <Cost />
      <Footer />
    </div>
  );
}
