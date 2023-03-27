import './Card.css';

function Card({logo, title, subtitle, content}){
    return (
        <div className={"section-card"}>
            <div className="card-title">
                <img src={logo} alt=""/>
                <div>
                <h2>{title}</h2>
                <h6 className={"card-subtitle"}>{subtitle}</h6>
                </div>
            </div>


            <p className={"card-content"}>{content}</p>
        </div>
    );
}

export default Card;