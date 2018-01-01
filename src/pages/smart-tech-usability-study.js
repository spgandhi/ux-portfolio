import React from 'react'
import PageWithProgress from '../components/page-with-progress';
import LayoutFull from '../components/LayoutFull'
import { Button } from 'reactstrap';
import SEO from '../components/seo'
import smartTechMainImg from '../images/smart-tech/main_img.jpg';
import ProjectSection from '../components/ProjectSection';
import { Document, Page } from 'react-pdf';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import fianlAssentForm from '../images/Final_Assent_Form.pdf'
import googleImg from '../images/smart-tech/google.jpg';
import bingImg from '../images/smart-tech/bing.jpg';
import kids1 from '../images/smart-tech/kids1.jpg';
import kids2 from '../images/smart-tech/kids2.jpg';
import kids3 from '../images/smart-tech/kids3.jpg';
import pencil from '../images/smart-tech/pencil.jpg';
import zeroSeverity from '../images/smart-tech/0.png';
import oneSeverity from '../images/smart-tech/1.png';
import twoSeverity from '../images/smart-tech/2.png';
import threeSeverity from '../images/smart-tech/3.png';
import fourSeverity from '../images/smart-tech/4.png';
import classIdImg from '../images/smart-tech/classid.png';
import teacherJoinScreenImg from '../images/smart-tech/teacherJoinScreen.jpg';
import imageToolImg from '../images/smart-tech/imageTool.jpg';
import imgDuplicateImg from '../images/smart-tech/imgDuplicate.jpg'
import processImg from '../images/smart-tech/process.png'
import pencilImg from '../images/smart-tech/pencil.jpg'
import deviceImg from '../images/smart-tech/devices.png'
import studentImg from '../images/smart-tech/student.png'
import calendarImg from '../images/smart-tech/calendar.png'
import PointImg from '../images/smart-tech/3-point.png'
import analytics from '../helper';
import '../components//layout.css';
import TaskList from './views/task-list';
import DuringTheSession from './during-the-session';
import Carousal from '../components/CustomCarousal';


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

class SmartTech extends React.Component {

	componentDidMount() {
		analytics.pageView('smart-tech');
	}

	render() {
		return (
			<LayoutFull>
				<SEO title="SMART Tech: Usability Study" />
				<div className="position-relative" style={{ height: 300 }}>
					<div style={{ height: 300, overflow: 'hidden' }}>
						<img src={smartTechMainImg} width="100%" style={{ position: 'relative', top: -350, }} />
					</div>
					<div style={style.projectTitle}>
						<h1>SMART Tech: Usability Study</h1>
						<p className="project-description">Usability study for an interactive and collabrative classroom web application for 3-6 grade students.</p>
					</div>
				</div>
				<PageWithProgress>
					<ProjectSection type="bg">
						<div className="row text-center">
							<div className="col-xs-12 col-md-3">Total Participants<p>12<br />(3 sessions with 4 participants in each)</p></div>
							<div className="col-xs-12 col-md-3">Client<p>SMART Technologies</p></div>
							<div className="col-xs-12 col-md-3">Methods Used<p>Classroom Simulated Study, Observational Note Taking, Screen Capturing</p></div>
							<div className="col-xs-12 col-md-3">Team Size<p>3</p></div>
						</div>
					</ProjectSection>
					<ProjectSection title="Summmary">



						<h4>Summary</h4>
						<p>
							SMART Learning Suite Online (SLSO) is a bundle of software including lesson delivery,
    assessment, student collaboration, and game-based learning. It’s available as a single purchase
    on a per-teacher, per-year subscription basis.

                        </p>
						<p className="text-primary">
							SMART has tasked our team with investigating the student experience while using this product
in-classroom during lessons. In particular, we are to look at the pacing options (teacher pace vs
student self-directed pace) of slides and the workspaces feature that allows students to
collaborate in the classroom in real-time.
</p>

						<p>There are two primary users of this product are teachers and students. SMART has already
                        conducted a number of research studies with teachers while developing and improving their
                        SLSO product over the last year but has not done any research studies with students to date.
                        So our task will be to understand the student experience for these products, focusing
specifically on 3rd to 6th graders and group interactions while using the product.</p>
						<p className="text-center"><Button color="primary" large href="#Results">Jump To Results</Button></p>

						<h5 className="font-weight-light">The Process</h5>
						<p><img src={processImg} /></p>


					</ProjectSection>
					<ProjectSection type="bg">
						<p className="font-weight-light font-italic blockquote text-center">Main Research Question</p>
						<p className="font-weight-light font-italic blockquote text-center">
							"Whether this product is enhancing the student classroom experience or distracting."
                      </p>
					</ProjectSection>
					<ProjectSection title="Research Questions">
						<h4>Research Questions</h4>
						<div className="pv16">
							<p>
								Our first task was to come up with questions we wanted to be able to answer from this usability study. In consultation with Serena Hillman, the Principal UX Researcher at SMART Technologies, and 2 of her other teammates we came up with the following research questions -
                                <ul style={{ marginTop: 20 }}>
									<li>What issues do students encounter while logging in to the application?</li>
									<li>Are students able to join the correct class session and what issues do they encounter during the process?</li>
									<li>What is the student experience and behavior during in-class teaching both in the student-paced and teacher-paced scenarios?</li>
									<li>How easy or difficult is it for students to engage with and complete individual “handout” activities?</li>
									<li>How easy or difficult is it for students to understand the “workspaces” feature and clilaborate with other students for an in-class activity or assignment?</li>
									<li>Is this product is enhancing the student classroom experience or distracting?</li>
								</ul>
							</p>
						</div>

					</ProjectSection>
					<ProjectSection title="Interaction Map" type="bg">
						<h4>Interaction Map</h4>
						<p>
							Next, we had to make ourselves acquanted with the flow of the app and make an interaction map that would match our research goals. Making the interaction map helped us figure what we were to evaluate for each screen or process. For example, for one of the screens we figured we needed to evaluate how easy or difficult is it to find the image search tool.
						</p>
						<p><strong>[Click on the "hand" icon to load the interaction map.]</strong></p>
						<iframe width="100%" height="500" src="https://realtimeboard.com/app/embed/o9J_kyYe1wY=/?" frameborder="0" scrolling="no" allowfullscreen></iframe>
					</ProjectSection>


					<ProjectSection title="Participant Recruiting">
						<h4>Participant Recruiting</h4>
						<div className="pv16">
							<p className="pv16">
								Desired characteristics:
							</p>
							<div className="row">
								<div className="col-xs-6 col-md-3" style={{ padding: 50 }}>
									<img src={studentImg} />
									<p> <center>Currently a 3-6 grade student.</center></p>
								</div>
								<div className="col-xs-6 col-md-3" style={{ padding: 50 }}>
									<img src={deviceImg} />
									<p> <center>Used at least one of mobile, tablet or laptop</center></p>
								</div>
								<div className="col-xs-6 col-md-3" style={{ padding: 50 }}>
									<img src={PointImg} />
									<p> <center>Is proficient in using smart devices</center></p>
								</div>
								<div className="col-xs-6 col-md-3" style={{ padding: 50 }}>
									<img src={calendarImg} />
									<p><center>Available on the study date and time.</center></p>
								</div>
							</div>
						</div>

						<div className="pv16 row">
							<div className="col-xs-12 col-md-6">
								<h5 className="font-weight-light">Screening Form</h5>
								<p className="pv16">We sent out the below screening forms through different channels - Facebook groups, Slack Channels and personal contacts.</p>
								<p>We received 20 responses of which we selected 12 participants making sure we have representation from different grade students. We put them in 3 groups based on their preferred time for the study. We reached out to them via email and asked them to confirm availability.</p>
							</div>
							<div className="col-xs-12 col-md-6">
								<h5 className="font-weight-light">Consent and Assent Forms</h5>
								<p>Since our participants were children between 3-6 grade, we needed the parents to sign the consent form and the child to sign the assent form.</p>
								<p>We used an online tool to let the parents sign the consent form digitally. We also allowed the parents to sign a physical form on the day of the study incase they could not sign it online. The child was presentated with a easy-to-understand one-page assent form on the day of the study.</p>
							</div>
						</div>

						<Tabs>
							<TabList>
								<Tab>Screening Form</Tab>
								<Tab>Consent Form</Tab>
								<Tab>Assent Form</Tab>
							</TabList>

							<TabPanel>
								<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe16aV6_oX_2ewc7byT74lTyQqsTCCXvIKR8Zf_r6eVjnBb9g/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
							</TabPanel>
							<TabPanel>
								<iframe src="https://app.waiverforever.com/pending/SPpVtMzz8f1550628360" width="100%" height="500px" />
							</TabPanel>
							<TabPanel>
								<Document file={fianlAssentForm}>
									<Page pageNumber={1} />
								</Document>
							</TabPanel>
						</Tabs>

						<div className="pv16">
							<h5 className="font-weight-light">Gratuity</h5>
							<p>The parents were given a gratuity of $100 (two VISA gift cards) for their time and efforts.</p>
						</div>
					</ProjectSection>
					<ProjectSection title="Hi-Fi Prototype" type="bg">
						<h4>Task List</h4>
						<p className="pv16">
							For each of our research question, we came up with a corresponding task that the participants will be made to do. We also listed down what data would we be collecting and using which methods.
						</p>
						<TaskList />
					</ProjectSection>
					<ProjectSection title="Conclusion">
						<h4>Study Methods & Facilitation Approach</h4>
						<p>
							The study was conducted in a classroom simulated environment. <span className="text-primary">One of the team members (Dawn Ferguson) played the role of a teacher. While me and the other teammate, Jeff, were moderator and note takers.</span> A planned lesson was presented to the participants by the teacher which also involved individual and paired assignments.
						</p>
						<div className="row pv16">
							<div className="col-xs-12 col-md-4"><img src={kids1} /></div>
							<div className="col-xs-12 col-md-4"><img src={kids2} /></div>
							<div className="col-xs-12 col-md-4"><img src={kids3} /></div>
						</div>
						<div className="pv16 text-center">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/77uHfRbPMN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
						<Tabs>
							<TabList>
								<Tab>Testing Environment</Tab>
								<Tab>Post Session Questionnarie</Tab>
							</TabList>

							<TabPanel>
								<p><span className="text-primary">The study was conducted in SMART&rsquo;s Seattle office on February 23, 2019.</span> A conference room was reserved which simulatde a classroom environment by utilizing:</p>
								<p><ol>
									<li><span>Tables and chairs set to simulate a classroom furniture layout.</span></li>
									<li><span>Bright lighting for clear visibility inside the room.</span></li>
									<li><span>Appropriate room temperature was set for the comfort of the participants.</span></li>
									<li><span>A teaching wall with a projected screen or SMART board.</span></li>
									<li><span>Students were provided with a Chromebook to follow with the teacher during the class session.</span></li>
									<li><span>All the Chromebooks had a screen recording software and the entire session was be recorded.</span></li>
									<li><span>Cameras live-streamed to another room for SMART&rsquo;s team to view.</span></li>
								</ol>
								</p>
							</TabPanel>
							<TabPanel>
								<iframe src="https://docs.google.com/document/d/e/2PACX-1vRiln7HCUXA0PzmXcEk8_jx811XVUXpMCDwv2BCMvA8pUrjevAoIpSXsN_c7-geScbrDeX2VabY--2D/pub?embedded=true" width="100%" height="600px"></iframe>
							</TabPanel>
						</Tabs>

					</ProjectSection>
					<ProjectSection type="bg" title="Results">
						<h4>Results</h4>
						<p className="pv16">
							First, we compiled all our notes in a spreadsheet with color coding to help understand severity of each of the usability issues.
						</p>

						<p>Based on the <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhxO4093qOF-V7P8FlxPXglevAIZ7OgwDwjILX-pz_VYaWAgL3cNGVv7fezot-9OcoiKvWhh8qSv2E/">compiled data in a spreadsheet </a> we were able to find themes and issues that were frequent or worth noting.</p>

						<p className="pv16" />
						<h5 className="font-weight-light" style={{ paddingBottom: 10 }}>Major Pain Points and Recommendations</h5>
						<Tabs>
							<TabList>
								<Tab>Opening App</Tab>
								<Tab>Login</Tab>
								<Tab>Pen Tool</Tab>
								<Tab>Artifacts</Tab>
								<Tab>Media Tool</Tab>
								<Tab>Discoverability</Tab>
							</TabList>

							<TabPanel>
								<div className="text-danger clearfix"><img src={threeSeverity} className="pull-left mr12" />SOME PARTICIPANTS HAD DIFFICULTY WITH NAVIGATING TO https://hellosmart.com</div>
								<h6><u>Observations</u></h6>
								<p>
									<ul>
										<li>Some participants populated the search function instead of address bar.</li>
										<li>Spelling errors by participants resulted in unpredictable search results.</li>
										<li>The Google and the Bing search results did not have the correct page in the first page result.</li>
										<li>The first Google result did not have any meta description and the Bing result displayed some technical information in the meta description.</li>
									</ul>
								</p>

								<h6><u>Consideration</u></h6>

								<p>The search engine was open when they got on to their device.</p>

								<div className="row">
									<div className="col-xs-12"><img src={googleImg} /></div>
									{/* <div className="col-xs-12"><img src={bingImg} /></div> */}
								</div>

								<h6><u>Recommendation</u></h6>
								<p className="">
									<ul>
										<li>Graphical representation of the browser icons and a screenshot of where to enter the URL and Class ID.</li>
										<li>Consider creating a Progressive Web App (PWA) for SLSO.</li>
										<li>Consider improving SEO of the website (both for Google and Bing).</li>
									</ul>
								</p>
							</TabPanel>

							<TabPanel>
								<div className="text-danger clearfix"><img src={twoSeverity} className="pull-left mr12" />[Login to SLSO] PARTICIPANTS SUCCESSFULLY LOGGED IN AFTER INITIAL DIFFICULTY.</div>
								<h6><u>Observations</u></h6>
								<p>
									Participants often tried to enter a space into the class ID field.
								</p>
								<h6><u>Causes</u></h6>
								<ul>
									<li>The class ID, that displays on the teacher’s screen, contains a space between the first three and last three digits.</li>
									<li>The language on the teacher’s screen and participant’s screens are different.</li>
								</ul>
								<div className="row">
									<div className="col-xs-12 col-md-6"><img src={classIdImg} /></div>
									<div className="col-xs-12 col-md-6"><iframe width="560" height="315" src="https://www.youtube.com/embed/GssxhpYv_LA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

								</div>
								<div><img src={teacherJoinScreenImg} /></div>
								<h6><u>Recommendation</u></h6>
								<p className="">
									<ul>
										<li>Allow class ID field with or without space.</li>
										<li>Consider simplifying the Login Flow (reducing the no. of pages)</li>
										<li>Consider adding visual aid to the class joining instructions on the teacher's screen.</li>
									</ul>
								</p>

							</TabPanel>

							<TabPanel>
								<div className="text-danger clearfix"><img src={oneSeverity} className="pull-left mr12" />[Activity 1: Drawing] ALL PARTICIPANTS SUCCESSFULLY DISCOVERED PEN TOOL.</div>

								<div className="row">
									<div className="col-xs-12 col-md-6">
										<h6><u>Observations</u></h6>
										<p>
											<ul>
												<li>Participants easily discovered the pen tool.</li>
												<li>Participants had early success with changing pen tool color.</li>
												<li>Participants had some difficulty controlling drawing via trackpad.</li>
											</ul>
										</p>
									</div>
									<div className="col-xs-12 col-md-6">
										<h6><u>Recommendation</u></h6>
										<ul>
											<li>Provide shapes (circle, oval, rectangle, etc) option to draw with.</li>
											<li>Provide an indicator of pen color on pen tool.</li>
										</ul>
									</div>
								</div>
								<div><img src={pencilImg} /></div>
							</TabPanel>

							<TabPanel>
								<div className="text-danger clearfix"><img src={threeSeverity} className="pull-left mr12" />[Artifacts] PARTICIPANTS COULD MANIPULATE STUDENT’S AND UNLOCKED TEACHER  ARTIFACTS IN SHARED WORKSPACES.</div>
								<div className="row">
									<div className="col-xs-12 col-md-6">
										<h6><u>Observations</u></h6>
										<p>
											<ul>
												<li>Participants could move, duplicate, and resize other participant’s artifacts.</li>
												<li>Participants did not know who owned what artifact.</li>
												<li>Imported artifacts were different sizes and often filled the shared workspace.</li>
											</ul>
										</p>
									</div>
									<div className="col-xs-12 col-md-6">
										<h6><u>Causes</u></h6>
										<ul>
											<li>Student artifacts do not lock.</li>
											<li>There are no attributions on the artifacts.</li>
											<li>Imported image sizes were unpredictable.</li>
										</ul>
									</div>
								</div>


								<div className="row">
									<div className="col-xs-12 col-md-6">
										<div><img src={imgDuplicateImg} /></div>
									</div>
									<div className="col-xs-12 col-md-6">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/Yae2U0dlbVM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									</div>


								</div>
								<h6><u>Recommendation</u></h6>
								<p className="">
									<ul>
										<li>Provide an option to lock images and snap to grid.</li>
										<li>Automatically resize images.</li>
										<li>Display attribution with the artifacts.</li>
									</ul>
								</p>

							</TabPanel>

							<TabPanel>
								<div className="text-danger clearfix"><img src={fourSeverity} className="pull-left mr12" />[Media TOOL] THE MEDIA ICON AND INSERTION TOOL HAD LOW DISCOVERABILITY AMONG YOUNGER PARTICIPANTS (3rd and 4th graders) AND HAD DIIFCULTY USING IT.</div>

								<div className="row">
									<div className="col-xs-12 col-md-6">
										<h6><u>Observations</u></h6>
										<p>
											<ul>
												<li>Several participants asked for help to locate the media tool.</li>
												<li>Participants tried to search in the URL box or tried to upload locally.</li>
												<li>Participants struggled figuring how to place a searched picture into the workspace.</li>
											</ul>
										</p>
									</div>
									<div className="col-xs-12 col-md-6">
										<h6><u>Causes</u></h6>
										<ul>
											<li>The media icon is not labeled.</li>
											<li>There are three options for media that appear on the participant screen which can be confusing.</li>
										</ul>
									</div>
								</div>


								<div><img src={imageToolImg} /></div>

								<h6><u>Recommendation</u></h6>
								<p className="">
									<ul>
										<li>Combine URL and keyword search. </li>
										<li>Include both icons and text for easier discoverability.</li>
										<li>Allow teacher the ability to select which method of uploading is allowed for a particular activity/workspace.</li>
									</ul>
								</p>

							</TabPanel>



							<TabPanel>
								<div className="text-danger clearfix"><img src={threeSeverity} className="pull-left mr12" />[Discoverability] MANY PARTICIPANTS (5/10) HAD DIFFICULTY DISCOVERING TOOLS AND SITE NAVIGATION.</div>
								<h6><u>Observations</u></h6>
								<p>
									Participants experienced several early complications with locating appropriate tools for the first time.
								</p>

								<p>Activity 1 - <i>"How do I circle these?"</i> - P4. </p>
								<p>Workspace 1, - <i>"Where do I even go if I want to add a picture?"</i> - P7</p>
								<p>Workspace 1, <i>"Where?!"</i> - trying to figure out how to find photos - P12</p>
								<p>Navigation <i>"How do you go next?"</i> - could not figure out how to advance and had to ask teacher for assistance  - P3</p>

								<iframe width="560" height="315" src="https://www.youtube.com/embed/sJbgI0aJsCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

								<h6><u>Recommendation</u></h6>
								<p className="">
									<ul>
										<li>Consider thorough product onboarding tutorial for first-time student tools, image search, drag and drop feature, navigation, etc. The current wrriten documentation is not student-friendly.</li>
										<li>Students do not tend to read long documentation and prefer interactive tutorial.</li>
									</ul>
								</p>


							</TabPanel>


							{/* <TabPanel>
								<p><strong>For the image-text matching activity, 8/11 participants at least made one error while doing it.</strong> They could not understand immediately where were they supposed to the drag and drop the images and text blocks.</p>
								<p> Although, none of them required assistance and were able to figure it out by themselves through trial and error.</p>
								<p className="pv16 text-center">
									<iframe width="560" height="315" src="https://www.youtube.com/embed/6xBzCDtP66k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</p>
								<p className="text-primary"><strong>Recommendation:</strong> There should be helper text, like "drag the image here" and "drag the text here", to let the  user know what action needs to be taken.</p>
							</TabPanel> */}

						</Tabs>



					</ProjectSection>

					<ProjectSection>

						<h5>Other Usability Issues</h5>
						<ul>
							<li>During student-paced activity, it was difficult for the participants to locate the navigation option.</li>
							<li><strong>Not all participants were familiar with the concept of entering URL in the address bar.</strong> Some of the participants simply searched on google (because google.com was the default screen). They were shown the auto-correct option by google, "hellosmarte.com", and the first page did not have the expected page in the result.</li>
							<li>Pencil tool is diffcult to be used with trackpad or mouse.</li>
						</ul>
					</ProjectSection>


					<ProjectSection type="bg">

						<h5>Reflection</h5>
						<p>Coming Soon</p>
					</ProjectSection>
				</PageWithProgress>
			</LayoutFull>
		)
	}
}

export default SmartTech
