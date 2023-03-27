import './Solutions.css';
import Card from "../components/Card.jsx";
import manageLogo from '../assets/solutions/manage.svg';
import designLogo from '../assets/solutions/design.svg';
import securityLogo from '../assets/solutions/security.svg';


function Solutions(){
    return (
        <div className={"section-solutions"}>
            <div className="solutions-container">
                <div className="solutions-title">
                <h1>Managed IT Services For San Antonio, Helotes, Fair Oaks, and Boerne Businesses</h1>
                <p>Make your vision a reality, evolve your digital product development, and help your teams focus on strategic goals.</p>
                </div>

                <Card logo={manageLogo} title={'Manage'} subtitle={'IT SOLUTIONS'} content={'Let us be your IT Support department! Take the hassle out of managing and monitoring your IT systems, including computer repair, and allowing you to focus on taking care of your clients.'}/>

                <Card logo={designLogo} title={'Design'} subtitle={'IT CONSTRUCTION'} content={'Improve your construction management process with our construction consulting services. Reduce project delays, communicate more effectively and improve documentation practices.'}/>

                <Card logo={securityLogo} title={'Secure'} subtitle={'DEVICES AND DATA'} content={'We work with a wide variety of regulatory agencies and industry-specific compliance requirements. Our services for proactive defense against online risks include Managed Detection Response (MDR), 24/7 Security Operations Center, CMMC, Cyber Insurance Compliance, Cloud Security, Cyber Resilience, and Incident Response.'}/>


            </div>



        </div>
    );
}

export default Solutions;