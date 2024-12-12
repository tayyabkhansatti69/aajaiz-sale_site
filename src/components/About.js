import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img
                  src={`img/about/3.png`}
                  alt="image"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <h3>About Us </h3>

                <span>{`Aajiz is committed to fostering transparent and impactful giving.`}</span>
                <h3>
                  Through our platform, every donation can be tracked with a
                  unique QR code,
                </h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`so donors know exactly how their contributions are being used. We also provide e-slips and donation cards, enabling recipients to access essentials directly from our partner network, including pharmacies, fast food chains, clothing stores and many more. By collaborating with trusted brands and vendors, Aajiz ensures that recipients can obtain necessary supplies whenever they need them, building a community of accountability and support.`}
                </p>
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
export default About;
