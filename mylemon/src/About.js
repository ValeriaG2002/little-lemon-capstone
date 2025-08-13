import ownersPhoto from './assets/Mario and Adrian a.png';

function About() {
  return (
    <div className="about-wrapper">
    <section className="about-us-section">
      <div className="about-us-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant that specializes in traditional dishes with a modern twist. We are passionate about using fresh, high-quality ingredients to create delicious and memorable meals for our guests.
          The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.

Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
      </div>
      <div className="about-us-images">
        {/* Dejamos solo una imagen */}
        <img src={ownersPhoto} alt="Little Lemon owners" />
      </div>
    </section>
    </div>
  );
}

export default About;