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

                <span>{`We are a digital charity organization`}</span>
                <h3>dedicated to bridging the </h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`gap donors and recipients in need.Through our innovative QR code-based system, donors—whether individuals or companies—can provide essential support to those affected by poverty, disaster, or hardship. Partners, including brands and vendors like pharmacies, fast food chains, and clothing stores, accept these QR code cards, allowing recipients to use them for specific needs. Our mission is to simplify giving and ensure that every donation reaches those who need it most, in the most efficient and impactful way possible.`}
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
