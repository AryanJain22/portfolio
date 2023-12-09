import Skillcard from './Skillcard'
import services from '../services'

function createSkill(services) {
    return (
        <Skillcard
            key={services.id}
            simg={services.simg}
            sname={services.sname}
            sdescription={services.sdescription}
        />
    )
}

export default function Page3() {
    return (

        <div className='page3'>
            <div className='heading3'>
                <p>What i will do for you</p>
                <h1>SERVICES</h1>
            </div>
            <div className='container3'>
                {services.map(createSkill)}
            </div>
        </div>
    )
}