import { Link } from 'react-router-dom';

export default function Page1() {
    return (
        <div className="page1">
            <span>Hello, This is</span>
            <h5>Aryan Jain</h5>
            <img className='main-img' src={require('../images/main_page_self_pic.png')} width="50%" alt="Header-pic" />
            <p className='me'>I am a Full Stack Developer. <br />I love to design and make<br /> new web experiences for the people.</p>
            <Link to="/projects"><button className='btn-work'>see my work</button></Link>
        </div>
    );
}