import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Button from "../../components/Button"; // Import your Button component
import { NavLink } from "react-router-dom";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaTools, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiPython, SiJavascript, SiTensorflow, SiKeras, SiDjango, SiFlask, SiVisualstudiocode, SiJupyter, SiApachespark, SiApachehive, SiPandas, SiNumpy, SiPowerbi } from "react-icons/si";



const Resume = ({ personalDetails }) => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();
const resumeLink = "https://drive.google.com/file/d/1EAphokxaT_SFvxRaO-7yVTM7t8oDEboA/view?usp=sharing";

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <main className="resume container">
        <PageHeader title="Resume" description="Uncover my expertise" />
        
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                    <Button name="Download Resume" />
                  </a>

        <div className="resumeContent">
          <section>
            <p className="brand">{personalDetails.brand}</p>
          </section>

          {/* Education Section */}
          <section className="animate edu">
            <h3>Education</h3>
            <div className="education-item">
              <div className="education-box">
                <h4>Bachelor of Technology in Data Science Engineering</h4>
                <p>Manipal Institute of Technology, Manipal, KA</p>
                <p>2021 - Present</p>
                <p>CGPA: 8.40</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-box">
                <h4>Diploma of Higher Education</h4>
                <p>Abu Dhabi Indian School, Abu Dhabi, UAE</p>
                <p>Science Stream</p>
                <p>Grade: 95.4% in CBSE Grade 12 Examination, 2021</p>
                <p>Grade: 97.4% in CBSE Grade 10 Examination, 2019</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="animate experience">
            <h3>Experience</h3>
            <div className="experience-item">
              <div className="experience-box">
                <h4>Data Engineering Intern</h4>
                <p>Tally Solutions, Bangalore</p>

                <p>May 2024 – June 2024</p>
                <p>Engineered an Advanced Document Classification system leveraging OCR, ML, DL, and NLP techniques to accurately classify both handwritten and digital bills. Achieved an accuracy rate of 95% on a regionally diverse dataset, significantly reducing manual categorization efforts. Specialized in automating Tally invoice categorization and demonstrated a 70% reduction in processing time, enabling seamless and efficient management of invoice data.</p>
                </div>
            </div>

                <div className="experience-item">
              <div className="experience-box">

                <h4>Machine Learning Intern</h4>
                <p>Suvidha Foundation (Suvidha Mahila Mandal), Nagpur</p>
                <p>June 2023 – July 2023</p>
                <p>Implemented TensorFlow and Keras models achieving 92% accuracy in customer churn prediction, optimizing training efficiency by 40%. Utilized CNN models to enhance educational outcomes, improving intervention effectiveness by 30% through advanced analysis techniques.</p>
                </div>
            </div>
          </section>

          <section className="animate projectsSection">
  <h3>Projects & Achievements</h3>
  <ul className="projectsGrid">
    <li>
      <div className="projectIcon">
        <SiTensorflow className="projectIconSvg" />
      </div>
      <div className="projectDetails">
        <h4>Medicinal Herb Classifier</h4>
        <p>Developed a precise herb identification system using TensorFlow, securing 9th place in Smart India Hackathon 2023.</p>
      </div>
    </li>
    <li>
      <div className="projectIcon">
        <SiDjango className="projectIconSvg" />
      </div>
      <div className="projectDetails">
        <h4>Project Procrastinate: Student Resource Management System</h4>
        <p>Designed a comprehensive tool for student support with AI chatbot, course management, and secure uploads.</p>
      </div>
    </li>
    <li>
      <div className="projectIcon">
        <SiPython className="projectIconSvg" />
      </div>
      <div className="projectDetails">
        <h4>Disk Management System using Python</h4>
        <p>Secured 2nd runner-up in Tally Code Brewers 2023, featuring efficient file organization and real-time analysis.</p>
      </div>
    </li>
    <li>
      <div className="projectIcon">
        <SiJavascript className="projectIconSvg" />
      </div>
      <div className="projectDetails">
        <h4>Travelling Salesman Problem Solver</h4>
        <p>Implemented an optimization solution for route planning, demonstrating efficient pathfinding algorithms.</p>
      </div>
    </li>
  </ul>
  <div className="viewPortfolioBtnContainer">
    <NavLink to="/portfolio" className="viewPortfolioBtn">
      <Button name="View Projects in detail" />
    </NavLink>
  </div>
</section>

          {/* Technical Skills Section */}
          {/* Technical Skills Section */}
          {/* Technical Skills Section */}
          <section className="animate technicalSkills">
            <h3>Technical Skills</h3>
            <div className="skillsBox">
              <div className="skillsCategory">
                <h4>Languages</h4>
                <div className="skillsIcons">
                  <div><FaJava /> Java</div>
                  <div><FaPython /> Python</div>
                  <div><FaHtml5 /> HTML</div>
                  <div><FaCss3Alt /> CSS</div>
                  <div><FaJs /> JavaScript</div>
                </div>
              </div>
              <div className="skillsCategory">
                <h4>Frameworks & Libraries</h4>
                <div className="skillsIcons">
                  <div><SiTensorflow /> TensorFlow</div>
                  <div><SiKeras /> Keras</div>
                  <div><SiDjango /> Django</div>
                  <div><SiFlask /> Flask</div>
                  <div><FaReact /> React</div>
                </div>
              </div>
              <div className="skillsCategory">
                <h4>Tools</h4>
                <div className="skillsIcons">
                  <div><FaGit /> Git</div>
                  <div><SiVisualstudiocode /> VS Code</div>
                  <div><SiJupyter /> Jupyter Notebook</div>
                  <div><FaTools /> PyCharm</div>
                </div>
              </div>
              <div className="skillsCategory">
                <h4>Big Data Technologies</h4>
                <div className="skillsIcons">
                  <div><FaDatabase /> Hadoop</div>
                  <div><SiApachespark /> Spark</div>
                  <div><SiApachehive /> Hive</div>
                  <div><FaDatabase /> Pig</div>
                </div>
              </div>
              <div className="skillsCategory">
                <h4>Data Analysis & Visualization</h4>
                <div className="skillsIcons">
                  <div><SiPandas /> Pandas</div>
                  <div><SiNumpy /> NumPy</div>
                  <div><FaChartBar /> Matplotlib</div>
                  <div><FaChartBar /> Seaborn</div>
                  <div><SiPowerbi /> PowerBI</div>
                </div>
              </div>
            </div>
          </section>{/* Certifications Section */}


          <section className="certifications animate">
  <h3>Certifications</h3>
  <ul>
    <li>
      <a href="https://www.coursera.org/account/accomplishments/specialization/JW7ZUG3J3XHC" target="_blank" rel="noopener noreferrer">
        <div className="certification-item">
          <h4>Introduction to Data Science Specialization</h4>
          <p>IBM on Coursera</p>
        </div>
      </a>
    </li>
    <li>
      <a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs104/Course/NPTEL23CS104S54930005720319971.pdf" target="_blank" rel="noopener noreferrer">
        <div className="certification-item">
          <h4>Applied Accelerated Artificial Intelligence</h4>
          <p>NPTEL course by IIT Palakkad</p>
        </div>
      </a>
    </li>
  </ul>
</section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resume;
