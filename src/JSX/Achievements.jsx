import "../CSS/Achievements.css"

function Achievements() {

    return (
        <div className="achievements">
            <div className="stem-olympiad-2024 achievement-card">
                <img src="./digital-silver-medal-certificate-2024.jpg" className="stem-olympiad-2024-img achievement-img" />
                <h3 className="stem-olympiad-2024-description achievement-description">
                    <h2 className="stem-olympiad-2024-title achievement-title">Digital Silver Medal Certificate</h2>
                    - International STEM Olympiad
                    <br />
                    Received: 2024
                    <br />
                    <a href="https://stemolympiad.org" target="_blank" className="stem-olympiad-2024-link achievement-link"><i>stemolympiad.org</i></a>
                </h3>
            </div>

            <div className="upchieve-tutor-2025 achievement-card">
                <img src="./upchieve-national-tutor.png" className="upchieve-tutor-2025-img achievement-img" />
                <h3 className="upchieve-tutor-2025-description achievement-description">
                    <h2 className="upchieve-tutor-2025-title achievement-title">Certified Tutor</h2>
                    - UPchieve
                    <br />
                    Received: 2025
                    <br />
                    <a href="https://upchieve.org" target="_blank" className="upchieve-tutor-2025-link achievement-link"><i>upchieve.org</i></a>
                </h3>
            </div>
        </div>
    )
}

export default Achievements