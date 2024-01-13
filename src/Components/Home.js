
import '../App.css';
import HomeImg from '../Images/side1.png';


export default function Home() {
    return (
        <>
            <div className="home">
                <img src={HomeImg} alt="" />
                <div className="item">
                    <h1>Voice Recognition</h1>
                    <h3>And It's <span>convert voice to text</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, et nihil? Molestiae reiciendis, quia id temporibus perspiciatis pariatur alias quibusdam dolor dolores cumque adipisci blanditiis nihil. Facere recusandae, labore quisquam officia aliquid eius accusamus sed pariatur consequuntur nisi, minima dolores repellendus cumque. Ipsam excepturi at inventore nulla debitis quos asperiores voluptatibus culpa labore consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab exercitationem a nostrum eaque, consequuntur repellat distinctio, modi sit voluptates labore quod! Numquam minus mollitia quasi explicabo aperiam. Aspernatur, labore?</p>
                    <a href="/" className="btn" >Read more</a>
                </div>
            </div>
        </>
    )
}
