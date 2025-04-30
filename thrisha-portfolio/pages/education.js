export default function Education() {
    const educationList = [
      {
        institution: "The National Institute of Engineering (NIE), Mysore",
        degree: "B.E. in Information Science & Engineering",
        duration: "2022–2026",
        score: "8.9 CGPA",
      },
      {
        institution: "Times PU College, Hassan",
        degree: "PUC - PCMB",
        duration: "2020–2022",
        score: "96%",
      },
      {
        institution: "Kuvempu English Medium High School",
        degree: "SSLC",
        duration: "2012–2020",
        score: "94.89%",
      },
    ];
  
    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Education</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationList.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-5 shadow-md text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-2">{edu.institution}</h2>
              <p>{edu.degree}</p>
              <p className="text-sm text-gray-400 mt-1">
                {edu.duration} &mdash; {edu.score}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  