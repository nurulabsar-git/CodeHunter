import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {courseId} = useParams()
    const style= {
        textAlign: 'center',
        padding: '50px',
     }
    return (
        <Container style={style}>
          <h4>This is course {courseId} details page</h4> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pKO9UjSeLew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
    );
};

export default CourseDetails;