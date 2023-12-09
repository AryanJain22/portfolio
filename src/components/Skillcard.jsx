export default function Skillcard(props){
    return (
        <div className="skill-card">
            <p>{props.id}</p>
            <img src={props.simg}/>
            <h2>{props.sname}</h2>
            <span>{props.sdescription}</span>
            <p>{props.skill}</p>
        </div>
    )
}