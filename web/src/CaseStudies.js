
import casebody from './case-body.svg';
import './css/App.css';

function CaseStudies() {
  return (
          <div className=" CaseStudies-body">   
                         <div className='content-image'>
                           <img src={casebody} alt='case-study-placeholder' />
                        </div>
                        <div className="content-details">
                            <p data-mce-style={{ fontSize: "2.94444rem", lineHeight: "3rem"}}className='tagline overtext'>
                                <span> Egwu Records is a platform for discovering music of yesterday today. Egwu allows people create playlists about old artistes, write reviews about old albums and exchange, buy and trade records.</span>
                            </p>
                            <a href="https://www.notion.so/Case-Study-a603be3b9e244798854814a37880807a">View more</a>
                        </div>    
                </div>
  );
}

export default CaseStudies;