import React from 'react';
import './top_rated.css';

const Top = () => {
  return (
    
    <>
    <h2>Top-Rated Movies</h2>
    <div className="container marketing">
      <section className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span>
          </h2>
          <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </section>

      <hr className="featurette-divider" />

      <section className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work
            with some actual real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </section>

      <hr className="featurette-divider" />

      <section className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            And lastly, this one. <span className="text-body-secondary">Checkmate.</span>
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder content. Again, not really intended to be actually
            read, simply here to give you a better view of what this would look like with some actual content. Your content.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </section>

      <hr className="featurette-divider" />
    </div>
    </>
  );
};

export default Top;
