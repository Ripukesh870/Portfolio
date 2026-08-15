import voices from "./data/voices";
import { FaMale, FaFemale, FaCheckCircle } from "react-icons/fa";

const CharacterSection = ({ selectedVoice, setSelectedVoice }) => {

  return (

    <div className="container mb-5">

      <div className="card bg-dark border-secondary rounded-4 shadow-lg">

        <div className="card-body p-4">

          <h2 className="fw-bold mb-4">

            Choose AI Character

          </h2>

          {/* Male */}

          <h4 className="text-info mb-3">

            <FaMale className="me-2"/>

            Male Voices

          </h4>

          <div className="row g-3 mb-5">

            {

              voices.male.map((voice)=>(

                <div
                className="col-6 col-md-4 col-lg-2"
                key={voice.id}
                >

                  <div

                  className={`card h-100 text-center bg-black border-secondary character-card

                  ${selectedVoice===voice.name ? "selected-card":""}`}

                  style={{cursor:"pointer"}}

                  onClick={()=>setSelectedVoice(voice.name)}

                  >

                    <div className="card-body">

                      <div className="display-5">

                        {voice.avatar}

                      </div>

                      <h6 className="mt-3">

                        {voice.name}

                      </h6>

                      <small className="text-secondary">

                        {voice.type}

                      </small>

                      {

                        selectedVoice===voice.name &&

                        <div className="mt-2 text-success">

                          <FaCheckCircle/>

                        </div>

                      }

                    </div>

                  </div>

                </div>

              ))

            }

          </div>

          {/* Female */}

          <h4 className="text-danger mb-3">

            <FaFemale className="me-2"/>

            Female Voices

          </h4>

          <div className="row g-3">

            {

              voices.female.map((voice)=>(

                <div
                className="col-6 col-md-4 col-lg-2"
                key={voice.id}
                >

                  <div

                  className={`card h-100 text-center bg-black border-secondary character-card

                  ${selectedVoice===voice.name ? "selected-card":""}`}

                  style={{cursor:"pointer"}}

                  onClick={()=>setSelectedVoice(voice.name)}

                  >

                    <div className="card-body">

                      <div className="display-5">

                        {voice.avatar}

                      </div>

                      <h6 className="mt-3">

                        {voice.name}

                      </h6>

                      <small className="text-secondary">

                        {voice.type}

                      </small>

                      {

                        selectedVoice===voice.name &&

                        <div className="mt-2 text-success">

                          <FaCheckCircle/>

                        </div>

                      }

                    </div>

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );

};

export default CharacterSection;