// // components/Resources.jsx
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import img1 from "../assets/img1.jpg"; // Use different images if needed

// const subjects = [
//   { name: "C" },
//   { name: "C++" },
//   { name: "DSA" },
//   { name: "HTML" },
//   { name: "CSS" },
//   { name: "JavaScript" },
//   { name: "React" },
// ];

// function Resources() {
//   const navigate = useNavigate();

//   return (
//     <div style={{background:"gray",marginTop:"4.5em"}}>
//         <div className="min-h-screen bg-gray-900 text-white px-6 py-12 " >
//         <motion.h1
//             className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-400"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             📘 Choose a Subject
//         </motion.h1>

//         <div className="flex flex-wrap justify-center gap-8">
//             {subjects.map((subject, index) => (
//             <motion.div
//                 key={subject.name}
//                 className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
//                 style={{ width: "300px" }}
//                 whileHover={{ y: -5 }}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 onClick={() => navigate(`/learn/${subject.name.toLowerCase()}`)}
//             >
//                 <img
//                 src={img1}
//                 alt={subject.name}
//                 style={{ width: "300px", height: "200px" }}
//                 className="rounded-t-xl object-cover"
//                 />
//                 <div className="p-4 text-center">
//                 <h2 className="text-xl font-semibold text-white tracking-wide">{subject.name}</h2>
//                 </div>
//             </motion.div>
//             ))}
//         </div>
//         </div>
//     </div>
//   );
// }

// export default Resources;




import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg"; // You can replace per subject

const subjects = [
  { name: "C" },
  { name: "CPP" },
  { name: "DSA" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
];

function Resources() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "4rem 1.5rem",
        color: "white",
      }}
    >
      <motion.h1
        style={{
          fontSize: "2.75rem",
          fontWeight: "800",
          textAlign: "center",
          color: "#facc15",
          marginBottom: "3rem",
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📘 Choose a Subject
      </motion.h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            style={{
              backgroundColor: "#1f2937",
              borderRadius: "1rem",
              width: "300px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => navigate(`/learn/${subject.name.toLowerCase()}`)}
          >
            <img
              src={img1}
              alt={subject.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "1rem", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#fff",
                  letterSpacing: "0.5px",
                }}
              >
                {subject.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
