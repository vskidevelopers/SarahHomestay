import HomeBanner from "./components/HomeBanner";
import ReservationForm from "./components/ReservationForm";

import AboutUsSection from "./sections/AboutUsSection";
import RoomSection from "./sections/RoomSection";

import Testimonials from "./sections/Testimonials";
import TopHotelsSection from "./sections/TopHotelsSection";

function App() {
  return (
    <>
      <div className="">
        <HomeBanner />
        <div className="w-full py-4 flex justify-center items-center absolute -mt-[19rem] md:-mt-28 ">
          <ReservationForm />
        </div>
        <AboutUsSection />
        {/* categories section */}
        <div className=" py-32">
          <TopHotelsSection />
        </div>
        {/* Featured Home */}
        <RoomSection />
        <div className="w-full">
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default App;
