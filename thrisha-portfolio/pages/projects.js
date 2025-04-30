export default function Projects() {
    const projects = [
      {
        title: "Ayurvedic Practitioners Platform",
        tech: "Built with REST APIs, React, and TypeScript",
        image: "/images/ayurveda_step_closer.jpeg",
        desc: `A web-based platform that connects Ayurvedic practitioners with individuals interested in traditional Ayurvedic practices. It enhances the visibility of Ayurveda and provides a space for learning, discussion, and consultation.`,
      },
      {
        title: "Restaurant Management System",
        tech: "Built with React, MongoDB, Express, and NodeJs",
        image: "/images/restaurant_management.jpeg",
        desc: `Designed a dynamic restaurant management system where users can view, add, update, and delete restaurant details. Implemented RESTful APIs and used MongoDB.`,
      },
      {
        title: "Appointment Management System",
        tech: "Built with HTML, CSS, JavaScript, MongoDB, and Express",
        image: "/images/appointment_management.jpeg",
        desc: `An online system for booking doctor appointments with first-appointment discounts. Includes REST APIs and a simple browser interface.`,
      },
      {
        title: "Campus-Connect (In Progress)",
        tech: "Built with ReactJS, NodeJS, Express, and MongoDB",
        image: "/images/campus_connect.jpeg",
        desc: `A full-stack platform for students to connect over internships and collaborative projects.`,
      },
      {
        title: "Food Donation Platform (In Progress)",
        tech: "Built with Django, SQLite, HTML, CSS",
        image: "/images/food_donation.jpeg",
        desc: `Connects food donors with local NGOs. Features include post listings, admin dashboard, and expiry tracking.`,
      },
    ];
  
    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Projects</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded mb-4 w-48 h-32 object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
              <p className="text-sm text-green-400 mt-1 italic">{proj.tech}</p>
              <p className="text-gray-300 text-sm mt-3">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  