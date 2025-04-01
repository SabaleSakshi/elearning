const Testimonials = () => {
    const testimonials = [
      {
        feedback: "This platform has completely changed the way I learn. The courses are well-structured and easy to follow.",
        name: "John Doe",
      },
      {
        feedback: "The instructors are amazing, and the interactive content keeps me engaged throughout the lessons.",
        name: "Jane Smith",
      },
      {
        feedback: "I love the flexibility of learning at my own pace. The quizzes and assignments help reinforce my knowledge.",
        name: "Robert Brown",
      },
    ];
  
    return (
      <section id="testimonials" className="py-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-500 shadow-lg rounded-lg p-6">
                <p className="text-white italic">"{testimonial.feedback}"</p>
                <h6 className="text-gray-800 font-semibold mt-4">- {testimonial.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;