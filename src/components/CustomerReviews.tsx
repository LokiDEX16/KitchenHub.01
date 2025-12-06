
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah L.',
    rating: 5,
    review: 'The food is always fresh and delicious! The delivery is super fast, and the packaging is great. I love the variety of options available.'
  },
  {
    name: 'David C.',
    rating: 5,
    review: 'Kitchen Hub has become my go-to for weeknight dinners. The quality is consistently excellent, and it saves me so much time. Highly recommend!'
  },
  {
    name: 'Emily R.',
    rating: 5,
    review: 'I was hesitant to try a ghost kitchen, but Kitchen Hub exceeded all my expectations. The flavors are incredible, and the customer service is top-notch.'
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-20 sm:py-24 bg-accent">
      <div className="container-custom px-4">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-center text-secondary mb-12 animate-fade-in-up">What Our Customers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-neutral-white p-8 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-secondary/80 mb-4">{review.review}</p>
              <p className="font-bold text-secondary">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
