import React from "react";

const Experience = () => {
  return (
    <section className="py-10 px-4 bg-red-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">Junior Frontend Developer</h3>
          <p className="text-blue-900">Dec 2024 - present</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Assisted in building web components using React.js and Tailwind
              CSS
            </li>
            <li>
              Participated in code reviews and provided constructive feedback
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
