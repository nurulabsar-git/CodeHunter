import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import python from '../../../images/python.png';
import js from '../../../images/js.png';
import C from '../../../images/c.png';
const coursesData = [
    {
     id: 0,
     courseName: 'JavaScript',
     logo: js,
    },
    {   id: 1,
        courseName: 'Python',
        logo: python,
    },
    {   id: 2,
        courseName: 'C++',
        logo: C,
    },
    {   id: 3,
        courseName: 'JavaScript',
        logo: js,
       },
       {   id: 4,
           courseName: 'Python',
           logo: python,
       },
       {   id: 5,
           courseName: 'C++',
           logo: C,
       },
       { id: 6,
        courseName: 'JavaScript',
        logo: js,
       },
       {   id: 7,
           courseName: 'Python',
           logo: python,
       },
       {   id: 8,
           courseName: 'C++',
           logo: C,
       },
       { id: 9,
        courseName: 'JavaScript',
        logo: js,
       },
       {  id: 10,
           courseName: 'Python',
           logo: python,
       },
       {   id: 11,
           courseName: 'C++',
           logo: C,
       },
]
const Courses = () => {
    const history = useHistory();
    const styles ={display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '10px'}
    const cardStyle = {boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', justifyContent: 'space-around',  border: '1.8px solid #dce2e5', borderRadius: '4px', textAlign: 'center', height: '196px', width: '174px', marginBottom: '10px', padding: '10px'}
    
    const handleCourseDetails = (dynamicId) => {
       history.push(`/courseDetails/${dynamicId}`)
    }
    return (
        <Container>
        <h2 className="text-center m-5">What would you like to learn?</h2>
        <div style={styles}>
            {
                coursesData?.map((datum) => 
                <div style={cardStyle} key={datum.courseName} onClick={() => handleCourseDetails(datum.id)}>
                    <img src={datum.logo} alt={datum?.courseName} style={{width: '110px' ,borderRadius: '50%'}} />
                    <h4>{datum.courseName}</h4>
                    
                </div>
                
                )
                
            }
        </div>
        </Container>
    );
};

export default Courses;