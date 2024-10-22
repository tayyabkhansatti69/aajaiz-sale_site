import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fatchData("/static/info.json");
      setData(data);
    }
  
    fetchData();
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`True kindness is not just in the act of giving,`}</span>
                <h3>
                  but in empowering others to rise above their challenges.
                </h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`When you extend a hand, you're not only offering help but igniting hope. Each act of generosity, no matter how small, creates ripples of change that reach far beyond what we can see. Together, we can build a world where compassion knows no boundaries, and every gift, every gesture, lifts someone toward a brighter tomorrow. Let’s make kindness our mission and uplift lives, one step at a time.`}
                </p>
              </div>
            </div>
            <div className="left">
              <div className="image">
                <img
                  src={`img/skills/3.png`}
                  alt="image"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
