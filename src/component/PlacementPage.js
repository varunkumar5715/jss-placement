import React from 'react';
import './PlacementPage.css';
import logo1 from '../assest/logo1.png';
import logo2 from '../assest/logo2.png';
import logo3 from '../assest/logo3.jpg';
import logo4 from '../assest/logo4.png';
import logo5 from '../assest/logo5.png';

const PlacementPage = () => {
    const handleDownload = () => {
        const element = document.createElement("a");
        element.href = "/placement_cell.docx"; // Path to your Word document
        element.download = "placement_cell.docx";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element); // Clean up the DOM
    };

    return (
        <div className="placement-page">
            <header className="header">
                <h1>PLACEMENT CELL</h1>
            </header>
            <main className="content">
                <section className="about">
                    <h2 className="section-title">About</h2>
                    <p>The Placement Cell at JSSISH was initiated to support students professional skills and employability. The Placement Cell has been instrumental in enhancing students' career development and fostering relationships between JSSISH and the corporate world. The placement cell also provides the opportunity for students to achieve psychomotor skills and soft skills required for employment. It prepares the student to work in their area of the interest. Training activities organized throughout the year prepares the students for the campus recruitment drive. This will help the students to enter into a successful career immediately after their academic and clinical training.</p>
                    <h4>Overall Goal</h4>
                    <p>To develop the training and placement cell as a means of career guidance and counselling and higher learning for the students.</p>
                    <h4>Objectives</h4> 
                    <ul>
                        <li>To enhance the clinical skills of the students.</li>
                        <li>To improvise soft skills in the students.</li>
                        <li>To motivate students for higher studies and make them academically potential.</li>
                        <li>To facilitate placement for students.</li>
                        <li>To organize training program for students to improve technical, clinical and soft skills.</li>
                    </ul>
                    <h4>Roles and Responsibilities</h4>
                    <ul>
                        <li>To facilitate career opportunities for eligible students.</li>
                        <li>To invite different organizations for campus recruitment.</li>
                        <li>To motivate and counsel the students about current practices in different areas such as clinical setup, hospital setup, academic institutions.</li>
                        <li>To prepare the students for recruitment.</li>
                        <li>To organize career talks and personality development programmes.</li>
                    </ul>
                </section>


                <section className="logos">
                    <h2 className="section-title">Our Recruiters</h2>
                    <div className="logo-container">
                        <img src={logo1} alt="Company Logo 1" />
                        <img src={logo2} alt="Company Logo 2" />
                        <img src={logo3} alt="Company Logo 3" />
                        <img src={logo4} alt="Company Logo 4" />
                        <img src={logo5} alt="Company Logo 5" />
                    </div>
                </section>
                <section className="statistics">
                    <h2 className="section-title">Statistics</h2>
                    <div className="table-section">
                        <h3 className="table-title">PG (Speech)</h3>
                        <table className="statistics-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Number of Students</th>
                                    <th>Placed</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>2022</td>
                                    <td>12</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>2023</td>
                                    <td>9</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-section">
                        <h3 className="table-title">PG (Audiology)</h3>
                        <table className="statistics-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Number of Students</th>
                                    <th>Placed</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>2022</td>
                                    <td>14</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>2023</td>
                                    <td>13</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="contact-details">
                    <h2>Contact:</h2>
                    <div className="contact-item">
                        <strong>Placement Officers</strong>
                        <h3>Dr. Hemanth, Professor in Audiology</h3>
                    </div>
                    <div className="contact-item">
                        <h3>Mrs. Sindhu, Assistant Professor in Audiology</h3>
                    </div>
                    <div className="contact-item">
                        <h3>Dr. Niharika, Assistant Professor in Speech</h3>
                    </div>
                    <p>Email: placementcell@jssish.in</p>
                    <p>Phone: 8762005941, 7019440755</p>
                </div>
                <div className="download-item">
                    <h4>Mandate Document</h4>
                    <button onClick={handleDownload}>Download</button>
                </div>
            </footer>
        </div>
    );
};

export default PlacementPage;
