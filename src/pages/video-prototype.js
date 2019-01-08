import React from 'react'
import PageWithProgress from '../components/page-with-progress';
import LayoutFull from '../components/LayoutFull'
import SEO from '../components/seo'
import ProjectSection from '../components/ProjectSection';
import videoProtoMain from '../images/video-proto/video-proto-main.jpg';
import analytics from '../helper';

const style = {
  projectTitle: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    backgroundColor: 'rgba(0,0,0,.5)',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

class TripBuddy extends React.Component {
  componentDidMount() {
    analytics.pageView('video-prototype');
  }
  render() {
    return (
      <LayoutFull>
        <SEO title="Page two" />
        <div className="position-relative" style={{ height: 300 }}>
          <img src={videoProtoMain} height="300px" width="100%" />
          <div style={style.projectTitle}>
            <h1>Video Prototype: Social Media and Life</h1>
            <p className="project-description">A video prototype to challenge people to develop more meaningful relationships with self and people around.</p>
          </div>
        </div>
        <PageWithProgress>
          <ProjectSection type="bg">
            <div className="row text-center">
              <div className="col-xs-12 col-md-3">Primary Role<p>Story Writing, Direction and Camera</p></div>
              <div className="col-xs-12 col-md-3">Secondary Role<p>Actor</p></div>
              <div className="col-xs-12 col-md-3">Tools Used<p>Action Camera, Gimbal, iMovie</p></div>
              <div className="col-xs-12 col-md-3">Team Size<p>1</p></div>
            </div>
          </ProjectSection>
          <ProjectSection title="Summmary">
            <h4>Final Video Prototype</h4>
            <div className="pv16">
              <iframe src="https://player.vimeo.com/video/304677132" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              <p><a href="https://vimeo.com/304677132">Final Prototype | HCDE 598</a> from <a href="https://vimeo.com/user90299481">Shreyans Gandhi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>
          </ProjectSection>
        </PageWithProgress>
      </LayoutFull>
    )
  }
}

export default TripBuddy
