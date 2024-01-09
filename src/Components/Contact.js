import './Contact.css';

export default function Contact() {
    return (
        <>
            <div className="container">

                <form action="#">
                    <h2 className="heading">Contact <span>Me!</span></h2>
                    <div className="input-box">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />

                        <div className="input-box">
                            <input type="number" placeholder="Mobile Number" />
                            <input type="text" placeholder="Email Subject" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}