import "./style/style.css";
import CarouselBox from "./Components/CarouselBox";
import customerPhoto from "./img/customer-photo.svg";
import logo from "./img/logo.svg";

function App() {
  return (
    <html>
      <body>
        <link rel="stylesheet" href="style/style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <div className="nav-logo">
                        <a href="#"><img className="logo" src={logo} alt="logo"/></a>
                         <a className="logo-text" href="#"><h1>CTRLz</h1></a>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-list__item"><a className="nav-list__link" href="#reviews">Reviews</a></li>
                        <li className="nav-list__item"><a className="nav-list__link" href="#projects">Projects</a></li>
                        <li className="nav-list__item"><a className="nav-list__link" href="#servises">Servises</a></li>
                        <li className="nav-list__item"><a className="nav-list__link" href="#contacts">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="block-1">
            <div className="descriptin-block__1">
                <p>Professional demolition of buildings.</p>
                <p>You build - we break.</p>
            </div>
            <div className="subdescription-block__1_row">
               <div className="subdescription-block__1">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus unde harum maiores ab architecto beatae fugit, voluptatum ullam corporis. Ratione dolorem eum deleniti. Est magnam corrupti dignissimos perspiciatis, unde quas!</p>
               </div>
            </div>
        </div>
        <div className="servises">
            <div className="servises-container">
                <div className="servises-header">
                   <a name = "servises"> <p>Our services</p></a>
                </div>
                <div className="servises-card-row">
                    <div className="services-card">
                        <div className="service-name">
                            <p>Dismantling of structures</p>
                        </div>
                        <div className="price">
                            <p>Price (rub/m3)</p>
                        </div>
                        <div className="cost">
                            <p>500</p>
                        </div>
                        <button className="button-buy">
                            Buy
                        </button>
                    </div>
                    <div className="services-card">
                        <div className="service-name">
                            <p>Analysis of dilapidated buildings</p>
                        </div>
                        <div className="price">
                            <p>Price (rub/m3)</p>
                        </div>
                        <div className="cost">
                            <p>400</p>
                        </div>
                        <button className="button-buy">
                            Buy
                        </button>
                    </div>
                    <div className="services-card">
                        <div className="service-name">
                            <p>Roof dismantling</p>
                        </div>
                        <div className="price">
                            <p>Price (rub/m3)</p>
                        </div>
                        <div className="cost">
                            <p>600</p>
                        </div>
                        <button className="button-buy">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <a name = "projects"><p>Examples of completed work</p></a>
                </div>
                <div className="slider-row">
                    <div className="project-slider">
                    <CarouselBox/>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="reviews-container">
                <div className="reviews-header">
                    <a  name = "reviews"><p>Reviews</p></a>
                </div>
                <div className="reviews-card__row">
                    <div className="reviews-card">
                        <div className="customer-photo">
                            <img src={customerPhoto} alt="customer-photo"/>
                        </div>
                        <div className="review-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam voluptates? Earum, harum vitae doloremque, nam odit blanditiis ducimus sequi, dolorum assumenda velit pariatur. Nulla, assumenda nisi! Error, nihil vel!</p>
                        </div>
                    </div>
                    <div className="reviews-card">
                        <div className="customer-photo">
                            <img src={customerPhoto} alt="customer-photo"/>
                        </div>
                        <div className="review-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam voluptates? Earum, harum vitae doloremque, nam odit blanditiis ducimus sequi, dolorum assumenda velit pariatur. Nulla, assumenda nisi! Error, nihil vel!</p>
                        </div>
                    </div>
                    <div className="reviews-card">
                        <div className="customer-photo">
                            <img src={customerPhoto} alt="customer-photo"/>
                        </div>
                        <div className="review-text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam voluptates? Earum, harum vitae doloremque, nam odit blanditiis ducimus sequi, dolorum assumenda velit pariatur. Nulla, assumenda nisi! Error, nihil vel!</p>
                        </div>
                    </div>
                </div>
                <div className="reviews-toggle">
                    <button className="reviews-toggle__item">
                    </button>
                    <button className="reviews-toggle__item">
                    </button>
                    <button className="reviews-toggle__item">
                    </button>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-row">
                <form className="contacts-block">
                    <div className="customer-contacts">
                        <div className="customer-contacts__description">
                           <a name = "contacts"><p>Your name</p></a>
                        </div>
                        <input className="input_contacts" type="text"/>
                    </div>
                    <div className="customer-contacts">
                        <div className="customer-contacts__description">
                            <p>Your Email</p>
                        </div>
                        <input className="input_contacts" type="text"/>
                    </div>
                    <div className="customer-contacts">
                        <div className="customer-contacts__description">
                            <p>Your phone</p>
                        </div>
                        <input className="input_contacts" type="text"/>
                    </div>
                    <button className="contacts-button">
                        Send
                    </button>
                </form>
                <div className="company-phone">
                    <div className="nav-logo">
                        <a href="#"><img className="logo" src={logo} alt="logo"/></a>
                         <a className="logo-text" href="#"><h1>CTRLz</h1></a>
                    </div>
                    <div className="footer-logo__descriptions">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis suscipit eos fugiat totam, maxime voluptas labore quo quisquam dicta ducimus quam quis nam delectus debitis magni nostrum architecto aliquid?</p>
                    </div>
                    <div className="footer-number__company">
                        <p>(47) 3084-4400</p>
                    </div>
                    <div className="footer-number__descriptions">
                        <p> Possimus unde harum maiores ab architecto beatae fugit, voluptatum ullam corporis. </p>
                    </div>  
                </div>
            </div>
        </footer>
        <script src="../Components/CarouselBox.js"></script>
    </body>
</html>
  );
}
export default App;
