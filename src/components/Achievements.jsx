import CountUp from 'react-countup';
import './Achievements.css'; // We'll create this CSS file next

function Achievements() {
  return (
    <section className="achievements-section">
      <div className="achievement-item">
        <h2><CountUp end={10} duration={3} enableScrollSpy />+</h2>
        <p>Projects</p>
      </div>
      <div className="achievement-item">
        <h2><CountUp end={20} duration={3} enableScrollSpy />+</h2>
        <p>Certificates</p>
      </div>
      <div className="achievement-item">
        <h2><CountUp end={5} duration={3} enableScrollSpy />+</h2>
        <p>Research Papers</p>
      </div>
    </section>
  );
}

export default Achievements;