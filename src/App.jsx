import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css";
import photo from "./assets/photo.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroLabel = useRef(null);
const heroTitle = useRef(null);
const heroDescription = useRef(null);
const scrollIndicator = useRef(null);
  const aboutTitle = useRef(null);
  const aboutText = useRef(null);
  const projectCards = useRef([]);
  const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  useEffect(() => {
    let lastScroll = 0;

    const handleNavbarScroll = () => {
      const currentScroll = window.scrollY;
      const navbar = document.querySelector(".navbar");

      if (!navbar) return;

      gsap.to(navbar, {
        y: currentScroll > lastScroll && currentScroll > 100 ? -100 : 0,
        duration: 0.4,
        ease: "power3.out",
      });

      lastScroll = currentScroll;
    };

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
    });
    window.addEventListener("scroll", handleNavbarScroll);
    const heroTimeline = gsap.timeline({
  defaults: {
    ease: "power4.out",
  },
});
const cursor = document.querySelector(".custom-cursor");
const moveCursor = (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.25,
    ease: "power3.out",
  });
};
const handleHeroMove = (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;

  gsap.to(heroTitle.current, {
    x,
    y,
    duration: 0.8,
    ease: "power3.out",
  });
};

window.addEventListener("mousemove", handleHeroMove);
window.addEventListener("mousemove", moveCursor);
heroTimeline
  .fromTo(
    heroLabel.current,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }
  );
gsap.to(heroLabel.current, {
  y: -6,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
gsap.to(scrollIndicator.current.querySelector(".arrow"), {
  y: 6,
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
heroTimeline.fromTo(
    heroTitle.current,
    {
      y: 120,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
    },
    "-=0.4"
  )
  .fromTo(
    heroDescription.current,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    },
    "-=0.5"
  )
  .fromTo(
    scrollIndicator.current,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
    },
    "-=0.4"
  );
  gsap.to(heroTitle.current, {
  y: -120,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
gsap.fromTo(
  aboutTitle.current,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: aboutTitle.current,
      start: "top 85%",
      end: "top 50%",
      scrub: 1,
    },
  }
);
gsap.fromTo(
  aboutText.current,
  {
    y: 60,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: "power3.out",

    scrollTrigger: {
      trigger: aboutText.current,
      start: "top 90%",
      end: "top 60%",
      scrub: 1,
    },
  }
);
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.fromTo(
    card,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        end: "top 65%",
        scrub: 1,
      },
    }
  );
});
gsap.utils.toArray(".technology-row").forEach((row) => {
  gsap.fromTo(
    row,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: row,
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
      },
    }
  );
});
gsap.fromTo(
  ".contact-content h2",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-content h2",
      start: "top 85%",
      end: "top 55%",
      scrub: 1,
    },
  }
);

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

   const interactiveElements = document.querySelectorAll(
  "a, .project-card, .technology-row"
);

const handleMouseEnter = () => {
  cursor.classList.add("active");
};

const handleMouseLeave = () => {
  cursor.classList.remove("active");
};

const footer = document.querySelector(".portfolio-footer");
const handleFooterEnter = () => {
  cursor.classList.add("footer-cursor");
};

const handleFooterLeave = () => {
  cursor.classList.remove("footer-cursor");
};

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);
});

footer?.addEventListener("mouseenter", handleFooterEnter);
footer?.addEventListener("mouseleave", handleFooterLeave);
const navLinks = document.querySelectorAll(".nav-links a");
const magneticLinks = document.querySelectorAll(
  ".nav-links a, .contact-email"
);

const handleNavMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);

  gsap.to(e.currentTarget, {
    x: x * 0.15,
    y: y * 0.15,
    duration: 0.3,
    ease: "power3.out",
  });
};

const handleNavLeave = (e) => {
  gsap.to(e.currentTarget, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
  });
};

magneticLinks.forEach((link) => {
  link.addEventListener("mousemove", handleNavMove);
  link.addEventListener("mouseleave", handleNavLeave);
});
return () => {
  window.removeEventListener("mousemove", moveCursor);
  window.removeEventListener("mousemove", handleHeroMove);
  window.removeEventListener("scroll", handleNavbarScroll);

  interactiveElements.forEach((element) => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  });
  footer?.removeEventListener("mouseenter", handleFooterEnter);
  footer?.removeEventListener("mouseleave", handleFooterLeave);
  magneticLinks.forEach((link) => {
  link.removeEventListener("mousemove", handleNavMove);
  link.removeEventListener("mouseleave", handleNavLeave);
});

  cancelAnimationFrame(animationFrame);
  lenis.destroy();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
  }, []);

  return (
   <main id="top" className="portfolio">
      <div className="custom-cursor"></div>

      {/* ================================
          HERO
      ================================= */}

      <section className="hero">

        <nav className="navbar">
         <a
  href="#top"
  className="logo"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  KJ
</a>

         <div className="nav-links">
  <a
    href="#about"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection("about");
    }}
  >
    About
  </a>
 <a
    href="#technology"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection("technology");
    }}
  >
    Technology
  </a>
  <a
    href="#projects"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection("projects");
    }}
  >
    Projects
  </a>

  <a
    href="#contact"
    onClick={(e) => {
      e.preventDefault();
      scrollToSection("contact");
    }}
  >
    Contact
  </a>
</div>
        </nav>

        <div className="hero-content">

         <p ref={heroLabel} className="hero-label">
  FULL-STACK DEVELOPER <span>× AI</span>
</p>

         <h1 ref={heroTitle} className="hero-title">
            KHUSHBOO
            <br />
            JOSHI<span>.</span>
          </h1>

          <div className="hero-bottom">

          <p ref={heroDescription} className="hero-description">
              I build digital experiences
              <br />
              that feel alive.
            </p>

           <a
  href="#about"
  className="scroll-indicator"
  ref={scrollIndicator}>
              <span>Scroll to explore</span>
              <span className="arrow">↓</span>
            </a>

          </div>

        </div>

      </section>
     <section id="about" className="about-section">
  <div className="about-photo">
    <div className="about-shape"></div>

    <img
  src={photo}
  alt="Khushboo Joshi"
/>
  </div>

  <div className="about-content">
    <p className="about-label">ABOUT ME</p>

    <div className="about-main">
      <h2 ref={aboutTitle}>
        I build intelligent
        <br />
        digital experiences.
      </h2>

      <p ref={aboutText}>
        I'm Khushboo, a Computer Science graduate focused on
        full-stack development, AI/ML and GenAI. I enjoy turning
        ideas into interactive products that are useful, intuitive
        and beautifully designed.
      </p>

      <p className="about-role">
        FULL-STACK DEVELOPER <span>× AI</span>
      </p>

      <div className="about-meta">
        <span>FULL-STACK DEVELOPMENT</span>
        <span>AI / GENAI</span>
        <span>CREATIVE TECHNOLOGY</span>
      </div>
    </div>
  </div>
</section>
{/* ================================
    TECHNOLOGY
================================= */}

<section id="technology" className="technology-section">

  <div className="technology-header">
    <p className="section-label">TECHNOLOGY</p>

    

    <p className="technology-intro">
      <b>I work across the Stack.</b><br></br>
      From building interfaces to integrating intelligent
      systems, I enjoy working across the entire product.
    </p>
  </div>

  <div className="technology-list">

    <div className="technology-row">
      <span>01</span>
      <h3>Frontend</h3>
      <p>React · JavaScript · HTML · CSS · Tailwind</p>
    </div>

    <div className="technology-row">
      <span>02</span>
      <h3>Backend</h3>
      <p>Node.js · Express · REST APIs</p>
    </div>

    <div className="technology-row">
      <span>03</span>
      <h3>Databases</h3>
      <p>MongoDB · MySQL · PostgreSQL</p>
    </div>

    <div className="technology-row">
      <span>04</span>
      <h3>AI / GenAI</h3>
      <p>Gemini API · AI Integration · Prompt Engineering</p>
    </div>

    <div className="technology-row">
      <span>05</span>
      <h3>Tools</h3>
      <p>Git · GitHub · Vite · Streamlit</p>
    </div>

  </div>

</section>
      {/* ================================
    PROJECTS
================================= */}

<section id="projects" className="projects-section">

  <div className="projects-header">
    <p className="section-label">SELECTED WORK</p>

    <h2>
      Things I've
      <br />
      built.
    </h2>
  </div>


  {/* PROJECT 01 */}

  <a
    className="project-card"
    href="https://plant-analysis-tool-lsn4lxb4u-joshikhushboos-projects.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View PlantScan project"
  >

    <div className="project-number">
      01
    </div>

   <div className="project-visual plantscan-visual">
  <img
    className="project-preview-image"
    src="/src/assets/plantscan-preview.svg"
    alt="PlantScan project preview"
  />
  <div className="visual-content">
    <span>01 / PLANTSCAN</span>
    <strong>Plant<br />Analysis</strong>
    <small>AI POWERED</small>
  </div>
</div>
    <div className="project-info">

      <p className="project-category">
        AI × FULL-STACK
      </p>

      <h3>
        PlantScan
      </h3>

      <p className="project-description">
        An AI-powered plant identification and analysis platform
        that helps users identify plants, detect visible health
        issues and receive personalized care recommendations.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>Gemini AI</span>
      </div>

    </div>

    <span className="project-link">
      View project ↗
    </span>

  </a>


  {/* PROJECT 02 */}

  <a
    className="project-card"
    href="https://ai-writing-assistant-hazel-six.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View AI Writing Assistant project"
  >

    <div className="project-number">
      02
    </div>

   <div className="project-visual writing-visual">
  <img
    className="project-preview-image"
    src="/src/assets/ai-writing-assistant-preview.svg"
    alt="AI Writing Assistant project preview"
  />
  <div className="writing-preview">
    <span>02 / AI WRITING</span>

    <div className="writing-lines">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>

    <strong>
      Write.
      <br />
      Refine.
    </strong>

    <small>AI ASSISTED WRITING</small>
  </div>
</div>

    <div className="project-info">

      <p className="project-category">
        GENAI × WEB APP
      </p>

      <h3>
        AI Writing
        <br />
        Assistant
      </h3>

      <p className="project-description">
        An AI-powered writing assistant that helps users improve
        their writing with intelligent suggestions, grammar and
        spell checking, rephrasing and multiple writing styles.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>Gemini AI</span>
        <span>Privy</span>
      </div>

    </div>

    <span className="project-link">
      View project ↗
    </span>

  </a>


  {/* PROJECT 03 */}

  <a
    className="project-card"
    href="https://mern-chat-omega-six.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View MERN Chat project"
  >

    <div className="project-number">
      03
    </div>

   <div className="project-visual chat-visual">
  <img
    className="project-preview-image"
    src="/src/assets/mern-chat-preview.svg"
    alt="MERN Chat project preview"
  />
  <div className="chat-preview">
    <span className="chat-label">03 / MERN CHAT</span>

    <div className="chat-window">
      <div className="chat-message left">
        Hey! 👋
      </div>

      <div className="chat-message right">
        Hey, what's up?
      </div>

      <div className="chat-message left">
        Just testing the chat.
      </div>
    </div>

    <small>REAL-TIME MESSAGING</small>
  </div>
</div>

    <div className="project-info">

      <p className="project-category">
        FULL-STACK × REAL-TIME
      </p>

      <h3>
        MERN
        <br />
        Chat
      </h3>

      <p className="project-description">
        A real-time chat application with secure authentication,
        one-to-one and group messaging, file sharing, replies,
        typing indicators and message management.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>Socket.IO</span>
        <span>JWT</span>
      </div>

    </div>

    <span className="project-link">
      View project ↗
    </span>

  </a>

</section>

      {/* ================================
          CONTACT
      ================================= */}

   <section id="contact" className="contact-section">
  <div className="contact-top">
    <p className="section-label">GET IN TOUCH</p>
    <span>04</span>
  </div>

  <div className="contact-content">
    <h2>
      Let's build
      <br />
      something <span>great.</span>
    </h2>

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=khushboojoshi486@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-email"
    >
      khushboojoshi486@gmail.com ↗
    </a>
  </div>

  <div className="contact-footer">
    <span>KHUSHBOO JOSHI</span>
    <span>FULL-STACK DEVELOPER × AI</span>
  </div>
</section>

      <footer className="portfolio-footer">
        <p className="footer-copyright">
          © 2026 Khushboo Joshi. All rights reserved.
        </p>

        <p className="footer-credit">Designed &amp; Built by Khushboo Joshi</p>

        <nav className="footer-socials" aria-label="Social media links">
          {/* Replace the LinkedIn and Instagram placeholder URLs with your profiles. */}
          <a
            href="https://github.com/joshikhushboo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/khushboojoshi2007/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/khushboo_joshi20/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={19} aria-hidden="true" />
          </a>
        </nav>
      </footer>
    </main>
  );
}

export default App;