export const ContactSec1 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12  mt-5"
            data-aos="fade-up"
          >
            <div
              className="py-5 text-center h-100"
              style={{ background: "#fff3ed" }}
            >
              <h3 className="fs-2">Phone :</h3>
              <p>+ (567) 1234-567-8900</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12  mt-5"
            data-aos="fade-up"
          >
            <div
              className="py-5 px-5 text-center h-100"
              style={{ background: "#fff3ed" }}
            >
              <h3 className="fs-2">Address :</h3>
              <p>The Queen's Walk, 7PB, United Kingdom</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12  mt-5"
            data-aos="fade-up"
          >
            <div
              className="py-5 text-center h-100"
              style={{ background: "#fff3ed" }}
            >
              <h3 className="fs-2">Email :</h3>
              <p>peacefulqode@gmail.com</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 mt-5"
            data-aos="fade-up"
          >
            <div
              className="py-5 text-center h-100"
              style={{ background: "#fff3ed" }}
            >
              <h3 className="fs-2">Hour :</h3>
              <p className="mx-5">Mon-Fri: 8Am - 6Pm Sat: 9Am - 4Pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactSec2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-6 col-md-10 col-sm-12 col-sm-12"
            data-aos="fade-right"
          >
            <img
              src="Assets/images/aboutSec1.png"
              alt="contact"
              className="img-fluid"
            />
          </div>
          <div
            className="col-lg-6 col-md-10 col-sm-12 col-sm-12 align-self-center"
            data-aos="fade-left"
          >
            <div className="Contact-form mt-5 mt-lg-0">
              <h2 className="fs-1">How To Find Us</h2>
              <p>
                Jewellery comes in a wide variety of styles, from simple and
                minimalist to elaborate and ornate.
              </p>

              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className=" w-100 my-3 p-3"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <input
                      type="enail"
                      placeholder="Your Email"
                      className=" w-100 my-3 p-3"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Number"
                    className=" w-100 my-3 p-3"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    cols="10"
                    rows="4"
                    className=" w-100 my-3 p-3"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="btn px-2 py-2 w-50 fs-5 text-uppercase text-white rounded-0 mt-4"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
