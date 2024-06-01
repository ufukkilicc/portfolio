import React, { useState } from "react";
import { getAllSettings } from "../features/settingsSlice";
import { useSelector } from "react-redux";

export default function EmailSection() {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 w-full my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        {language === "tr" ? (
          <h5 className="text-xl font-bold text-white my-2">Bağlantı Kur</h5>
        ) : (
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
        )}
        {language === "tr" ? (
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            Şu anda yeni fırsatlar arıyorum, gelen kutum her zaman açık. Bir
            sorunuz olabilir veya sadece merhaba demek isteyebilirsiniz, size
            geri dönmek için elimden geleni yapacağım!
          </p>
        ) : (
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
        )}
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/ufukkilicc" target="_blank">
            <img src="/images/github-icon.svg" alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ufuk-k%C4%B1l%C4%B1%C3%A7-111365177/"
            target="_blank"
          >
            <img src="/images/linkedin-icon.svg" alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            {language === "tr"
              ? "E-posta başarıyla gönderildi!"
              : "Email sent successfully!"}
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                {language === "tr" ? "E-postanız" : "Your email"}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                {language === "tr" ? "Konu" : "Subject"}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={
                  language === "tr" ? "Sadece merhaba" : "Just saying hi"
                }
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                {language === "tr" ? "Mesaj" : "Message"}
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={
                  language === "tr"
                    ? "Hakkında konuşalım..."
                    : "Let's talk about..."
                }
              />
            </div>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
