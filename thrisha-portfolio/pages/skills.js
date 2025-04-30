const skills = {
    Languages: ["C", "Java"],
    Frameworks: ["React", "Express", "Django"],
    Databases: ["MySQL", "MongoDB", "SQLite"],
    Web: ["REST APIs", "Java Servlets", "AWT", "Swings", "HTML", "CSS", "JavaScript"],
    Tools: ["Git", "Github", "Docker", "Postman"],
  };
  
  export default function Skills() {
    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Skills</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 rounded-xl p-5 shadow-md">
              <h2 className="text-xl font-semibold text-white mb-3">{category}</h2>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="bg-green-600 text-white px-3 py-1 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  