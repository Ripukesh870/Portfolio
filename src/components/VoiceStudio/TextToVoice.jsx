import { useState } from "react";
import { FaLanguage, FaSmile, FaRocket } from "react-icons/fa";

const TextToVoice = () => {

  const [language, setLanguage] = useState("Hindi");
  const [emotion, setEmotion] = useState("Normal");
  const [speed, setSpeed] = useState(1);
  const [pitch, setPitch] = useState(0);
  const [text, setText] = useState("");

  const words = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  const estimatedTime = Math.ceil(words / 150);

  return (

    <div className="container mb-5">

      <div className="card bg-dark border-secondary shadow rounded-4">

        <div className="card-body p-4">

          <h2 className="fw-bold mb-4">

            Text To Voice

          </h2>

          <div className="row g-4">

            {/* Language */}

            <div className="col-md-6">

              <label className="form-label">

                <FaLanguage className="me-2"/>

                Language

              </label>

              <select

                className="form-select bg-dark text-white"

                value={language}

                onChange={(e)=>setLanguage(e.target.value)}

              >

                <option>Hindi</option>

                <option>English</option>

              </select>

            </div>

            {/* Emotion */}

            <div className="col-md-6">

              <label className="form-label">

                <FaSmile className="me-2"/>

                Emotion

              </label>

              <select

                className="form-select bg-dark text-white"

                value={emotion}

                onChange={(e)=>setEmotion(e.target.value)}

              >

                <option>Normal</option>
                <option>Happy</option>
                <option>Sad</option>
                <option>Angry</option>
                <option>Excited</option>
                <option>Fear</option>
                <option>Narration</option>
                <option>Whisper</option>

              </select>

            </div>

            {/* Speed */}

            <div className="col-md-6">

              <label className="form-label">

                Speed : {speed}

              </label>

              <input

                type="range"

                className="form-range"

                min="0.5"

                max="2"

                step="0.1"

                value={speed}

                onChange={(e)=>setSpeed(e.target.value)}

              />

            </div>

            {/* Pitch */}

            <div className="col-md-6">

              <label className="form-label">

                Pitch : {pitch}

              </label>

              <input

                type="range"

                className="form-range"

                min="-10"

                max="10"

                step="1"

                value={pitch}

                onChange={(e)=>setPitch(e.target.value)}

              />

            </div>

          </div>

          <hr className="my-4"/>

          <div className="d-flex justify-content-between flex-wrap mb-3">

            <span>

              Words : <b>{words}</b>

            </span>

            <span>

              Estimated Audio : <b>{estimatedTime} min</b>

            </span>

          </div>

          <textarea

            className="form-control bg-dark text-white"

            rows="10"

            placeholder="Enter your story here..."

            value={text}

            onChange={(e)=>setText(e.target.value)}

          />

          <div className="mt-4 d-grid">

            <button

              className="btn btn-primary btn-lg"

            >

              <FaRocket className="me-2"/>

              Generate Voice

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default TextToVoice;