import { Chrono } from "react-chrono";
import './Education.css'
const timelineItems = [
  {
    title: "2018",
    cardTitle: "SSC Exam",
    cardSubtitle: "Blossomm High School and Jr College, Bhayandar, Mumbai",
    cardDetailedText: [
      `Gained a basic understanding of languages, Mathematics, Science, and Social Science, enhancing problem-solving and analytical skills. 
      <br>
      <ul>
        <li>Participated in sports and cultural events.</li>
        <li>Focused on building a solid foundation in various subjects.</li>
      </ul>`,
    ],
  },
  {
    title: "2020",
    cardTitle: "HSC Exam (Science Stream)",
    cardSubtitle: "Divine Image Jr College, Bhayandar, Mumbai",
    cardDetailedText: [
      `Studied Physics, Mathematics, Chemistry, and IT, focusing on Mechanics, Organic Chemistry, and Programming (C, Java). 
      <br>
      <ul>
        <li>Participated in science fairs and events.</li>
        <li>Began exploring computer science and software development.</li>
      </ul>`,
    ],
  },
  {
    title: "2025",
    cardTitle: "Bachelor of Engineering in Computer Engineering",
    cardSubtitle: "MCT Rajiv Gandhi Institute of Technology, Andheri, Mumbai",
    cardDetailedText: [
      `Learned programming, OOP, DBMS, Data Structures, Networking, and Cloud Computing. 
      <br>
      <ul>
        <li>Gained hands-on experience in Java, Python, and C++.</li>
        <li>Worked on web and mobile projects.</li>
        <li>Participated in hackathons to enhance problem-solving skills.</li>
      </ul>`,
    ],
  },
];

export default function Education() {
  return (
    <div className="edu-container">
      <Chrono
        items={timelineItems}
        disableToolbar
        parseDetailsAsHTML
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#0d6efd",
          secondary: "#f5f5f5",
          cardBgColor: "black",
          cardForeColor: "white",
          cardSubtitleColor: "gray",
          cardTitleColor: "gray",
          titleColorActive: "#0d6efd",
          cardDetailsBackGround: "rgba(255, 255, 255, 0.1)",
          cardDetailsColor: "gray",
          iconBackgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      />
    </div>
  );
}
