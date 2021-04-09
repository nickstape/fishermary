import history from './history';
import './App.css';

function Content() {
  return (
          <div className="container contents-body">   
                         <div data-content-for="xl">
                             <p style={{ fontSize: "2.94444rem" }} data-mce-style={{ fontSize: "2.94444rem", lineHeight: "3rem"}}>
                                <span className="font_rut3oe4qq">&nbsp;A Product Manager — </span><span className="font_rut3oe4qq">passionate  about technology, <a href='https://vsco.co/maryfisher/gallery' style={{Color: "red"}}><u>photography,</u></a> art and how they shape our human experienceand growth, delivering value, finding problems and validating solutions. .</span>
                            </p>
                         </div>
                         <div class="multi-button">
                            <button onClick={() => history.push('/CaseStudies')}>Case Studies</button>
                        </div>
                </div>
  );
}

export default Content;