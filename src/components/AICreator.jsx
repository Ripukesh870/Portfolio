import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMicrophoneAlt,
  FaBookOpen,
  FaImage,
  FaVideo,
  FaArrowRight,
} from "react-icons/fa";


const features = [
  {
    icon: <FaMicrophoneAlt size={40} />,
    title: "AI Voice Studio",
    desc: "Voice Clone, Text To Speech, Emotion Voice & Audio Processing",
    color: "#00E5FF",
    status: "Available",
    path: "/voice-studio",
  },
  {
    icon: <FaBookOpen size={40} />,
    title: "Story Generator",
    desc: "Generate Hindi Stories, Scripts & Dialogues using AI",
    color: "#00FF95",
    status: "Coming Soon",
    path: null,
  },
  {
    icon: <FaImage size={40} />,
    title: "Image Generator",
    desc: "Create AI Images, Thumbnails & Character Designs",
    color: "#FF9D00",
    status: "Coming Soon",
    path: null,

  },
  {
    icon: <FaVideo size={40} />,
    title: "Video Creator",
    desc: "Automatically Create AI Videos from Story",
    color: "#FF3C78",
    status: "Coming Soon",
    path: null,
  },
];

const AICreator = () => {
    const navigate = useNavigate();

  return (
    <div
      className="container-fluid text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "70px",
      }}
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center mb-5"
        >
          <span
            style={{
              color: "#00E5FF",
              letterSpacing: "4px",
              fontWeight: "600",
            }}
          >
            AI CREATOR PLATFORM
          </span>

          <h1
            className="fw-bold mt-3"
            style={{
              fontSize: "55px",
              background:
                "linear-gradient(90deg,#00E5FF,#7B61FF,#FF3C78)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Creator Studio
          </h1>

          <p
            className="mx-auto text-secondary"
            style={{
              maxWidth: "720px",
              fontSize: "18px",
            }}
          >
            One platform to generate Story, Voice Clone, Images,
            Animation and Videos powered by Artificial Intelligence.
          </p>
        </motion.div>

        <div className="row g-4">

          {features.map((item, index) => (

            <div className="col-lg-3 col-md-6" key={index}>

              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: .25 }}
                className="h-100 p-4 rounded-4"
                style={{
                  background: "rgba(25,25,35,.82)",
                  backdropFilter: "blur(18px)",
                  border: `1px solid ${item.color}`,
                  boxShadow: `0 0 25px ${item.color}20`,
                }}
              >

                <div
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: item.color,
                    color: "#111",
                    marginBottom: "22px",
                  }}
                >
                  {item.icon}
                </div>

                <h4 className="fw-bold mb-3">
                  {item.title}
                </h4>

                <p
                  className="text-secondary"
                  style={{
                    minHeight: "75px",
                  }}
                >
                  {item.desc}
                </p>

                <span
                  className={`badge ${
                    item.status === "Available"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {item.status}
                </span>

                <div className="mt-4">

                   <button
                        className="btn btn-outline-light rounded-pill px-4"
                        onClick={() => {
                            if (item.path) navigate(item.path);
                        }}
                        >
                        Open Module
                        <FaArrowRight className="ms-2" />
                    </button>
                    {/* <button
                      className="btn btn-outline-light rounded-pill px-4"
                      onClick={() => {
                        if (item.title === "AI Voice Studio") {
                          navigate("/voice-studio");
                        }
                      }}
                    >
                      Open Module
                      <FaArrowRight className="ms-2" />
                    </button> */}

                </div>

              </motion.div>

            </div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="text-center mt-5"
        >

          <div
            className="p-4 rounded-4"
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >

            <h3 className="fw-bold">
              🚀 Upcoming Automation
            </h3>

            <p className="text-secondary mb-0">
              Story → Voice → Image → Animation → Video → Export
            </p>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default AICreator;