import { useState } from "react";
import {
  FaUpload,
  FaKeyboard,
  FaMicrophone,
  FaClone
} from "react-icons/fa";

const VoiceClone = () => {

  const [sourceType, setSourceType] = useState("text");

  const [referenceVoice, setReferenceVoice] = useState(null);

  const [targetVoice, setTargetVoice] = useState(null);

  const [text, setText] = useState("");

  return (

    <div className="container mb-5">

      <div className="card bg-dark border-secondary rounded-4 shadow-lg">

        <div className="card-body p-4">

          <h2 className="fw-bold mb-4">

            Voice Clone

          </h2>

          {/* Reference Voice */}

          <label className="form-label">

            Reference Voice

          </label>

          <input

            type="file"

            accept="audio/*"

            className="form-control"

            onChange={(e)=>{

              setReferenceVoice(e.target.files[0])

            }}

          />

          {

            referenceVoice &&

            <div className="text-success mt-2">

              ✔ {referenceVoice.name}

            </div>

          }

          <hr className="my-4"/>

          {/* Source */}

          <label className="form-label fw-bold">

            Source

          </label>

          <div className="d-flex gap-3 mb-4">

            <button

              className={`btn ${
                sourceType==="text"
                ?"btn-primary"
                :"btn-outline-light"
              }`}

              onClick={()=>setSourceType("text")}

            >

              <FaKeyboard className="me-2"/>

              Text

            </button>

            <button

              className={`btn ${
                sourceType==="voice"
                ?"btn-primary"
                :"btn-outline-light"
              }`}

              onClick={()=>setSourceType("voice")}

            >

              <FaMicrophone className="me-2"/>

              Target Voice

            </button>

          </div>

          {

            sourceType==="text"

            ?

            <textarea

              rows="8"

              className="form-control bg-dark text-white"

              placeholder="Type your text..."

              value={text}

              onChange={(e)=>setText(e.target.value)}

            />

            :

            <>

            <input

              type="file"

              accept="audio/*"

              className="form-control"

              onChange={(e)=>{

                setTargetVoice(e.target.files[0])

              }}

            />

            {

              targetVoice &&

              <div className="text-success mt-2">

                ✔ {targetVoice.name}

              </div>

            }

            </>

          }

          <div className="mt-4 d-grid">

            <button className="btn btn-primary btn-lg">

              <FaClone className="me-2"/>

              Clone Voice

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default VoiceClone;