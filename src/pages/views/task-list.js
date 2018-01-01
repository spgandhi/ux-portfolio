import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const TaskList = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Task 1</Tab>
                    <Tab>Task 2</Tab>
                    <Tab>Task 3</Tab>
                    <Tab>Task 4</Tab>
                    <Tab>Task 5</Tab>
                    <Tab>Task 6</Tab>
                </TabList>

                <TabPanel>
                    <tr>
                        <td>
                            <p><strong>Research Question</strong></p>
                        </td>
                        <td>
                            <p><strong>Task</strong></p>
                        </td>
                        <td>
                            <p><strong>Data</strong></p>
                        </td>
                        <td>
                            <p><strong>Collection Methods</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><em><span>What issues do students encounter while logging in to the application?</span></em></p>
                        </td>
                        <td>
                            <p><span>Navigate to hellosmart.com and sign in to the application</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><span>Successful completion</span></li>
                                <li><span>Is assistance required</span></li>
                                <li><span>Feedback or questions asked by the student</span></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><span>Observation</span></li>
                                <li><span>Screen recording</span></li>
                                <li><span>Video recording</span></li>
                            </ul>
                        </td>
                    </tr>
                </TabPanel>

                <TabPanel>
                    <tr>
                        <td>
                            <p><strong>Research Question</strong></p>
                        </td>
                        <td>
                            <p><strong>Task</strong></p>
                        </td>
                        <td>
                            <p><strong>Data</strong></p>
                        </td>
                        <td>
                            <p><strong>Collection Methods</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><em><span>Are students able to join the correct class session and what issues do they encounter during the process?</span></em></p>
                        </td>
                        <td>
                            <p><span>Locate the class ID and use it to join the correct class</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><span>Successful completion</span></li>
                                <li><span>Whether assistance is required</span></li>
                                <li><span>Feedback or questions asked by the student</span></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><span>Observation</span></li>
                                <li><span>Screen recording</span></li>
                                <li><span>Video recording</span></li>
                            </ul>
                        </td>
                    </tr>
                </TabPanel>

                <TabPanel>
                    <tr>
                        <td>
                            <p><strong>Research Question</strong></p>
                        </td>
                        <td>
                            <p><strong>Task</strong></p>
                        </td>
                        <td>
                            <p><strong>Data</strong></p>
                        </td>
                        <td>
                            <p><strong>Collection Methods</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><em><span>What is the student experience and behavior during in-class teaching both in the student-paced and teacher-paced scenarios?</span></em></p>
                        </td>
                        <td>
                            <p><span>Follow along with teacher&rsquo;s slides, or follow along individually</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><span>Attentiveness or distraction caused by control of the pace</span></li>
                                <li><span>Able to locate controls and change slides</span></li>
                                <li><span>Feedback or questions asked by the student</span></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><span>Observation</span></li>
                                <li><span>Screen recording</span></li>
                                <li><span>Video recording</span></li>
                            </ul>
                        </td>
                    </tr>
                </TabPanel>

                <TabPanel>
                    <tr>
                        <td>
                            <p><strong>Research Question</strong></p>
                        </td>
                        <td>
                            <p><strong>Task</strong></p>
                        </td>
                        <td>
                            <p><strong>Data</strong></p>
                        </td>
                        <td>
                            <p><strong>Collection Methods</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><em><span>How easy or difficult is it for students to engage with and complete individual &ldquo;handout&rdquo; activities?</span></em></p>
                        </td>
                        <td>
                            <p><span>Start and complete activity individually</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><span>Successful completion</span></li>
                                <li><span>Whether assistance is required</span></li>
                                <li><span>Able to locate and use input tools (drawing, text, etc)</span></li>
                                <li><span>Feedback or questions asked by the student</span></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><span>Observation</span></li>
                                <li><span>Screen recording</span></li>
                                <li><span>Video recording</span></li>
                            </ul>
                        </td>
                    </tr>
                </TabPanel>

                <TabPanel>
                    <tr>
                        <td>
                            <p><strong>Research Question</strong></p>
                        </td>
                        <td>
                            <p><strong>Task</strong></p>
                        </td>
                        <td>
                            <p><strong>Data</strong></p>
                        </td>
                        <td>
                            <p><strong>Collection Methods</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><em><span>How easy or difficult is it for students to engage with and complete an in-class activity using the &ldquo;workspaces&rdquo; to collaborate?</span></em></p>
                        </td>
                        <td>
                            <p><span>Start and complete activity with partner or group</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><span>Successful completion</span></li>
                                <li><span>Whether assistance is required</span></li>
                                <li><span>Whether students collaborate or work independently</span></li>
                                <li><span>Able to locate and use input tools (drawing, text, etc)</span></li>
                                <li><span>Feedback or questions asked by the student</span></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><span>Observation</span></li>
                                <li><span>Screen recording</span></li>
                                <li><span>Video recording</span></li>
                            </ul>
                        </td>
                    </tr>
                </TabPanel>
                <TabPanel>
                    <tr>
                        <td>
                            <p><strong>Research Question</strong></p>
                        </td>
                        <td>
                            <p><strong>Task</strong></p>
                        </td>
                        <td>
                            <p><strong>Data</strong></p>
                        </td>
                        <td>
                            <p><strong>Collection Methods</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><em><span>Is this product is enhancing the student classroom experience or distracting?</span></em></p>
                        </td>
                        <td>
                            <p><span>Sum of all tasks collectively</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><span>Feedback or questions from students</span></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><span>Observation</span></li>
                                <li><span>Screen recording</span></li>
                                <li><span>Video recording</span></li>
                                <li><span>Post-test questionnaire</span></li>
                                <li><span>Follow-up probing questions</span></li>
                            </ul>
                        </td>
                    </tr>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TaskList;