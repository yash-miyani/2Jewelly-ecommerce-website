const Heading = ({ children }) => {
  return (
    <div className="heading text-center" data-aos="fade-up">
      <h2 className="my-5">{children}</h2>
    </div>
  );
};

export default Heading;
