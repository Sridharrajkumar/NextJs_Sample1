
import Link from 'next/link';
import { Fragment } from 'react';


const AboutPage = () => {


    const developer = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    ]
    
   

    return (
      <Fragment>
            <h1>Delevoper List</h1>
            <ul>
                {developer.map(dev => {
                    //return (<li key={dev.id}><Link href={`/${dev.id}`}>{dev.name}</Link></li>);
                    return (<li><Link href={`/aboutus/${dev.id}`}>{dev.name}</Link></li>)
                }) }
            </ul>
            
      </Fragment>
    );
  };
export default AboutPage;
  
