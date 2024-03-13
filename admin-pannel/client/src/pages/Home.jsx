import { Analytics } from "../components/Analytics";

const Home = () => {
  return (
    <>
      <main>
        {/*first Section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>I am Web Developer</p>
              <h1>Welcome to Saroj's Page</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                nostrum dicta consequuntur debitis beatae, autem aut laudantium
                similique deleniti voluptas, aliquam magnam sunt nemo ipsam quo
                quae in expedita natus a repellendus?
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>

      {/*second Section */}

      <Analytics />

      {/*third Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="400"
            />
          </div>
          <div className="hero-content">
            <p>we are here to help you</p>
            <h1>Get started Today</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
              nostrum dicta consequuntur debitis beatae, autem aut laudantium
              similique deleniti voluptas, aliquam magnam sunt nemo ipsam quo
              quae in expedita natus a repellendus?
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
