import React from 'react'
import { Link } from 'gatsby'
import smartTechMainImg from '../images/smart-tech/main_img.jpg';
import tripBuddyMainImg from '../images/trip-buddy/trip_buddy_main.jpg';
import mainSS from '../images/trip-buddy/main-ss.png';
import ticTacToeMainImg from '../images/tic-tac-toe/tic-tac-toe-main.png';
import videoProtoMain from '../images/video-proto/video-proto-main.jpg';
import LayoutFull from '../components/LayoutFull'
import Typed from 'react-typed';
import SEO from '../components/seo'
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import ReactGA from 'react-ga';
import analytics from '../helper';
import CustomAlertBox from '../components/alertBox';
import ProjectSection from '../components/ProjectSection';
ReactGA.initialize('UA-131887085-1');

const taglineStyle = {
  marginTop: "15vh",
  marginBottom: "30vh",
  // lineHeight: '3rem',
  fontWeight: 300,
  lineHeight: '1.5em',
  height: 108
}

const WorkItemDescription = (props) => (
  <div className="card-text" style={{ fontSize: 18, fontWeight: 300 }}>
    {props.children}
  </div>
)

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    analytics.pageView('home');
  }

  handleClick(e) {
    analytics.event("Home-Main", "click", e.target.title);
  }

  render() {
    return (
      <LayoutFull>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        {/* <section>
          <ProjectSection>
            <div style={{ padding: '0 0' }}>
              <h2 style={taglineStyle} id="tagline">
                <Typed
                  strings={["Hi, I'm a <span class='text-primary'>UX Designer and Researcher</span><br/> with experience <span id='mono'>in Human Centered Design & Frontend Development</span>.<br />"]}
                  typeSpeed={30}
                />
              </h2>
            </div>
          </ProjectSection>
        </section> */}
        <section style={{ margin: '64px 0' }} />

        <section style={{ padding: '64px 0', backgroundColor: '#F7F7F7' }}>
          <ProjectSection>
            <h5 id="work" className="" style={{ paddingBottom: 60 }}><u>WORK</u></h5>
            <div className="row">
              {projects.map(project => (
                <div className="col-xs-12 col-md-12 pv16" key={project.title}>
                  <ProjectItem project={project} onClick={this.handleClick} />
                  <div className="" style={{ margin: '90px 0 60px' }}>
                    <div style={{ width: 10, height: 10, backgroundColor: 'rgb(233, 233, 233)', margin: 'auto', borderRadius: 10 }} />
                  </div>
                </div>
              ))}
            </div>
          </ProjectSection>
        </section>
        <ProjectSection>

        </ProjectSection>
      </LayoutFull >
    )
  }
}

export default IndexPage;

const ProjectItem = ({ project, onClick }) => (
  <div className="row">
    <div className="col-xs-12 col-md-7">
      {/* <Card style={{ height: '100%', border: 'none' }}> */}
      {project.mainImg}
      {/* </Card> */}
    </div>
    <div className="col-xs-12 col-md-5">
      <h4>{project.title}</h4>
      <p>{project.solution}</p>
      <p>{project.tags}</p>
      <Link to={project.slug} onClick={onClick}><Button outline info={"true"} title={project.title}>More</Button></Link>
    </div>
  </div>
)

const projects = [
  {
    slug: 'smart-tech-usability-study',
    mainImg: <img top width="100%" src={smartTechMainImg} style={{ margin: 0, borderRadius: 10, boxShadow: '2px 2px 2px 2px rgb(233,233,233)' }} />,
    title: "SMART Tech: Usability Study",
    description: "Usability study for an interactive and collabrative classroom web application for 3-6 grade students.",
    problem: 'Most people do NOT preplan their long distance trips and end up having bad experiences. Also, people plan their trip differently based on who they are travelling with - like pets, kids, etc.',
    designQuestion: '"How can we use technology to help people plan their long distance trip better and as a result reduce the level of fatiguness during the trip."',
    solution: 'Usability study for an interactive and collabrative classroom web application for 3-6 graders.',
    tags: '#reseach #usabilityStudy'
  },
  {
    slug: 'trip-buddy',
    mainImg: <img top width="100%" src={mainSS} style={{ margin: 0, borderRadius: 10, boxShadow: '2px 2px 2px 2px rgb(233,233,233)' }} />,
    title: "Trip Buddy",
    description: "A long distance road trip planner and friend to play with on the trip.",
    problem: 'Most people do NOT preplan their long distance trips and end up having bad experiences. Also, people plan their trip differently based on who they are travelling with - like pets, kids, etc.',
    designQuestion: '"How can we use technology to help people plan their long distance trip better and as a result reduce the level of fatiguness during the trip."',
    solution: '"Trip Buddy" is an interactive in car application that allows drivers to plan their road trips while on the go and participate in engaging activities that will help them combat fatigue.',
    tags: '#design #prototype #generativeResearch',
  },
  {
    slug: 'tic-tac-toe',
    mainImg: <iframe src="https://player.vimeo.com/video/305407679" width="100%" height="260" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>,
    title: 'Tic Tac Toe',
    solution: 'A touch-enabled physical Tic-Tac-Toe game that can be installed in public places to engage people.',
    tags: '#physicalPrototype #arduino #sensors'
  },
  {
    slug: 'video-prototype',
    mainImg: <iframe src="https://player.vimeo.com/video/304677132" width="100%" height="260" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>,
    title: 'Social Media and Life',
    solution: 'A video prototype to challenge people to develop more meaningful relationships with self and people around.',
    tags: '#videoPrototype #storyboarding'
  }
]