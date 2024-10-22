import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const PrivacyPolicy = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fatchData("/static/service.json");
      setData(data);
    }
  
    fetchData();
  
    const timeoutId = setTimeout(() => {
      const VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  
    return () => clearTimeout(timeoutId);  // Cleanup the timeout on unmount
  }, []);
  

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_services">
        <div className="container">
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            <img src={data.icon.svg} alt="partner" />
                          </span>
                          <div className="title">
                            <h3>{data.title}</h3>
                            <span className="price">
                              <span>{data.price}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{data.shortDec}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <img
                            className="popup_service_image"
                            src="img/service/1.jpg"
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
