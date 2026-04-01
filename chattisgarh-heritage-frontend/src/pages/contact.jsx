import { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post("http://localhost:8000/api/contact", formData);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-[#8b1d14] mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h2 className="text-2xl font-semibold text-[#8b1d14] mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              If you have questions, feedback, or want to contribute heritage
              information about Chhattisgarh, feel free to contact us.
            </p>

            <div className="space-y-4 text-gray-700">

              <p>📧 Email: heritageexplorer@gmail.com</p>
              <p>📞 Phone: +91 9876543210</p>
              <p>📍 Location: Bilaspur, Chhattisgarh, India</p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold text-[#8b1d14] mb-2">
                Contribute Heritage
              </h3>

              <p className="text-gray-600">
                Know about a historical site, temple, festival, tribe or
                cultural tradition? You can contribute it through our
                contribution section to help preserve the heritage of
                Chhattisgarh.
              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold text-[#8b1d14] mb-2">
                Follow Us
              </h3>

              <div className="flex gap-4 text-gray-700">

                <span>Instagram</span>
                <span>Facebook</span>
                <span>Twitter</span>

              </div>

            </div>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h2 className="text-2xl font-semibold text-[#8b1d14] mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="bg-[#8b1d14] text-white px-6 py-3 rounded-lg hover:bg-[#6f1711]"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;