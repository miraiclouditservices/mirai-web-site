"use client";

import Link from "next/link";
import styles from "./WebDev.module.css";

export default function WebDevelopment() {
  return (
    <main className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container-xxl">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Great <strong className={styles.textGradient}>Product</strong> is<br />
                built by great <strong className={styles.textGradient}>teams</strong>
              </h1>
              <p className={styles.heroSub}>
                We help build and manage a team of world-class developers to bring your vision to life.
              </p>
              <Link href="/contact" className={styles.btnSolid}>
                Let's get started!
              </Link>
            </div>
            <div className={styles.heroImage}>
              <img src="/Hero-Wrapper__image--center.png" alt="Web Development Team" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Way of building */}
      <section className={`${styles.section} ${styles.waySection}`}>
        <div className="container-xxl">
          <div className={styles.sectionHeader}>
            <span>Way of building</span>
            <h2>Great Software</h2>
          </div>

          {/* Row 1 */}
          <div className={styles.featureRow}>
            <div className={styles.featureContent}>
              <h3>Strategic Planning & Architecture</h3>
              <p>Building robust software starts with a solid foundation. We meticulously analyze your business requirements, define user journeys, and architect a scalable framework that ensures long-term success without accumulating technical debt.</p>
              <p>Our <strong style={{color: '#F76680'}}>architecture model</strong> guarantees your product can handle exponential growth from day one.</p>
              <div className={styles.quote}>
                "MiraiCloud's architectural foresight completely transformed how our platform scales. We haven't experienced a single bottleneck since launch."
              </div>
              <div className={styles.author}>
                <img src="/dev-1.png" alt="Author" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div className={styles.authorInfo}>
                  <h5>Alex Mercer</h5>
                  <span>CTO</span>
                </div>
              </div>
            </div>
            <div className={styles.featureImage}>
              <img src="/dev-1.png" alt="Strategic Planning" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>

          {/* Row 2 */}
          <div className={`${styles.featureRow} ${styles.reverse}`}>
            <div className={styles.featureContent}>
              <h3>Agile & Iterative Development</h3>
              <p>We believe in transparency and rapid feedback. By utilizing Agile methodologies, we deliver functional increments of your software on a continuous basis. This guarantees that the product evolving in our hands perfectly aligns with the product in your vision.</p>
              <p>Our <strong style={{color: '#F76680'}}>sprint-based delivery</strong> ensures you are always in control of the roadmap.</p>
              <div className={styles.quote}>
                "Their agile delivery model meant we were always in the loop. It genuinely felt like they were an integrated part of our in-house team."
              </div>
              <div className={styles.author}>
                <img src="/dev-2.png" alt="Author" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div className={styles.authorInfo}>
                  <h5>Sarah Jenkins</h5>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
            <div className={styles.featureImage}>
               <img src="/dev-2.png" alt="Agile Development" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.featureRow}>
            <div className={styles.featureContent}>
              <h3>Rigorous Testing & Deployment</h3>
              <p>Quality isn't an afterthought—it's baked into our pipeline. From automated unit testing to comprehensive QA and seamless CI/CD deployments, we ensure your software reaches your users completely bug-free and optimized for high performance.</p>
              <p>Our <strong style={{color: '#F76680'}}>zero-downtime deployment</strong> guarantees a smooth transition for your users.</p>
              <div className={styles.quote}>
                "The release was absolutely flawless. We experienced zero downtime, and the performance metrics immediately exceeded our expectations."
              </div>
              <div className={styles.author}>
                <img src="/dev-3.png" alt="Author" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div className={styles.authorInfo}>
                  <h5>Marcus Lin</h5>
                  <span>Operations Director</span>
                </div>
              </div>
            </div>
            <div className={styles.featureImage}>
               <img src="/dev-3.png" alt="Rigorous Testing" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className={`${styles.section} ${styles.approachSection}`}>
        <div className="container-xxl">
          <div className={styles.sectionHeader}>
            <span>Our design and</span>
            <h2>development approach</h2>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} ${styles.black}`}><i className="bi bi-rocket-takeoff" /></div>
              <div className={styles.cardContent}>
                <h4>UX Driven Engineering</h4>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} ${styles.blue}`}><i className="bi bi-code-slash" /></div>
              <div className={styles.cardContent}>
                <h4>Developing Shared Understanding</h4>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} ${styles.pink}`}><i className="bi bi-shield-lock" /></div>
              <div className={styles.cardContent}>
                <h4>Proven Experience and Expertise</h4>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} ${styles.green}`}><i className="bi bi-check-circle" /></div>
              <div className={styles.cardContent}>
                <h4>Security & Intellectual Property (IP)</h4>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} ${styles.yellow}`}><i className="bi bi-clipboard-check" /></div>
              <div className={styles.cardContent}>
                <h4>Code Reviews</h4>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={`${styles.cardIcon} ${styles.purple}`}><i className="bi bi-bag-check" /></div>
              <div className={styles.cardContent}>
                <h4>Quality Assurance & Testing</h4>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className="container-xxl">
          <div className={styles.sectionHeader}>
            <span>How development</span>
            <h2>through Alcaline works</h2>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timeStep}>
              <h4><span>#1</span> Assemble the right team</h4>
              <p>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
            </div>
            <div className={styles.timeStep}>
              <h4><span>#2</span> Sprint planning</h4>
              <p>Sprint roadmap is a collective guessing game. Team members collaborate to clarify items and ensure shared understanding.</p>
            </div>
            <div className={styles.timeStep}>
              <h4><span>#3</span> Tech architecture</h4>
              <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
            </div>
            <div className={styles.timeStep}>
              <h4><span>#4</span> Standups & weekly demos</h4>
              <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
            </div>
            <div className={styles.timeStep}>
              <h4><span>#5</span> Code reviews</h4>
              <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
            </div>
            <div className={styles.timeStep}>
              <h4><span>#6</span> Iterative delivery</h4>
              <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className={styles.ctaBanner}>
            <h3>Hire the best developers and designers around!</h3>
            <Link href="/contact" className={styles.btnOrange}>
              Hire Top Developers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
