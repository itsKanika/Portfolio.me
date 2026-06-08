// // import React, { useRef, useState } from "react";
// // import emailjs from "@emailjs/browser";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Contact = () => {
// //   const form = useRef();
// //   const [loading, setLoading] = useState(false);

// //   const sendEmail = (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     emailjs
// //       .sendForm(
// //         "service_ni4g2t1",
// //         "template_djeam57",
// //         form.current,
// //         "6BtUW3k6sHbKa4jqu"
// //       )
// //       .then(
// //         () => {
// //           toast.success("Message sent successfully!");
// //           form.current.reset();
// //           setLoading(false);
// //         },
// //         (error) => {
// //           console.error(error);
// //           toast.error("Failed to send message");
// //           setLoading(false);
// //         }
// //       );
// //   };
// //   return (
// //   <section
// //     id="contact"
// //     className="relative py-24 px-[10vw] text-white overflow-hidden"
// //   >
// //     {/* 🔥 Background Video */}
// //     <video
// //       autoPlay
// //       loop
// //       muted
// //       playsInline
// //       className="absolute inset-0 w-full h-full object-cover z-0"
// //     >
// //       <source src="/BH.webm" type="video/webm" />
// //     </video>

// //     {/* dark overlay for readability */}
// //     <div className="absolute inset-0 bg-black/60 z-10" />

// //     {/* content */}
// //     <div className="relative z-20">
// //       <ToastContainer />

// //       <h2 className="text-4xl font-bold text-center mb-10">
// //         Contact Me
// //         <div className="w-30 h-1 bg-purple-500 mx-auto mt-2 rounded-full"
// //         style={{ zIndex: 999999 }}
// //         ></div>
// //       </h2>

// //       <form
// //         ref={form}
// //         onSubmit={sendEmail}
// //         className="max-w-md mx-auto flex flex-col gap-4"
// //       >
// //        <form className="w-full max-w-2xl mx-auto flex flex-col gap-4">

// //   <input
// //     name="user_name"
// //     placeholder="Name"
// //     className="p-3 bg-transparent text-white border border-white/30 rounded-md 
// //     focus:outline-none focus:border-purple-500"
// //   />

// //   <input
// //     name="user_email"
// //     placeholder="Email"
// //     className="p-3 bg-transparent text-white border border-white/30 rounded-md 
// //     focus:outline-none focus:border-purple-500"
// //   />

// //   <input
// //     name="subject"
// //     placeholder="Subject"
// //     className="p-3 bg-transparent text-white border border-white/30 rounded-md 
// //     focus:outline-none focus:border-purple-500"
// //   />

// //   <textarea
// //     name="message"
// //     placeholder="Message"
// //     rows="5"
// //     className="p-3 bg-transparent text-white border border-white/30 rounded-md 
// //     focus:outline-none focus:border-purple-500"
// //   />

// //   <button
// //     type="submit"
// //     className="bg-purple-600 p-3 rounded-md text-white hover:opacity-90 transition"
// //   >
// //     Send
// //   </button>

// // </form>

       
// //       </form>
// //     </div>
// //   </section>
// // );
// // };

// // export default Contact;



// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_ni4g2t1",
//         "template_djeam57",
//         form.current,
//         "6BtUW3k6sHbKa4jqu"
//       )
//       .then(() => {
//         toast.success("Message sent successfully! 🚀", {
//           position: "top-right",
//         });

//         form.current.reset();
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Failed to send message ❌", {
//           position: "top-right",
//         });
//         setLoading(false);
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-[10vw] text-white overflow-hidden"
//     >
//       {/* VIDEO BACKGROUND */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/BH.webm" type="video/webm" />
//       </video>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* TOAST (FIXED ABOVE NAVBAR) */}
//       <div className="relative z-[9999]">
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           theme="dark"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-20">
//         <h2 className="text-4xl font-bold text-center mb-10">
//           Contact Me
//           <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
//         </h2>

//         {/* FORM (ONLY ONE FORM) */}
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="max-w-2xl mx-auto flex flex-col gap-4"
//         >
//           <input
//             name="user_name"
//             placeholder="Name"
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <input
//             name="user_email"
//             placeholder="Email"
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <input
//             name="subject"
//             placeholder="Subject"
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="5"
//             className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-purple-600 p-3 rounded-md text-white hover:opacity-90 transition mt-2"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ni4g2t1",
        "template_djeam57",
        form.current,
        "6BtUW3k6sHbKa4jqu"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀", {
          position: "top-right",
          autoClose: 3000,
        });

        form.current.reset();
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send message ❌", {
          position: "top-right",
          autoClose: 3000,
        });

        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-[10vw] text-white overflow-hidden"
    >
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/BH.webm" type="video/webm" />
      </video>

      {/* 🔥 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🔥 Toast (fixed below navbar) */}
      <div className="relative z-[9999]">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
          style={{ top: "80px" }} // pushes below navbar
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
        </h2>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto flex flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="p-3 bg-transparent text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 p-3 rounded-md text-white hover:opacity-90 transition mt-2"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;