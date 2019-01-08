import React from 'react'
import { Link } from 'gatsby'
import tripBuddyMainImg from '../images/trip-buddy/trip_buddy_main.jpg';
import ticTacToeMainImg from '../images/tic-tac-toe/tic-tac-toe-main.png';
import videoProtoMain from '../images/video-proto/video-proto-main.jpg';
import Layout from '../components/layout'
import Typed from 'react-typed';
import SEO from '../components/seo'
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import ReactGA from 'react-ga';
import analytics from '../helper';
ReactGA.initialize('UA-131887085-1');

const taglineStyle = {
  margin: "64px 0px 72px",
  lineHeight: '3rem',
  fontWeight: 300,
  lineHeight: '1.5em',
}

const WorkItemDescription = (props) => (
  <p className="card-text" style={{ fontSize: 18, fontWeight: 300 }}>
    {props.children}
  </p>
)

class IndexPage extends React.Component {

  componentDidMount() {
    analytics.pageView('home');
  }
  
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div style={{ padding: '0 0' }}>
          <h2 style={taglineStyle} id="tagline">
            <Typed
              strings={["Hi, I'm a <span class='text-primary'>UX Engineer</span> with experience in <br /> Human Centerd Design & Frontend Development"]}
              typeSpeed={15}
            />
          </h2>
        </div>
        <h4 id="work"><u>WORK</u></h4>
        <br />
        <div className="row">
          {projects.map(project => (
            <div className="col-xs-12 col-md-6 pv16" key={project.title}>
              <ProjectItem project={project} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default IndexPage;

const ProjectItem = ({ project }) => (
  <Card style={{ height: '100%' }}>
    <CardImg top width="100%" height="280px" src={project.mainImg} alt="Card image cap" style={{ margin: 0 }} />
    <CardBody>
      <h5>{project.title}</h5>
      <WorkItemDescription>{project.description}</WorkItemDescription>
      <Link to={project.slug}><Button>View</Button></Link>
    </CardBody>
  </Card>
)

const projects = [
  {
    slug: 'trip-buddy',
    mainImg: tripBuddyMainImg,
    title: "Trip Buddy",
    description: "A long distance road trip planner and friend to play with on the trip.",
  },
  {
    slug: 'tic-tac-toe',
    mainImg: ticTacToeMainImg,
    title: 'Tic Tac Toe',
    description: 'A touch-enabled physical Tic-Tac-Toe game',
  },
  {
    slug: 'video-prototype',
    mainImg: videoProtoMain,
    title: 'Video Prototype: Social Media and Life',
    description: 'A video prototype to challenge people to develop more meaningful relationships with self and people around.',
  }
]