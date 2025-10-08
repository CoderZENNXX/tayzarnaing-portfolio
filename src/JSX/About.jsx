import "../CSS/About.css"

function About() {
    
    return (
        <div className="about">
            <h2 className="about-text">
                Coding: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut ab tenetur hic iure itaque quos ipsam qui eum natus aliquam iusto vel error, quibusdam molestiae harum illo eveniet quia.
                <hr />
                Academics: Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat a quia reprehenderit? Culpa laboriosam maiores, perferendis illum esse doloremque laborum reiciendis pariatur tenetur. Praesentium tempora nam eveniet nobis omnis.
                <hr />
                Content Creation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum cupiditate id perspiciatis tempore debitis sint enim quos dolor sapiente molestiae illum blanditiis commodi hic nesciunt minus ducimus quo necessitatibus.
            </h2>

            <div className="coding-roadmap">
                <h1 className="coding-roadmap-title">Coding Roadmap</h1>
                <div className="coding-roadmap-line"></div>
                <div className="milestones-container">
                    <h3 className="milestone-title milestone-title-1">
                        1. Scratch
                        <p className="milestone-description milestone-description-1">
                            Scratch is a visual programming language and online community targeted primarily at children. Users can create projects using a block-like interface. It is a great way to introduce programming concepts without the need to write code.
                        </p>
                    </h3>
                    <h3 className="milestone-title milestone-title-2">
                        2. Python
                        <p className="milestone-description milestone-description-2">
                            Python is a high-level, interpreted programming language known for its readability and simplicity. It is widely used in web development, data analysis, artificial intelligence, scientific computing, and more. Python's extensive libraries and frameworks make it a versatile choice for various applications.
                        </p>
                    </h3>
                    <h3 className="milestone-title milestone-title-3">
                        3. Java
                        <p className="milestone-description milestone-description-3">
                            Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, mobile applications (especially Android apps), and web applications. Java's "write once, run anywhere" capability makes it a popular choice for cross-platform development.
                        </p>
                    </h3>
                    <h3 className="milestone-title milestone-title-4">
                        4. HTML & CSS
                        <p className="milestone-description milestone-description-4">
                            HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for building web pages. HTML provides the structure and content of a webpage, while CSS is used to control the layout, design, and visual appearance. Together, they enable developers to create visually appealing and well-structured websites.
                        </p>
                    </h3>
                    <h3 className="milestone-title milestone-title-5">
                        4. Bootstrap
                        <p className="milestone-description milestone-description-5">
                            Bootstrap is a popular front-end framework for developing responsive and mobile-first websites. It provides a collection of pre-designed components, such as buttons, forms, navigation bars, and grids, that help streamline the web development process. Bootstrap is built on HTML, CSS, and JavaScript, making it easy to create visually appealing and functional web pages quickly.
                        </p>
                    </h3>
                    <h3 className="milestone-title milestone-title-6">
                        5. JavaScript
                        <p className="milestone-description milestone-description-6">
                            JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on websites. It is a core technology of the web, alongside HTML and CSS. JavaScript enables developers to implement complex features such as animations, form validations, and asynchronous content updates, enhancing the user experience on web pages.
                        </p>
                    </h3>
                    <h3 className="milestone-title milestone-title-7">
                        6. React JS
                        <p className="milestone-description milestone-description-7">
                            React JS is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React allows developers to create reusable UI components and manage the state of their applications efficiently. It uses a virtual DOM to optimize rendering performance, making it a powerful tool for building dynamic and responsive web applications.
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About