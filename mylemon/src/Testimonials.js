
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    rating: 5,
    name: 'John Doe',
    review: 'Excellent food and service! Highly recommended.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    rating: 4,
    name: 'Jane Smith',
    review: 'Great atmosphere and delicious Mediterranean cuisine.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
  },
  {
    rating: 5,
    name: 'Marie Jones',
    review: 'The specials were fantastic, will definitely be back!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzJYpuA8GS-MNhDgSAPMCjGoM3qhnJcI0DQ&s',
  },
  {
    rating: 4,
    name: 'Mary Brown',
    review: 'A wonderful dining experience, loved the ambiance.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
  },
];

function TestimonialCard({ testimonial }) {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <FaStar key={index} color={index < testimonial.rating ? '#f4ce14' : '#ccc'} />
    ));

  return (
    <article className="testimonial-card">
      <div className="rating">{stars}</div>
      <div className="user-info">
        <img src={testimonial.image} alt={testimonial.name} />
        <p className="name">{testimonial.name}</p>
      </div>
      <p className="review">{testimonial.review}</p>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;