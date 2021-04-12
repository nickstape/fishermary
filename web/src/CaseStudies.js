import history from './history';
import casebody from './case-body.png';
import './App.css';

function CaseStudies() {
  return (
          <div className="container CaseStudies-body">   
                         <div data-content-for="xl">
                           <img src={casebody} alt='case-study-placeholder' />
                        </div>
                </div>
  );
}

export default CaseStudies;