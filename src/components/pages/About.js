import education from '../../education';
import Edu from '../Edu';
import services from '../../services'
import Skillcard from '../Skillcard';

function eduCard(education) {
    return (
        <Edu
            key={education.id}
            class={education.class}
            school={education.school}
            grade={education.grade}
        />
    )
}

function createSkill(services) {
    return (
        <Skillcard
            key={services.id}
            sname={services.sname}
            skill={services.skill}
        />
    )
}

const About = () => {
    return (
        <div className="about">
            <div className="about-page">
                <div className="about-info">
                    <p>Hi, I am <span>Aryan Jain</span></p>
                    <h1>Web Developer Student</h1>
                    <p>
                        As a dedicated web developer, I thrive on transforming innovative ideas into seamless digital experiences. With a keen eye for design and a passion for coding, I specialize in crafting responsive and user-friendly websites.
                        <br />
                        <br />
                        My proficiency includes HTML, CSS, JavaScript, and various frameworks. I am committed to staying abreast of industry trends, ensuring my creations not only meet current standards but also anticipate future needs.
                        <br />
                        <br />
                        Detail-oriented and collaborative, I excel in translating clients' visions into functional and visually appealing websites.
                    </p>
                </div>
                <div className="about-img">
                    <img src={require('../../images/about-img.jpg')} width="350px" alt="about-pic"/>
                </div>
            </div>

            <div className="education cardprop">
                <h1>Education</h1>
                {education.map(eduCard)}
            </div>

            <div className='cardprop'>
                <h1>Skills</h1>
                {services.map(createSkill)}
            </div>
        </div>
    )
}

export default About