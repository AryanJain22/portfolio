import React, { useState } from 'react';
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

export default function Page4() {
    const [startIndex, setStartIndex] = useState(0);
    const projectsToShow = projectsData.slice(startIndex, startIndex + 3);

    const handlePrevClick = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNextClick = () => {
        setStartIndex(prevIndex => Math.min(projectsData.length - 3, prevIndex + 1));
    };

    return (
        <div className="page4">
            <p>Some of my recent works</p>
            <h1>PROJECTS</h1>
            <div className='newbtn'>
                <button className='left btn-4' onClick={handlePrevClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </button>
                <button className='right btn-4' onClick={handleNextClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </button>
            </div>
            <div className='container4'>
                {projectsToShow.map(createCard)}
            </div>
        </div>
    );
}
