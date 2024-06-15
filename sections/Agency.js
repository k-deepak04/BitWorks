import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="WE ARE YOUR ONE-STOP SOLUTION" />
            <br />
            <br />
            <Title
              title="Bitworks: The One-Stop Solution for All Your Digital Needs"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your ideas into powerful digital products since 2020" />
              <p className="desc-p">
                We understand the challenges businesses face in today's digital age. A strong online presence is no longer optional, it's essential for success. That's where we come in. At Bitworks, we're a team of passionate software experts dedicated to helping businesses of all sizes achieve their digital goals.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">4+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Successful projects completed</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">2+</h1>
                  <h3>Industry awards received</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img src="/images/s1.jpg" alt="Img" className="round" width="100%" height="100%" />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img src="/images/s4.jpg" alt="Img" className="round" width="100%" height="100%" />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Mission" />
              <br />
              <p className="misson-p">
                Our mission is to empower businesses through innovative software solutions. We believe that technology should be a powerful tool to solve problems, improve efficiency, and drive measurable growth for our clients. We are passionate about helping you achieve your full potential in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
