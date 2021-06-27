import working from "../images/illustration-working.svg";

const Landing = () => {
  return (
    <div className="container-fluid px-5 mt-4">
      <div className="row">
        <div className="col-md-6 p-4">
          <h2 className="display-3">More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button type="button" className="btn btn-info">
            Get Started
          </button>
        </div>
        <div className="col-md-6 p-4">
          <img src={working} alt="working" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
