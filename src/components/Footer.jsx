/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ArrowForward from "../asset/Home/Banner/arrow-forward.svg";
import BackgroundLines from "../asset/Home/Banner/BackgrounLines.webp";
import MobileBackgroundLines from "../asset/Home/Banner/MobileBackgroundLines.webp";

function Footer() {
   // Parent stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Child reveal animation
  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="footer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background visuals */}
      <img className="footer-gridlines desktop" src={BackgroundLines} alt="Background" />
      <img className="footer-gridlines mobile" src={MobileBackgroundLines} alt="Background" />
      {/* <img className="home-banner-background-stars" src={FooterStars} alt="Background" /> */}

      <div className="footer-bg">
        <div className="footer-bg-blur" />
      </div>

      <div className="footer-bg">
        <div className="footer-bg-blur-blue" />
      </div>

      <div className="footer-black-circle">
        <div className="black-circle"></div>
      </div>

      <div className="white-bg-blur">
        <div className="white-ellips"></div>
      </div>

      {/* Title Animation */}
      <motion.h1 className="footer-heading" variants={item}>
        Got ideas?
        <br />Let’s turn them into products.
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p className="footer-tagline" variants={item}>
        Bringing research, UX, and visual craft to make your product stand out.
      </motion.p>

      {/* Button Animation */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link to="contact" className="case-btn">
          Let&apos;s Talk <img src={ArrowForward} alt="arrow" />
        </Link>
      </motion.div>

      {/* Social Icons */}
      <div className="footer-socials">
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&to=abhaynk0307@gmail.com"
        >
          {/* Gmail Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
              fill="#CBCBCB"
            />
          </svg>
        </a>

        <a target="_blank" href="https://www.behance.net/abhaynayakk">
          {/* Behance Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.754 5.6471 10.197 5.8451 10.59 6.0921C10.984 6.33943 11.279 6.68576 11.475 7.1311C11.672 7.5761 11.771 8.1211 11.771 8.7141C11.771 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.771 12.8691C12.165 13.4621 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.771 17.3221 11.377 17.7671 10.934 18.0641C10.4526 18.3821 9.9207 18.6161 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6641 8.721 8.4671C8.623 8.2701 8.475 8.1201 8.279 7.9721C8.0786 7.85954 7.86306 7.77636 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.279 16.5791 8.525 16.4811 8.721 16.3321C8.9206 16.1865 9.08808 16.0013 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7101 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291L7.197 16.7281ZM16.689 16.6781C17.0823 17.0741 17.6723 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5798 20.525 16.2828 20.623 15.9861H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5581C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6865 19.3512 16.9691 19.2169 16.295 18.9541C15.6881 18.7278 15.1472 18.3538 14.721 17.8661C14.2633 17.4114 13.9256 16.8504 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.974 11.4077 14.3244 10.8371 14.771 10.3461C15.213 9.9011 15.754 9.5061 16.344 9.2581C17.0008 8.9944 17.7023 8.85994 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.147 10.6931C22.541 11.2371 22.837 11.8801 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791M19.787 11.4851C19.443 11.1391 18.902 10.9411 18.262 10.9411C17.8867 10.9355 17.5156 11.0202 17.18 11.1881C16.885 11.3371 16.689 11.5351 16.492 11.7331C16.3098 11.9236 16.1899 12.1649 16.148 12.4251C16.098 12.6731 16.049 12.8701 16.049 13.0681H20.475C20.377 12.3261 20.131 11.8321 19.787 11.4851ZM15.459 6.2901H20.967V7.6261H15.46L15.459 6.2901Z"
              fill="#CBCBCB"
            />
          </svg>
        </a>

        <a href="https://x.com/abhaynayakk07" target="_blank">
          {/* Twitter Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.488 14.651L15.25 21H22.25L14.392 10.522L20.93 3H18.28L13.163 8.886L8.75 3H1.75L9.26 13.015L2.32 21H4.97L10.488 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"
              fill="#CBCBCB"
            />
          </svg>
        </a>

        <a href="https://www.instagram.com/nayak.abhayy/" target="_blank">
          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.667 0.072 16.947C0.132 18.224 0.333 19.095 0.63 19.86C0.936 20.648 1.347 21.319 2.014 21.986C2.681 22.652 3.35 23.065 4.14 23.37C4.906 23.666 5.776 23.869 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.667 23.985 16.947 23.928C18.224 23.868 19.095 23.666 19.86 23.37C20.648 23.064 21.319 22.652 21.986 21.986C22.652 21.319 23.065 20.651 23.37 19.86C23.666 19.095 23.869 18.224 23.928 16.947C23.988 15.667 24 15.26 24 12C24 8.74 23.985 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.319 1.347 20.651 0.935 19.86 0.63C19.095 0.333 18.224 0.131 16.947 0.072C15.667 0.012 15.26 0 12 0ZM12 2.16C15.203 2.16 15.585 2.176 16.85 2.231C18.02 2.286 18.655 2.48 19.077 2.646C19.639 2.863 20.037 3.123 20.459 3.542C20.878 3.962 21.138 4.361 21.355 4.923C21.519 5.345 21.715 5.98 21.768 7.15C21.825 8.416 21.838 8.796 21.838 12C21.838 15.204 21.823 15.585 21.764 16.85C21.703 18.02 21.508 18.655 21.343 19.077C21.119 19.639 20.864 20.037 20.444 20.459C20.025 20.878 19.62 21.138 19.064 21.355C18.644 21.519 17.999 21.715 16.829 21.768C15.555 21.825 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.823 7.111 21.764C5.94 21.703 5.295 21.508 4.875 21.343C4.306 21.119 3.915 20.864 3.496 20.444C3.075 20.025 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.999 2.176 16.829C2.131 15.569 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.405 8.598 18.162 12 18.162C15.405 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7..."
              fill="#CBCBCB"
            />
          </svg>
        </a>
      </div>
      <p className="footer-credit">© Abhay Nayak 2025</p>
    </motion.footer>
  );
}

export default Footer;
