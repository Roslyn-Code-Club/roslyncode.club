import { useRef, useState, useEffect, useCallback } from "react";
import CarouselItem from "./CarouselItem";
import projectsData from "../../../data/projectsData";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();
  const projectsList = projectsData[0].projects;

  const startSlideTimer = useCallback(() => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < projectsList.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  });

  const stopSlideTimer = () => {
    clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startSlideTimer();

    return () => clearInterval(slideInterval.current);
  }, [startSlideTimer]);
  let sortedList = projectsList.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="my-0 mx-auto overflow-hidden relative w-full">
      <div
        className="whitespace-nowrap transition-[5s] ease-in-out"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {sortedList.map((e, key) => (
          <CarouselItem
            autoplay
            img={e.img}
            projectName={e.name}
            creators={e.creators}
            link={e.demo}
            key={key}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
    </div>
  );
}
