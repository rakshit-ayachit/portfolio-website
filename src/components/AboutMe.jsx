import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.png";

/**
 * Represents the About Me section.
 * Displays information about the user.
 * Not currently in use.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>Final year Data Science Student at MIT Manipal</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Shortened paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I'm Rakshit Ayachit, a proactive Data Science Engineering student at Manipal Institute of Technology, specializing in integrating machine learning with data processing techniques.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  My journey includes developing advanced document classification systems using OCR and automating invoice categorization with NLP and DL techniques.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Proficient in TensorFlow, Keras, and Django, I create robust applications that extract actionable insights from complex data sets, driven by a passion for innovation in data science.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Explore my portfolio to see how I apply technical expertise to solve real-world challenges in data engineering and machine learning.
                </motion.p>

              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
              <NavLink to="/resume">
                    <Button name="View Resume" />
              </NavLink>
                    </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
