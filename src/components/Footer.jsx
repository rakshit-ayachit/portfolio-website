import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // State to hold GitHub information
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // Fetch GitHub repository information
    fetch("https://github.com/rakshit-ayachit")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  // Variants for button animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 1,
    },
  };

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* GitHub repository link */}
      <a className="footer-link" href="https://github.com/rakshit-ayachit">
        <span>
          <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked />
          {gitHubInfo.forks} - Give this project a star!
        </span>
        <p>
          <span>▷</span> Designed and built by Rakshit Ayachit &copy; {currentYear}
        </p>
        <p>All views and work are my own</p>
      </a>

      {/* Buy Me A Coffee link */}
      <motion.a
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{ ease: "easeInOut" }}
      >
        <motion.img
          style={{
            height: "40px",
            scale: 1,
            width: "auto",
            marginTop: "10px",
          }}
          variants={buttonVariants}
          transition={{ ease: "easeInOut" }}
        />
      </motion.a>
    </footer>
  );
};

export default Footer;
