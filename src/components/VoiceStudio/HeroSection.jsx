import { FaMicrophoneAlt, FaRobot } from "react-icons/fa";

const HeroSection = () => {

  return (

    <div className="container mb-5">

      <div className="row align-items-center gy-4">

        <div className="col-lg-8">

          <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">

            AI Creator Platform

          </span>

          <h1 className="display-3 fw-bold">

            <span className="text-info">

              AI Voice

            </span>

            <span className="text-primary">

              {" "}Studio

            </span>

          </h1>

          <p className="text-secondary fs-4 mt-3">

            Create AI Voices, Voice Clone and Emotional Speech
            for YouTube, Animation and Professional Content.

          </p>

        </div>

        <div className="col-lg-4">

          <div className="card bg-dark border-secondary shadow-lg rounded-4">

            <div className="card-body">

              <h4>

                <FaRobot className="text-info me-2"/>

                AI Engine

              </h4>

              <h5 className="text-success mt-4">

                ● Ready

              </h5>

              <p className="text-light">

                Google AI + Voice Clone

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default HeroSection;