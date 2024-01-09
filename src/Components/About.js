import './About.css';
import AboutImg from '../Images/about.png';

export default function About() {
    return (
        <>
            <div className="container">
                <div className='contant'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae culpa voluptas, distinctio eveniet ducimus sit voluptatibus, consequuntur eaque harum commodi illo debitis vitae, delectus quasi praesentium autem alias aut voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea est alias quam quae numquam ipsum consequatur earum veritatis minus accusantium debitis corrupti, molestiae non eveniet, animi placeat at quis? Autem inventore labore cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea est alias quam quae numquam ipsum consequatur earum veritatis minus accusantium debitis corrupti, molestiae non eveniet, animi placeat at quis? Autem inventore labore cum.</p>
                </div>
                <img src={AboutImg} alt="" />
            </div>
        </>
    )
}
