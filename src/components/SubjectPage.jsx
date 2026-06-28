// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import jsPDF from "jspdf";

// const topicData = {
//   c: [
//     {
//     title: "Introduction", content: (
//         <>
//             <p className="text-xl mb-2">
//                 <strong className="text-yellow-400">C</strong> is a <span className="text-green-400 font-bold">procedural programming language</span> that allows...
//             </p>
//             <p className="mb-2">
//                 It was developed in the early 1970s and remains widely used today.
//             </p>
//             <ul className="list-disc list-inside text-sm pl-4">
//                 <li>Structured code</li>
//                 <li>Efficient performance</li>
//                 <li>Low-level memory access</li>
//             </ul>
//         </>
//       )
//     },
//     { title: "Data Types", content: "C supports int, char, float, double..." },
//     { title: "Loops", content: "C has for, while, and do-while loops..." },
//     { title: "Functions", content: "Functions allow code reuse in C..." },
//   ],
//   html: [
//     { title: "Introduction", content: "HTML stands for HyperText Markup Language..." },
//     { title: "Elements", content: "HTML uses tags like <p>, <div>, etc..." },
//     { title: "Forms", content: "HTML forms collect user input..." },
//     { title: "Tables", content: "Tables are made with <table>, <tr>, and <td> tags..." },
//   ],
//   // Add more subjects here...
// };

// function SubjectPage() {
//   const { subject } = useParams();
//   const subjectKey = subject.toLowerCase();
//   const topics = topicData[subjectKey] || [];
//   const [selectedTopic, setSelectedTopic] = useState(topics[0] || {});
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [previewVisible, setPreviewVisible] = useState(false);

//   // const downloadPDF = () => {
//   //   const doc = new jsPDF();
//   //   doc.setFontSize(16);
//   //   doc.text(`${subject.toUpperCase()} - ${selectedTopic.title}`, 10, 20);
//   //   doc.setFontSize(12);
//   //   doc.text(selectedTopic.content, 10, 40);
//   //   doc.save(`${subject}_${selectedTopic.title}.pdf`);
//   // };

//   const generatePDF = (action = "download") => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text(`${subject.toUpperCase()} - ${selectedTopic.title}`, 10, 20);
//     doc.setFontSize(12);

//     let textContent = "";
//     if (typeof selectedTopic.content === "string") {
//       textContent = selectedTopic.content;
//     } else {
//       textContent = "This topic contains rich content that cannot be converted directly.";
//     }

//     doc.text(textContent, 10, 40);

//     const blob = doc.output("blob");
//     const blobUrl = URL.createObjectURL(blob);

//     if (action === "preview") {
//       setPdfUrl(blobUrl);
//       setPreviewVisible(true); // Show the preview
//     } else {
//       const link = document.createElement("a");
//       link.href = blobUrl;
//       link.download = `${subject}_${selectedTopic.title}.pdf`;
//       link.click();
//     }
//   };


//   return (
//     <div style={styles.pageWrapper}>
//       {/* Toggle button for mobile */}
//         <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             style={{
//                 position: "fixed",
//                 top: "75px",         // ~top-16
//                 left: "16px",        // ~left-4
//                 zIndex: 20,
//                 backgroundColor: "white", // yellow-500
//                 color: "black",
//                 padding: "0px 15px", // px-3 py-1
//                 borderRadius: "6px",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 display: "inline-block"
//             }}
//         >
//             {sidebarOpen ? "✖" : "☰"}
//         </button>

//       {/* Sidebar */}
//       <div
//         style={{
//           ...styles.sidebar,
//           display: sidebarOpen ? "block" : "none",
//         }}
//         className="overflow-y-auto"
//       >
//         <h2 className="text-xl font-bold mb-4 mt-4">{subject.toUpperCase()} Topics</h2>
//         <ul className="space-y-2">
//           {topics.map((topic) => (
//             <motion.li
//               key={topic.title}
//               onClick={() =>{setSelectedTopic(topic); setPreviewVisible(false);}}
//               className={`cursor-pointer p-2 rounded transition-colors ${
//                 selectedTopic.title === topic.title
//                   ? "bg-yellow-500 text-black font-semibold"
//                   : "hover:bg-gray-700"
//               }`}
//               whileHover={{ scale: 1.03 }}
//             >
//               {topic.title}
//             </motion.li>
//           ))}
//         </ul>
//       </div>

//       {/* Content Area */}
//       <div style={styles.content} className="overflow-y-auto">
//         {/* <div className="flex justify-between items-center mb-4">
//           <h2 className="text-3xl font-bold">{selectedTopic.title}</h2>
//           <button
//             onClick={downloadPDF}
//             className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
//           >
//             📥 Download Notes
//           </button>
//         </div> */}

//         <div className="flex gap-4 flex-wrap mb-4">
//           <button
//             onClick={() => generatePDF("download")}
//             className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
//           >
//             📥 Download Notes
//           </button>
//           <button
//             onClick={() => generatePDF("preview")}
//             className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
//           >
//             👀 Preview Notes
//           </button>
//         </div>


//         {/* Optional: Video only on introduction topics */}
//         {/* {selectedTopic.title.toLowerCase() === "introduction" && (
//           <div className="mb-6">
//             <iframe
//               width="100%"
//               height="400"
//               src={
//                 subjectKey === "c"
//                   ? "https://www.youtube.com/embed/KJgsSFOSQv0"
//                   : subjectKey === "html"
//                   ? "https://www.youtube.com/embed/pQN-pnXPaVg"
//                   : ""
//               }
//               title={`${subject.toUpperCase()} Introduction`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="rounded-lg"
//             ></iframe>
//           </div>
//         )} */}

//         <p className="text-lg text-gray-300">{selectedTopic.content}</p>
//        {pdfUrl && previewVisible && (
//           <div className="mt-8">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-xl font-semibold">PDF Preview:</h3>
//               <button
//                 onClick={() => setPreviewVisible(false)}
//                 className="text-red-500 hover:text-red-700 font-medium"
//               >
//                 ✖ Close Preview
//               </button>
//             </div>
//             <iframe
//               src={pdfUrl}
//               width="100%"
//               height="500px"
//               title="PDF Preview"
//               style={{ border: "1px solid #ccc", borderRadius: "8px" }}
//             ></iframe>
//           </div>
//         )}


//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageWrapper: {
//     minHeight: "calc(100vh - 64px)",
//     marginTop: "65px",
//     display: "flex",
//     backgroundColor: "#0f172a",
//     color: "#ffffff",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   sidebar: {
//     width: "260px",
//     backgroundColor: "#1f2937",
//     padding: "20px",
//     borderRight: "1px solid #374151",
//     position: "sticky",
//     top: "64px",
//     height: "calc(100vh - 64px)",
//     overflowY: "auto",
//   },
//   content: {
//     flex: 1,
//     padding: "24px",
//     maxHeight: "calc(100vh - 64px)",
//     overflowY: "auto",
//   },
// };

// export default SubjectPage;






import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import cIntro from "../assets/pdf/C/Intro.pdf";

const topicData = {
  c: [
    {
      title: "Introduction",
      content: (
        <>
          <p className="text-xl mb-2">
            <strong className="text-yellow-400">C</strong> is a{" "}
            <span className="text-green-400 font-bold">procedural programming language</span> that allows...
          </p>
          <p className="mb-2">It was developed in the early 1970s and remains widely used today.</p>
          <ul className="list-disc list-inside text-sm pl-4">
            <li>Structured code</li>
            <li>Efficient performance</li>
            <li>Low-level memory access</li>
          </ul>
        </>
      ),
      pdfFile: cIntro,
    },
    {
      title: "Data Types",
      content: "C supports int, char, float, double...",
      pdfFile: "/pdfs/c_datatypes.pdf",
    },
    {
      title: "Loops",
      content: "C has for, while, and do-while loops...",
      pdfFile: "/pdfs/c_loops.pdf",
    },
    {
      title: "Functions",
      content: "Functions allow code reuse in C...",
      pdfFile: "/pdfs/c_functions.pdf",
    },
  ],
  html: [
    {
      title: "Introduction",
      content: "HTML stands for HyperText Markup Language...",
      pdfFile: "/pdfs/html_intro.pdf",
    },
    {
      title: "Elements",
      content: "HTML uses tags like <p>, <div>, etc...",
      pdfFile: "/pdfs/html_elements.pdf",
    },
    {
      title: "Forms",
      content: "HTML forms collect user input...",
      pdfFile: "/pdfs/html_forms.pdf",
    },
    {
      title: "Tables",
      content: "Tables are made with <table>, <tr>, and <td> tags...",
      pdfFile: "/pdfs/html_tables.pdf",
    },
  ],

  cpp: [
    {
      title: "Introduction to C++",
      content: "C++ is a general-purpose programming language that supports procedural, object-oriented and generic programming...",
      pdfFile: "/pdfs/cpp_intro.pdf",
    },
    {
      title: "Syntax & Variables",
      content: "Basic syntax, data types, variables, input/output using cin and cout, headers and main function...",
      pdfFile: "/pdfs/cpp_syntax_variables.pdf",
    },
    {
      title: "Functions & OOP",
      content: "Functions, pass-by-value/reference, classes, objects, constructors, destructors, inheritance, polymorphism...",
      pdfFile: "/pdfs/cpp_oop.pdf",
    },
    {
      title: "STL (Standard Template Library)",
      content: "Containers (vector, list, map), iterators, algorithms, and working with templates...",
      pdfFile: "/pdfs/cpp_stl.pdf",
    },
  ],

  dsa: [
    {
      title: "Introduction to DSA",
      content: "Data Structures and Algorithms (DSA) overview: why they matter, complexity (Big-O) fundamentals...",
      pdfFile: "/pdfs/dsa_intro.pdf",
    },
    {
      title: "Arrays & Strings",
      content: "Array operations, common string algorithms, two-pointer technique, sliding window...",
      pdfFile: "/pdfs/dsa_arrays_strings.pdf",
    },
    {
      title: "Linked Lists, Stacks, Queues",
      content: "Singly/doubly linked lists, stack and queue implementations, use-cases and complexity...",
      pdfFile: "/pdfs/dsa_lists_stacks_queues.pdf",
    },
    {
      title: "Trees & Graphs",
      content: "Binary trees, BST, tree traversals, graphs, BFS, DFS, shortest paths basics...",
      pdfFile: "/pdfs/dsa_trees_graphs.pdf",
    },
  ],

  css: [
    {
      title: "Introduction to CSS",
      content: "CSS (Cascading Style Sheets) controls presentation of HTML: selectors, properties, box model...",
      pdfFile: "/pdfs/css_intro.pdf",
    },
    {
      title: "Layout & Positioning",
      content: "Display types, position (static/relative/absolute/fixed/sticky), float, clear, z-index...",
      pdfFile: "/pdfs/css_layout_positioning.pdf",
    },
    {
      title: "Flexbox & Grid",
      content: "Modern layouts with Flexbox and CSS Grid: alignment, ordering, responsive designs...",
      pdfFile: "/pdfs/css_flexbox_grid.pdf",
    },
    {
      title: "Responsive Design & Media Queries",
      content: "Mobile-first design, breakpoints, media queries, fluid units (%, rem, vw/vh)...",
      pdfFile: "/pdfs/css_responsive.pdf",
    },
  ],

  javascript: [
    {
      title: "Introduction to JavaScript",
      content: "JavaScript is a scripting language for web pages — variables, types, operators, control flow...",
      pdfFile: "/pdfs/js_intro.pdf",
    },
    {
      title: "Functions & Scope",
      content: "Function declarations/expressions, arrow functions, hoisting, lexical scope, closures...",
      pdfFile: "/pdfs/js_functions_scope.pdf",
    },
    {
      title: "DOM & Events",
      content: "Document Object Model (DOM) manipulation, event handling, event delegation, forms and input handling...",
      pdfFile: "/pdfs/js_dom_events.pdf",
    },
    {
      title: "Asynchronous JS",
      content: "Callbacks, Promises, async/await, fetch API, handling async flows and errors...",
      pdfFile: "/pdfs/js_async.pdf",
    },
  ],

  react: [
    {
      title: "Getting Started with React",
      content: "React is a component-based UI library: JSX, components, props, state, create-react-app basics...",
      pdfFile: "/pdfs/react_getting_started.pdf",
    },
    {
      title: "Component Lifecycle & Hooks",
      content: "Class lifecycle methods and modern Hooks (useState, useEffect, useRef, useContext)...",
      pdfFile: "/pdfs/react_lifecycle_hooks.pdf",
    },
    {
      title: "Routing & State Management",
      content: "React Router for navigation, lifting state, context API, intro to Redux or other state libraries...",
      pdfFile: "/pdfs/react_routing_state.pdf",
    },
    {
      title: "Performance & Best Practices",
      content: "Memoization (React.memo, useMemo), code splitting, lazy loading, accessibility and testing basics...",
      pdfFile: "/pdfs/react_performance.pdf",
    },
  ],
  // Add more subjects...
};

function SubjectPage() {
  const { subject } = useParams();
  const subjectKey = subject.toLowerCase();
  const topics = topicData[subjectKey] || [];
  const [selectedTopic, setSelectedTopic] = useState(topics[0] || {});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(false);

  return (
    <div style={styles.pageWrapper}>
      {/* Sidebar toggle (mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: "fixed",
          top: "75px",
          left: "16px",
          zIndex: 20,
          backgroundColor: "white",
          color: "black",
          padding: "0px 15px",
          borderRadius: "6px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          fontSize: "20px",
          fontWeight: "bold",
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
              onClick={() => {
                setSelectedTopic(topic);
                setPreviewVisible(false);
              }}
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

      {/* Content area */}
      <div style={styles.content} className="overflow-y-auto">
        {/* Action buttons */}
        <div className="flex gap-4 flex-wrap mb-4">
          {selectedTopic.pdfFile && (
            <>
              <a
                href={selectedTopic.pdfFile}
                download
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
              >
                📥 Download Notes
              </a>

              <button
                onClick={() => setPreviewVisible(!previewVisible)}
                className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
              >
                {previewVisible ? "❌ Close Preview" : "👀 Preview Notes"}
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <p className="text-lg text-gray-300">{selectedTopic.content}</p>

        {/* PDF Preview */}
        {previewVisible && selectedTopic.pdfFile && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">PDF Preview:</h3>
            <iframe
              src={selectedTopic.pdfFile}
              width="100%"
              height="500px"
              title="PDF Preview"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            ></iframe>
          </div>
        )}
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
