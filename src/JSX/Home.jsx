import "../CSS/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="profile">
        <div className="profile-left">
          <img src="/placeholder.png" alt="profile-pic" className="profile-pic" />
          <h1 className="name">Tayzar Naing</h1>
          <h2 className="professions">Web Developer | Educational Content Creator | Academic Pursuer</h2>
        </div>

        <div className="profile-right">
          <p className="professions-short-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus corporis distinctio illo itaque quo voluptatum in amet autem aut ex ratione odit doloribus?</p>
          <button className="contact-me-btn">Contact Me</button>
        </div>
      </div>

      <div className="profession-text">
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis sunt tempore cum minus officiis nesciunt numquam incidunt, perferendis ipsa architecto non quasi quis commodi ab eveniet totam iusto esse quas.</h3>
      </div>
    </div>
  )
}

export default Home