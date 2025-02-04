import React from "react";

const skillsList = [
  "React.js",
  "JavaScript",
  "CSS",
  "Tailwind CSS",
  "HTML",
  "Git",
  "Redux",
];

const Skills = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-center bg-red-600">
        Skills
      </h2>
      <ul className="list-decimal pl-5 space-y-2 bg-yellow-100 text-red-900 font-bold">
        {skillsList.map((skill, index) => (
          <li key={index} className="text-lg">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
