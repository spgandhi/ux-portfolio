import React from 'react'
import PageWithProgress from '../components/page-with-progress';
import LayoutFull from '../components/LayoutFull'
import SEO from '../components/seo'
import roadTripImg from '../images/trip-buddy/road-trip.jpg';
import ProjectSection from '../components/ProjectSection';
import planImg from '../images/trip-buddy/plan.png';
import customizeImg from '../images/trip-buddy/customize.png';
import engageImg from '../images/trip-buddy/engage.png';
import sketch1 from '../images/trip-buddy/sketch1.jpg';
import sketch2 from '../images/trip-buddy/sketch2.jpg';
import sketch3 from '../images/trip-buddy/sketch3.jpg';
import sketch4 from '../images/trip-buddy/sketch4.jpg';
import pp from '../images/trip-buddy/pp.jpg';
import pp_ from '../images/trip-buddy/pp_.jpg';
import pp1 from '../images/trip-buddy/pp1.png';
import pp2 from '../images/trip-buddy/pp2.png';
import pp3 from '../images/trip-buddy/pp3.png';
import pp4 from '../images/trip-buddy/pp4.png';
import pp5 from '../images/trip-buddy/pp5.png';
import persona1 from '../images/trip-buddy/persona-1.png';
import fatigueImg from '../images/trip-buddy/fatigue.jpg';
import genderImg from '../images/trip-buddy/gender.jpg';
import preplanImg from '../images/trip-buddy/preplan.jpg';
import fatigueRemedyImg from '../images/trip-buddy/fatigue_remedy.png';
import travelWithImg from '../images/trip-buddy/travel_with.png';
import analytics from '../helper';
import CustomCarousal from '../components/CustomCarousal';
import '../components//layout.css';
import BlockCarousal from '../components/BlockCarousal';
import mainSS from '../images/trip-buddy/main-ss.png';

const slider = [
  {
    src: sketch1,
  },
  {
    src: sketch2,
  },
  {
    src: sketch3,
  },
  {
    src: sketch4
  }
]

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
    analytics.pageView('trip-buddy');
  }

  render() {
    return (
      <LayoutFull>
        <SEO title="Trip Buddy" />
        <div className="position-relative" style={{ height: 300, textAlign: 'center', backgroundColor: 'rgb(61,167,249)' }}>
          <img src={mainSS} height="300px"  />
          <div style={style.projectTitle}>
            <h1>Trip Buddy</h1>
            <p className="project-description">A long distance road trip planner and friend to play with on the trip.</p>
          </div>
        </div>
        <PageWithProgress>
          <ProjectSection type="bg">
            <div className="row text-center">
              <div className="col-xs-12 col-md-3">Primary Role<p>UI/UX Designer</p></div>
              <div className="col-xs-12 col-md-3">Secondary Role<p>Researcher</p></div>
              <div className="col-xs-12 col-md-3">Tools Used<p>InVision, Sketch</p></div>
              <div className="col-xs-12 col-md-3">Team Size<p>4</p></div>
            </div>
          </ProjectSection>
          <ProjectSection title="Summmary">
            <h4>Summary</h4>
            <p>
              "Trip Buddy" is a interactive in car application that allows drivers to plan their road trips while on the go and participate in engaging activities that will help them combat fatigue. The system allows users to onboard and set their preferences as well as create a trip on their phones at home and when they are ready to start the trip they can sync their phone to their car Android Auto or Apple CarPlay systems.
            </p>
            <div className="pv16">
              <h5 className="font-weight-light">Problem</h5>
              <p>Most people do NOT preplan their long distance trips. But they end up having bad experiences at the places they take a break or night halt.
                Some of the common problems people encounter could be the place is not clean or the food is not good enough or of their preference.
                </p>

              <p>Also, people plan their trip differently based on who they are travelling with - like pets, kids, people with specific dietary needs, etc. And they might find it difficult to cater to these custom needs on a long distance trips.</p>
              <p>People also tend to feel fatigued either driving or sitting in the car for a long period of time. And if there was a way to keep people engaged in fun activites while they are driving, it could reduce their level of fatiguness.</p>
            </div>

            <div className="pv16">
              <h5 className="font-weight-light">Solution</h5>
              <p>We desgined an app that would let people -</p>
              <div className="row text-center">
                <div className="col-xs-12 col-md-4">
                  <img src={planImg} />
                  {/* <h6 className="font-weight-light">PLAN</h6> */}
                  <p>PLAN the trip</p>
                  <p className="font-italic">Enter the start/end point and other preferences and the app will generate the best itenary.</p>
                </div>
                <div className="col-xs-12 col-md-4">
                  <img src={customizeImg} />
                  <p>CUSTOMIZE the trip</p>
                  <p className="font-italic">Do not like the auto generated iternary? Customize is further to suit your needs.</p>
                </div>
                <div className="col-xs-12 col-md-4">
                  <img src={engageImg} />
                  <p>Stay ENGAGED</p>
                  <p className="font-italic">Play fun games like trivia to stay engaged on your ride</p>
                </div>
              </div>
              <div className="text-center">
                <iframe width="438" height="930" src="//invis.io/ZAPCVASK487" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>

          </ProjectSection>
          <ProjectSection type="bg">
            <p className="font-weight-light font-italic blockquote text-center">Initial Design Question</p>
            <p className="font-weight-light font-italic blockquote text-center">
              "How can we use technology to offer innovative preventive solutions to battle fatigue and drowsiness while driving."
          </p>
          </ProjectSection>
          <ProjectSection title="Research">
            <h4>Research</h4>
            <div className="pv16">
              <p>
                The main goal of the design phase was to understand who are end users are, what are their pain points, what their past experiences have been and what kind of solutions be effective.
          </p>
            </div>

            <div className="pv16">
              <h5 className="font-weight-light">Secondary Research</h5>
              <p>We figured that for the above design question, there would be a lot of existing literature and research done by other people and it might be helpful to look at it. We read a few research articles to understand when do people feel fatigue while driving, what do they do to recover and how effective they are.</p>
            </div>
            <div className="row pv16">
              <div className="col-xs-12 col-md-6">
                <h5 className="font-weight-light">Survey</h5>
                <p>
                  We sent out 2 differnet surveys - one after our initial design question and the other after our refined design question.
                We received <span className="text-primary">65 responses</span> for the 1st survey and <span className="text-primary">40 responses</span> for the 2nd survey. The surveys were posted on personal Facebook account and also groups related to UI/UX.
              </p>
              </div>
              <div className="col-xs-12 col-md-6">
                <h5 className="font-weight-light">Interviews</h5>
                <p>
                  We conducted semi-structured interviews with <span className="text-primary">6 people</span>.
                  We designed a set of questions and a script to be followed for each of the interviews. Some of the questions were conditional which were asked based upon the responses to the previous questions.
              </p>
              </div>
            </div>

            <div className="pv16">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <img src={genderImg} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={preplanImg} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={fatigueImg} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={travelWithImg} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={fatigueRemedyImg} />
                </div>
              </div>
            </div>

            <div className="pv16">
              <h5 className="font-weight-light">Pivot</h5>
              <p>Based on our initial round of research we figured a couple of things:</p>
              <ul className="font-weight-light">
                <li>People do feel fatigued during drives back home from work and/or late night drives within the city, it is not as serious as the level of fatigue people feel on long distance drives.</li>
                <li>Most people use music and/or beverages (coffee, energy drink, etc) to combat fatiguness while driving, but according to research and also some of the interviewees the effect does not last long. Also, regular music listeners and coffee drinkers develop tolernace to its simulatory effects over time.</li>
              </ul>
              <p>Based on this findings, we took the following decision:</p>
              <ol className="font-weight-light">
                <li>To focus only on long distance trips</li>
                <li>To employ preventive solutions rather than reactive solutions</li>
                <li>To help people plan their long distance trips with regular breaks and night halt and also keep them engaged with activites like trivia while also making sure that these activities don't distract them from driving.</li>
              </ol>
            </div>

            <div className="pv16">
              <h5 className="font-weight-light">Personas</h5>
              <img src={persona1} />
            </div>
          </ProjectSection>
          <ProjectSection type="bg">
            <p className="font-weight-light font-italic blockquote text-center">Refined Design Question</p>
            <p className="font-weight-light font-italic blockquote text-center">"How can we use technology to help people plan their long distance trip better and as a result reduce the level of fatiguness during the trip."</p>
          </ProjectSection>
          <ProjectSection title="Ideation">
            <h4>Ideation</h4>
            <div className="pv16">
              <h5 className="font-weight-light">Brainstorming</h5>
              <p>Our team got together to brainstorm possible solutions/features for our refined design question.</p>
              <ul className="font-weight-light">
                <li>Trip Planner: To auto generate an itinary based on user's custom preferences.</li>
                <li>Productivity: To allow the user to be more productive while driving - like listen/reply to emails, research (audio-based) for upcoming homework, meeting or presentation, call family and friends, etc</li>
                <li>Tourism: To let people know about famous tourist places along their route like meuseums, hikes, parks, etc.</li>
              </ul>
            </div>

            <div className="pv16">
              <h5 className="font-weight-light">Sketching</h5>
              <p>Based on our brain storming session, each of team member sketched 6 ideas. Some of the sketches were variation of the same solution/feature.</p>
              <div className="row">
                {/* <div className="col-xs-12 col-md-6">
                  <img src={sketch1} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={sketch2} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={sketch3} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={sketch4} />
                </div> */}
                <CustomCarousal items={slider} />
              </div>
            </div>

            <div className="pv16">
              <p>We showed the sketches to 3 users. All of them were more excited about the "Trip Planning" solution. Also, we considered the time and resource constraints we had, and so we decided stick to only the "Trip Planning" feature.</p>
            </div>
          </ProjectSection>
          <ProjectSection type="bg">
            <p className="font-weight-light font-italic blockquote text-center">We decided to have 2 interfaces - a mobile UI to use before the trip and a tablet UI for the in-car display during the trip.</p>
          </ProjectSection>
          <ProjectSection title="Paper Prototype">
            <h4>Paper Prototype</h4>
            <div className="pv16">
              <p>After narrowing down the scope of our project, we listed down the features for the app and created a rudimentary prototype. We printed the screens and components and developed a paper prototype</p>
              <div className="row">
                <div className="col-xs-12 col-md-3">
                  <img src={pp1} />
                </div>
                <div className="col-xs-12 col-md-3">
                  <img src={pp2} />
                </div>
                <div className="col-xs-12 col-md-3">
                  <img src={pp3} />
                </div>
                <div className="col-xs-12 col-md-3">
                  <img src={pp4} />
                </div>
                <div className="col-xs-12">
                  <img src={pp5} />
                </div>
              </div>
            </div>
            <div className="pv16">
              <h5 className="font-weight-light">Testing</h5>
              <p>
                We tested the paper prototype with 6 people. All of them were students of University of Washington. All the users were asked to perform 3 different tasks and think alound as they perform them.
                We had 1 person on our team dedicated to observe the user and take notes.
          </p>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <img src={pp} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={pp_} />
                </div>
              </div>
            </div>

            <div className="pv16">
              <h5 className="font-weight-light">Evaluation</h5>
              <p>These were the major findings from the paper prototype testing:</p>
              <ul className="font-weight-light">
                <li>The initial setup process was intimidating for the first time user and they wanted an option to skip it.</li>
                <li>People preferred to have all the settings options on one page with vertical scroll rather than having seperate pages.</li>
                <li>Wordings used in the app were ambigious or confusing on many screens.</li>
                <li>For settings item with many options, they wanted to have a "Select All" option as well.</li>
                <li>People did not know how to interact with the Voice Assistant. They felt a quick tutorial of use cases would be helpful.</li>
              </ul>
            </div>
          </ProjectSection>
          <ProjectSection title="Hi-Fi Prototype" type="bg">
            <h4>Hi-Fi Prototype</h4>
            <div className="text-center">
              <iframe width="438" height="930" src="//invis.io/ZAPCVASK487" frameborder="0" allowfullscreen></iframe>
            </div>
          </ProjectSection>
          <ProjectSection title="Conclusion">
            <h4>Conclusion</h4>
            <div className="pv16">
              <h5 className="font-weight-light">Reflection</h5>
              <p>This project proved to be very valuable in learning the entire User Centered Design process. Most of our team members were using this process for the first time and there were some major lessons we all learned:</p>
              <ul className="font-weight-light">
                <li><b>Spend less time on secondary research and go talk to users.</b> We initally spent a lot of time reading research papers. We later figured that rolling out the survey and doing the interviews gave us much more valuable information to make decisions.</li>
                <li><b>Know how much information to give to your test users.</b> On many occasions we found ourselves giving more than required information to the test users. We figured that giving them more information can introduce bias.</li>
              </ul>
            </div>
            <div className="pv16">
              <h5 className="font-weight-light">Limitation</h5>
              <ul className="font-weight-light">
                <li><b>Most of the people we tested our prototypes on were people with Human Centered Design background from the age group of 22-35.</b> We feel that testing the protoype with people from other background and age-group would yield better results.</li>
                <li><b>We did not test our prototype on people while they were driving.</b> Although we had a POV (point-of-view) Driving video being played on a computer screen and the users were asked to focus that as well during the test, it is still not eaxctly the same environment as driving the car.</li>
                <li><b>For designing the project we have assuming that AI technologies already exist that can help plan a route based on set preferences.</b> Although if such a technology does not exist, developing one would require significant financial and human resources.</li>
              </ul>
            </div>
          </ProjectSection>

        </PageWithProgress>
      </LayoutFull>
    )
  }
}

export default TripBuddy
