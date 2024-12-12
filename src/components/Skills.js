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
                <span>{`True Impact through kindness`}</span>
                <h3>
                  True kindness means empowering others with thoughtful,
                  transparent support.
                </h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`With Aajiz, every donation is directed where it’s needed most, with clear tracking and accountability. Your generosity provides real-time impact for recipients, helping them access essential supplies through our network of partnered brands and vendors.
`}
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
