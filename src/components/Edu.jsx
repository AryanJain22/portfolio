export default function Edu(props) {
    return (
        <div className="edu-card">
            <p>{props.id}</p>
            <p className="std">{props.class}</p>
            <p className="school">{props.school}</p>
            <p className="grade">{props.grade}</p>
        </div>
    )
}
