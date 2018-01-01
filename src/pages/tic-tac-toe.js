import React from 'react'
import PageWithProgress from '../components/page-with-progress';
import LayoutFull from '../components/LayoutFull'
import SEO from '../components/seo'
import ticTacToeMainImg from '../images/tic-tac-toe/tic-tac-toe-main.png';
import ProjectSection from '../components/ProjectSection';
import touchImg from '../images/tic-tac-toe/touch.png';
import wallImg from '../images/tic-tac-toe/wall.png';
import engageImg from '../images/trip-buddy/engage.png';
import rudiProto from '../images/tic-tac-toe/rudi-proto.jpg';
import box_1 from '../images/tic-tac-toe/box-1.jpg';
import box_2 from '../images/tic-tac-toe/box-2.jpg';
import whiteBoardImg from '../images/tic-tac-toe/white-board.jpg';
import phones from '../images/tic-tac-toe/phones.png';
import queue from '../images/tic-tac-toe/queue.png';
import solderingImg from '../images/tic-tac-toe/soldering.jpg';
import demo1Img from '../images/tic-tac-toe/demo-1.jpg';
import demo2Img from '../images/tic-tac-toe/demo-2.jpg';
import analytics from '../helper';
import '../components//layout.css';

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

class TicTacToe extends React.Component {
  componentDidMount() {
    analytics.pageView('tic-tac-toe');
  }
  
  render(){
    return (
      <LayoutFull>
    <SEO title="Tic Tac Toe" />
    <div className="position-relative" style={{ height: 300 }}>
      <img src={ticTacToeMainImg} height="300px" width="100%" />
      <div style={style.projectTitle}>
        <h1>Tic Tac Toe</h1>
        <p className="project-description">A touch-enabled physical game to engage people in public places.</p>
      </div>
    </div>
    <PageWithProgress>
      <ProjectSection type="bg">
        <div className="row text-center">
          <div className="col-xs-12 col-md-3">Primary Role<p>Designer, Programmer</p></div>
          <div className="col-xs-12 col-md-3">Secondary Role<p>Hardware Engineer</p></div>
          <div className="col-xs-12 col-md-3">Tools Used<p>Arduino, Sensors, Actuators</p></div>
          <div className="col-xs-12 col-md-3">Team Size<p>2</p></div>
        </div>
      </ProjectSection>
      <ProjectSection title="Summmary">
        <h4>Summary</h4>
        <div className="pv16">
          <h5 className="font-weight-light">Opportunity</h5>
          <p>All of us have been in situations where we have waited for something - bus stops, for billing at
            grocery stores and many other places.
            <div className="row pv48">
              <div className="col-xs-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <img src={queue} width="100%" />
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <p>Studies have shown that long billing queues can significantly impact the sales because of unpleasant experience shoppers have.</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <img src={phones} width="100%" />
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <p>A lot of people waiting at the bus stops, or any othe place end up using their phones, even when they have a company.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-weight-light">What if this time could be spent doing something fun and engaging?</p>
          </p>
        </div>

        <div className="pv16">
          <h5 className="font-weight-light">Solution</h5>
          <p>We desgined a Tic Tac Toe game which is -</p>
          <div className="row text-center">
            <div className="col-xs-12 col-md-4">
              <img src={touchImg} />
              {/* <h6 className="font-weight-light">PLAN</h6> */}
              <p>Tocuh Enabled</p>
              <p className="font-italic"></p>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={wallImg} />
              <p>Compact and Wall Installable</p>
              <p className="font-italic"></p>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={engageImg} />
              <p>Engaging</p>
              <p className="font-italic"></p>
            </div>
          </div>
        </div>

      </ProjectSection>
      <ProjectSection type="bg">
        <p className="font-weight-light font-italic blockquote text-center">Design Question</p>
        <p className="font-weight-light font-italic blockquote text-center">
          "How can we engage people in public places while they are waiting?"
          </p>
      </ProjectSection>
      <ProjectSection title="Constraints">
        <h4>Constraints</h4>
        <div className="pv16">
          <p>
            This project was built as a part of 'HCDE 539: Phycical Prototyping' class at Univesity of Washington, Seattle.
            It was expected that we build something that utilized Arduino (a microcontroller), sensors and actuators.
            It was also required for the prototype to have a physical enclosure.
          </p>
        </div>
      </ProjectSection>
      <ProjectSection title="Ideation" type="bg">
        <h4>Ideation</h4>
        <div className="pv16">
          <p>
            The first step was to indentify what kinds of solutions can engage people in public spaces. Based on in-class discussion we shortlisted 2 possible solutions - an art installation and a multiplayer physical game. We choose to prototype a physical game based on our interest.
          </p>

          <p>Since our solution was planned to be installed in public spaces, it was important to have a game that is intuitive, easy to understand and does not require a lot of instructions to play.
          So we started to search for "Classic Games" that are popular among all age groups and played globally.</p>

          <p>
            Based on our research on the internet, we shortlisted a few games:
            <ul>
              <li>Mario</li>
              <li>Tetris</li>
              <li>Tic Tac Toe</li>
              <li>Mortal Kombat</li>
              <li>PacMan</li>
              <li>Duck Hunt</li>
            </ul>
          </p>

          <p>We picked Tic Tac Toe because of the following reasons:
            <ul>
              <li>MultiPlayer: We wanted people to spend time together instead of mobile phones while waiting in public spaces.</li>
              <li>Suitable for all age groups: Tic Tac Toe is a classic game which, we believe, people of all age groups enjoy playing</li>
              <li>Each game takes less than 30 seconds. Since the wait-time at public location, where this game would potentially be installed, can vary, a short game would be more suiting.</li>
            </ul>
          </p>

          <p>Next we listed down all the components we wanted to use for the prototype.</p>
        </div>
      </ProjectSection>
      <ProjectSection title="Rudimentary Prototype">
        <h4>Rudimentary Prototype</h4>
        <div className="pv16">
          <p>Next, we decided to use rudimentary components from our hardware kit and built a prototype. It took us less than 2 days to built the prototype. The major part was to plan out the logic and write the code. For hardware, we used buttons and LEDs which were readily avaiable and inexpensive.</p>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <iframe src="https://player.vimeo.com/video/304707238" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              <p><a href="https://vimeo.com/304707238">Tic Tac Toe Rudimentary Prototype</a> from <a href="https://vimeo.com/user90299481">Shreyans Gandhi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>
            <div className="col-xs-12 col-md-4">
              <img src={rudiProto} />
            </div>
          </div>
          <p>The major focus for this phase was software testing. Once the hardware was setup, we begin testing and were able to identify several software bugs. We fixed those bugs immediately. This helped us be sure that our software was strong and bug free. This, in retrospect, turned out to be a great decision since for any bug or problem we can across after this point, we could be sure that it was hardware related and not software. This saved us a lot of time.</p>
        </div>
      </ProjectSection>
      {/* <ProjectSection title="Sketching" type="bg">
      
      </ProjectSection> */}
      <ProjectSection title="Med-Fi Prototype" type="bg">
        <h4>Med-Fi Prototype</h4>
        <div className="pv16">
          <p>Next, we built the Med-Fi. This phase involved a lot of hardware work including soldering, wiring, designing the physical enclosure, etc.</p>
          <div className="row">
            <div className="col-xs-12 col-md-6"><img src={solderingImg} /></div>
            <div className="col-xs-12 col-md-6"><img src={whiteBoardImg} /></div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6"><img src={box_1} /></div>
            <div className="col-xs-12 col-md-6"><img src={box_2} /></div>
          </div>
          <p>From our past experience with hardware, we knew that it was important to break down the entire build into smaller component which can easily be tested. And then bring them all together. We made sure that each smaller component worked and were wired independently and malfunction in one component did not affect the others. This strategy smoothen our process.</p>
          <p>Once all our components were ready and individually tested, we bought them together in a physical enclosure. We desiged the enclosure in a way that we could open it easily to debug the hardware or make any changes.</p>
        </div>
      </ProjectSection>
      <ProjectSection title="User Testing">
        <h4>User Testing</h4>
        <div className="pv16">
          <p>We presented our Med-Fi Prototype at the demo day. We had over 40 people who played our game. We observed these people while they were playing and asked them about their experience at the end. We got some valueable feedback by observing and talking to the people.</p>
          <div className="row text-center">
            <div className="col-xs-12 col-md-6">
              <img src={demo1Img} style={{ width: '50%'}} />
            </div>
            <div className="col-xs-12 col-md-6" >
              <img src={demo2Img} style={{ width: '50%'}} />
            </div>
          </div>

          <p>These were the major observations and feedback - </p>
            <ul>
              <li>Most people did not know where to click. They tried clicking on the LEDs instead of clicking on the metallic strip. Also, some people thought pressed the "Play" button even to play a turn during the game.</li>
              <li>Most people did not focus on the timer. Some people even did not realize that there was a timer. At the end of the first game they would think that the game was over.</li>
              <li>People were confused as to which player's turn it was. One of the user suggested to have an indicator to help</li>
              <li>2-minute game duration seemed like a little too long to some people. Maybe 1 minute would be a good duration.</li>
              <li>Almost no one paid attention to the printed instruction on the LCD screen. Maybe more of audio and visual feedback would be more appropriate.</li>
            </ul>
        </div>
      </ProjectSection>
      <ProjectSection title="Conclusion" type="bg">
        <h4>Conclusion</h4>
        <div className="pv16">
          <h5 className="font-weight-light">Reflection</h5>
          <p></p>
          <ul className="font-weight-light">
            <li><b>Working with hardware can be challenging.</b> It is very important to build a rudimentary prototype as a proof of concept and then move on to a higher level of prototype.</li>
            <li><b>Debugging with hardware can be time consuming and challenging.</b> Lot of our components were not soldered but only connected via lose wires on a breadboard. This loosened the wiring on several occasions. 
              At one point the wiring became so messy that it became difficult to identify which part of the prototype was causing a problem.
              
              In retrospect, we felt having everything soldered would have saved us a lot of time.</li>

              <li><b>It is not just important to plan the positioning of the components, but also to plan out the wiring.</b> A lot of our wires crossed each other and it became difficult to understand which wire was connected to which component.</li>
          </ul>
        </div>
      </ProjectSection>

    </PageWithProgress>
  </LayoutFull>
   )
  }
}

export default TicTacToe
