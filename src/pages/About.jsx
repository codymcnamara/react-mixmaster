import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/AboutPage'

const About = () => {
    return (
      <Wrapper>
        <h1>About</h1>
        <Link to ="/">Home Page</Link>
      </Wrapper>
    );
  };
  export default About;