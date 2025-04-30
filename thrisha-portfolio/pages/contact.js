export default function Contact() {
    return (
      <section className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Contact Me</h1>
        <form
          action="https://formsubmit.co/thrishagowdabl2005@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Prevent spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://your-website.com/thanks" />
  
          <div>
            <label className="block text-white">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>
  
          <div>
            <label className="block text-white">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>
  
          <div>
            <label className="block text-white">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="bg-green-500 text-black px-6 py-2 rounded hover:bg-green-400 transition"
          >
            Chat
          </button>
        </form>
      </section>
    );
  }
  