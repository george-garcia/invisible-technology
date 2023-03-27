import './Sponsors.css';
import logo1 from '../logos/business-insider.png';
import logo2 from '../logos/forbes.png';
import logo3 from '../logos/techcrunch.png';
import logo4 from '../logos/the-new-york-times.png';
import logo5 from '../logos/usa-today.png';

function Sponsors() {
    return (
        <div className="container">
            <div className="sponsors">
                <img src={logo1} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo3} alt=""/>
                <img src={logo4} alt=""/>
                <img src={logo5} alt=""/>
            </div>
        </div>
    );
}

export default Sponsors;