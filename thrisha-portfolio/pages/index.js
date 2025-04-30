export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold">Hi, I'm Thrisha 👋</h1>
        <p className="text-lg text-gray-300 mt-2">
          Aspiring Full Stack Developer passionate about building scalable, user-friendly solutions.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-semibold text-green-400">About</h3>
          <p className="text-sm text-gray-300 mt-2">
            Final-year engineering student specializing in React, Node.js, MongoDB, and cloud technologies.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-semibold text-green-400">Projects</h3>
          <ul className="text-sm list-disc ml-4 mt-2 text-gray-300">
            <li>Ayurvedic Practitioners Platform</li>
            <li>Restaurant Management System</li>
            <li>CampusConnect</li>
            <li>Food Donation Platform</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-semibold text-green-400">Skills</h3>
          <p className="text-sm text-gray-300 mt-2">
            React, Node.js, Java, C, MongoDB, MySQL, Express, Docker, Git, HTML, CSS
          </p>
        </div>
      </section>
    </div>
  );
}
