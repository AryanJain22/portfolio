export default function Skillcard(props){
    return (
        <div className="">
            <p>{props.id}</p>
            <img className="skill-img" src={props.simg} width="90px"/>
            <h2>{props.sname}</h2>
            <span>{props.sdescription}</span>
            <h3>{props.skill}</h3>
        </div>
    )
}