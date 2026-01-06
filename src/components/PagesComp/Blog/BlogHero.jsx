import React from "react";

const BlogHero = () => {
  return (
    <div className="text-center mb-16">
      <h2
        data-aos="fade-up"
        className="text-[12px] uppercase tracking-[0.5em] font-black text-primary mb-4"
      >
        Celestial Journal
      </h2>
      <h3
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-4xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-tight"
      >
        Latest <span className="text-primary">Cosmic Insights</span>
      </h3>
    </div>
  );
};

export default BlogHero;
