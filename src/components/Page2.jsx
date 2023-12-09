import { Link } from 'react-router-dom'

export default function Page2() {
    return (
        <div className="page2">
            <div className="container">
                <div className="written-info">
                    <p>Let me introduce myself</p>
                    <h1>ABOUT ME</h1>
                    <span>Pursuing B.Tech Computer Science. Creating various projects using new Technologies. COPY-CREATE-INNOVATE.</span>
                    <br />
                    <Link to="/about"><button className='work'>READ MORE</button></Link>
                    <Link to="/projects"><button className='btn-1'>MY WORK</button></Link>
                </div>
                <div className="image-box">
                    <img src={require('../images/black marble insta post (4).png')} alt="Profile Pic" width="80%" />
                </div>
            </div>
        </div>
    )
}