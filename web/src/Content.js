import history from './history';

import './css/App.css';

function Content() {
  return (
          <div className="contents-body">   
                         <div data-content-for="xl">
                             <p>
                                <span>&nbsp;A Product Manager — </span><span>passionate  about technology, <a href='https://vsco.co/maryfisher/gallery' style={{Color: "red"}}><u>photography,</u></a> art and how they shape our human experience and growth, delivering value, finding problems and validating solutions. .</span>
                            </p>
                         </div>
                         <div class="multi-button">
                            <button onClick={() => history.push('/CaseStudies')}>Case Studies</button>
                        </div>
                </div>
  );
}

export default Content;