import './HeroPage.css';

function HeroPage() {
    return (
        <div className="section-hero-page hero-page-overlay hero-page-background">
            <h1>Accelerate your business with reliable IT solutions</h1>
            <p>Give us a call and let us show you what fast, friendly and highly-responsive outsourced managed IT services should be for your small to medium business: 210-888-9050</p>
            <div className="hero-page--buttons">
                <button className="btn">GET A QUOTE</button>
                <button className="btn">LEARN MORE</button>
            </div>
        </div>
    );
}

export default HeroPage;