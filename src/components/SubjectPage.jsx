import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

const topicData = {
  c: [
    {
    title: "Introduction", content: (
        <>
            <p className="text-xl mb-2">
                <strong className="text-yellow-400">C</strong> is a <span className="text-green-400 font-bold">procedural programming language</span> that allows...
            </p>
            <p className="mb-2">
                It was developed in the early 1970s and remains widely used today.
            </p>
            <ul className="list-disc list-inside text-sm pl-4">
                <li>Structured code</li>
                <li>Efficient performance</li>
                <li>Low-level memory access</li>
            </ul>
        </>
      )
    },
    { title: "Data Types", content: "C supports int, char, float, double..." },
    { title: "Loops", content: "C has for, while, and do-while loops..." },
    { title: "Functions", content: "Functions allow code reuse in C..." },
  ],
  html: [
    { title: "Introduction", content: "HTML stands for HyperText Markup Language..." },
    { title: "Elements", content: "HTML uses tags like <p>, <div>, etc..." },
    { title: "Forms", content: "HTML forms collect user input..." },
    { title: "Tables", content: "Tables are made with <table>, <tr>, and <td> tags..." },
  ],
  // Add more subjects here...
};

function SubjectPage() {
  const { subject } = useParams();
  const subjectKey = subject.toLowerCase();
  const topics = topicData[subjectKey] || [];
  const [selectedTopic, setSelectedTopic] = useState(topics[0] || {});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${subject.toUpperCase()} - ${selectedTopic.title}`, 10, 20);
    doc.setFontSize(12);
    doc.text(selectedTopic.content, 10, 40);
    doc.save(`${subject}_${selectedTopic.title}.pdf`);
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Toggle button for mobile */}
        <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
                position: "fixed",
                top: "64px",         // ~top-16
                left: "16px",        // ~left-4
                zIndex: 20,
                backgroundColor: "white", // yellow-500
                color: "black",
                padding: "0px 15px", // px-3 py-1
                borderRadius: "6px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                fontSize: "20px",
                fontWeight: "bold",
                display: "inline-block"
            }}
        >
            {sidebarOpen ? "✖" : "☰"}
        </button>


      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          display: sidebarOpen ? "block" : "none",
        }}
        className="overflow-y-auto"
      >
        <h2 className="text-xl font-bold mb-4 mt-4">{subject.toUpperCase()} Topics</h2>
        <ul className="space-y-2">
          {topics.map((topic) => (
            <motion.li
              key={topic.title}
              onClick={() => setSelectedTopic(topic)}
              className={`cursor-pointer p-2 rounded transition-colors ${
                selectedTopic.title === topic.title
                  ? "bg-yellow-500 text-black font-semibold"
                  : "hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.03 }}
            >
              {topic.title}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div style={styles.content} className="overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">{selectedTopic.title}</h2>
          <button
            onClick={downloadPDF}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
          >
            📥 Download Notes
          </button>
        </div>

        {/* Optional: Video only on introduction topics */}
        {selectedTopic.title.toLowerCase() === "introduction" && (
          <div className="mb-6">
            <iframe
              width="100%"
              height="400"
              src={
                subjectKey === "c"
                  ? "https://www.youtube.com/embed/KJgsSFOSQv0"
                  : subjectKey === "html"
                  ? "https://www.youtube.com/embed/pQN-pnXPaVg"
                  : ""
              }
              title={`${subject.toUpperCase()} Introduction`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        )}

        <p className="text-lg text-gray-300">{selectedTopic.content}</p>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "calc(100vh - 64px)",
    marginTop: "65px",
    display: "flex",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#1f2937",
    padding: "20px",
    borderRight: "1px solid #374151",
    position: "sticky",
    top: "64px",
    height: "calc(100vh - 64px)",
    overflowY: "auto",
  },
  content: {
    flex: 1,
    padding: "24px",
    maxHeight: "calc(100vh - 64px)",
    overflowY: "auto",
  },
};

export default SubjectPage;
