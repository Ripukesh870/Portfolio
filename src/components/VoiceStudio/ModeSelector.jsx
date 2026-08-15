import { FaKeyboard, FaMicrophoneAlt } from "react-icons/fa";

const ModeSelector = ({ mode, setMode }) => {
  return (
    <div className="container mb-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card bg-dark border-secondary rounded-4 shadow">

            <div className="card-body p-2">

              <div className="row g-2">

                <div className="col-6">

                  <button
                    className={`btn w-100 py-3 rounded-3 ${
                      mode === "text"
                        ? "btn-primary"
                        : "btn-outline-light"
                    }`}
                    onClick={() => setMode("text")}
                  >
                    <FaKeyboard className="me-2" />

                    Text To Voice

                  </button>

                </div>

                <div className="col-6">

                  <button
                    className={`btn w-100 py-3 rounded-3 ${
                      mode === "clone"
                        ? "btn-primary"
                        : "btn-outline-light"
                    }`}
                    onClick={() => setMode("clone")}
                  >
                    <FaMicrophoneAlt className="me-2" />

                    Voice Clone

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ModeSelector;