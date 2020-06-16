import React from 'react';
import {Link} from 'react-router-dom'

const FrontPage2 = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h1 className="sixty">3Sixty</h1>
        </div>
        <div>
          <h2>
            Already a user:<Link to="/login"> Click to log in</Link>
          </h2>
        </div>
      </div>
      <div>
        <h1>
          New to 3Sixty, <Link to="/signUp">sign up here</Link>
        </h1>
      </div>
    </React.Fragment>
  );
}
 
export default FrontPage2;