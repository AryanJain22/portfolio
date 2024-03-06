import React from 'react';
import Card from './Card';
import projectsData from '../project';

function createCard(project) {
    return (
        <Card
            key={project.id}
            img={project.img}
            proj_title={project.proj_title}
            description={project.description}
            link={project.link}
        />
    );
}

export default function Page4_1() {
    return (
        <div className="page4">
            <p>Some of my recent works</p>
            <h1>PROJECTS</h1>
            <div className='container4'>
                {projectsData.map(createCard)}
            </div>
        </div>
    );
}
