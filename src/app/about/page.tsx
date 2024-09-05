import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 mb-2 rounded-md py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">About Us</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Welcome to our platform! We are dedicated to providing students with the best experience by offering a space for
          learning, growth, and sharing knowledge. Our mission is to empower learners and educators alike to collaborate, 
          explore, and innovate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              We aim to create a community-driven platform where knowledge sharing and skill development thrive, helping 
              students succeed in their academic and professional journeys.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To connect students and educators, enabling them to share insights, resources, and opportunities that foster
              growth and innovation in the field of education.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Offer</h3>
            <p className="text-gray-600">
              Our platform provides access to valuable educational resources, live discussions, and a dynamic community, 
              all designed to help students excel in their learning journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;