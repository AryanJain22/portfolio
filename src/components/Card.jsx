// import Img from './Img'

export default function Card(props) {
    return (
        <div className="card">
            <p>{props.id}</p>
            <img className="img-proj" src={props.img} />
            <div className="title-box">
                <h2>{props.proj_title}</h2>
                <span>{props.description}</span>
                <br></br>
                <a href={props.link}>Link</a>
            </div>
        </div>
    );
}