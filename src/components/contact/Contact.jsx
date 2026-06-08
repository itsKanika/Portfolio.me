

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

// const sendEmail = async (e) => {
//   e.preventDefault();

//   console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
//   console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
//   console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

//   setLoading(true);

//   try {
//     const result = await emailjs.sendForm(
//       import.meta.env.VITE_EMAILJS_SERVICE_ID,
//       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//       form.current,
//       {
//         publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       }
//     );

//     console.log("SUCCESS!", result);
//   } catch (error) {
//     console.error("EmailJS Error:", error);
//   }
// };
//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-[10vw] text-white overflow-hidden"
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/BH.webm" type="video/webm" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* Toast */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         theme="dark"
//       />

//       {/* Content */}
//       <div className="relative z-20">
//         <h2 className="text-4xl font-bold text-center mb-10">
//           Contact Me
//           <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
//         </h2>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="max-w-2xl mx-auto flex flex-col gap-5"
//         >
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="5"
//             required
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-purple-600 p-3 rounded-md text-white hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// // import React, { useRef, useState } from "react";
// // import emailjs from "@emailjs/browser";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Contact = () => {
// //   const form = useRef(null);
// //   const [loading, setLoading] = useState(false);

// //   const sendEmail = async (e) => {
// //     e.preventDefault();

// //     if (loading) return;

// //     setLoading(true);

// //     try {
// //       console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
// //       console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
// //       console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// //       const result = await emailjs.sendForm(
// //         import.meta.env.VITE_EMAILJS_SERVICE_ID,
// //         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
// //         form.current,
// //         {
// //           publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
// //         }
// //       );

// //       console.log("SUCCESS!", result);

// //       toast.success("Message sent successfully 🚀", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         theme: "dark",
// //       });

// //       form.current?.reset();
// //     } catch (error) {
// //       console.error("EmailJS Error:", error);

// //       toast.error("Failed to send message ❌", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         theme: "dark",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className="relative py-24 px-[10vw] text-white overflow-hidden"
// //     >
// //       {/* Background Video */}
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         className="absolute inset-0 w-full h-full object-cover z-0"
// //       >
// //         <source src="/BH.webm" type="video/webm" />
// //       </video>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/60 z-10" />

// //       {/* Toast */}
// //       <ToastContainer />

// //       {/* Content */}
// //       <div className="relative z-20">
// //         <h2 className="text-4xl font-bold text-center mb-10">
// //           Contact Me
// //           <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
// //         </h2>

// //         <form
// //           ref={form}
// //           onSubmit={sendEmail}
// //           className="max-w-2xl mx-auto flex flex-col gap-5"
// //         >
// //           <input
// //             type="text"
// //             name="user_name"
// //             placeholder="Your Name"
// //             required
// //             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
// //           />

// //           <input
// //             type="email"
// //             name="user_email"
// //             placeholder="Your Email"
// //             required
// //             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
// //           />

// //           <input
// //             type="text"
// //             name="subject"
// //             placeholder="Subject"
// //             required
// //             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
// //           />

// //           <textarea
// //             name="message"
// //             placeholder="Message"
// //             rows="5"
// //             required
// //             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
// //           />

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="bg-purple-600 p-3 rounded-md text-white hover:opacity-90 transition disabled:opacity-50"
// //           >
// //             {loading ? "Sending..." : "Send Message"}
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("SUCCESS!", result);

      toast.success("Message sent successfully 🚀");

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-[10vw] text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/BH.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto flex flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 p-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;