// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="py-10 flex flex-col">
      <h3 className={styles.sectionHeadText}>My Skills</h3>
      {/* 
      <div className="mt-16 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}

      <div className="mt-16 flex flex-wrap gap-12">
        {technologies.map((technology) => (
          <div className="block-container w-28 h-28" key={technology.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <LazyLoadImage src={technology.icon}
                width={70} height={70}
                alt={technology.name}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SectionWrapper(Tech, "");
