import "../CSS/About.css"
import { useState } from "react"

function About() {
    const [aboutJourney, setAboutJourney] = useState("coding")

    return (
        <div className="about">
            <h1 className="about-text"  onClick={() => {
                if  (aboutJourney === "coding") {
                    setAboutJourney("academics")
                }
                else if (aboutJourney === "academics") {
                    setAboutJourney("contentCreation")
                }
                else {
                    setAboutJourney("coding")
                }
            }}>
                {aboutJourney === "coding" && "My Coding Journey"}
                {aboutJourney === "academics" && "My Academic Journey"}
                {aboutJourney === "contentCreation" && "My Content Creation Journey"}
            </h1>

            <div className="roadmap">
                <h2 className="roadmap-title">
                    {aboutJourney === "coding" && (<>Coding<br />Journey</>)}
                    {aboutJourney === "academics" && (<>Academic<br />Journey</>)}
                    {aboutJourney === "contentCreation" && (<>Content Creation<br />Journey</>)}
                </h2>
                <div className="roadmap-line"></div>
                <div className="milestones-container">
                    {aboutJourney === "coding" && (
                        <>
                            <h3 className="milestone-title milestone-title-1">
                                1. Scratch (2020 - 2021)
                                <p className="milestone-description milestone-description-1">
                                    Scratch is a visual programming language and online community targeted primarily at children. Users can create projects using a block-like interface. It is a great way to introduce programming concepts without the need to write code.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-2">
                                2. Python (2021 - 2022)
                                <p className="milestone-description milestone-description-2">
                                    Python is a high-level, interpreted programming language known for its readability and simplicity. It is widely used in web development, data analysis, artificial intelligence, scientific computing, and more. Python's extensive libraries and frameworks make it a versatile choice for various applications.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-3">
                                3. Java (2022 - 2023)
                                <p className="milestone-description milestone-description-3">
                                    Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, mobile applications (especially Android apps), and web applications. Java's "write once, run anywhere" capability makes it a popular choice for cross-platform development.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-4">
                                4. HTML & CSS (2023 - 2024)
                                <p className="milestone-description milestone-description-4">
                                    HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for building web pages. HTML provides the structure and content of a webpage, while CSS is used to control the layout, design, and visual appearance. Together, they enable developers to create visually appealing and well-structured websites.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-5">
                                4. Bootstrap (2023 - 2024)
                                <p className="milestone-description milestone-description-5">
                                    Bootstrap is a popular front-end framework for developing responsive and mobile-first websites. It provides a collection of pre-designed components, such as buttons, forms, navigation bars, and grids, that help streamline the web development process. Bootstrap is built on HTML, CSS, and JavaScript, making it easy to create visually appealing and functional web pages quickly.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-6">
                                5. JavaScript (2023 - 2024)
                                <p className="milestone-description milestone-description-6">
                                    JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on websites. It is a core technology of the web, alongside HTML and CSS. JavaScript enables developers to implement complex features such as animations, form validations, and asynchronous content updates, enhancing the user experience on web pages.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-7">
                                6. React JS (2024 - Present)
                                <p className="milestone-description milestone-description-7">
                                    React JS is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React allows developers to create reusable UI components and manage the state of their applications efficiently. It uses a virtual DOM to optimize rendering performance, making it a powerful tool for building dynamic and responsive web applications.
                                </p>
                            </h3>
                        </>
                    )}
                    {aboutJourney === "academics" && (
                        <>
                            <h3 className="milestone-title milestone-title-1">
                                1. Early Basic Education (2015 - 2016)
                                <p className="milestone-description milestone-description-1">
                                    Completed my early education, where I developed a strong foundation in basic subjects such as mathematics, science, and language arts. Participated in various extracurricular activities that fostered my creativity and teamwork skills.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-2">
                                2. Self English Learning (2017 - Present)
                                <p className="milestone-description milestone-description-2">
                                    Began absorbing the English language unvoluntarily through various media such as books, movies, and online resources. This self-directed learning has significantly improved my vocabulary, comprehension, and communication skills over the years.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-3">
                                3. Middle School (2017 - 2023)
                                <p className="milestone-description milestone-description-3">
                                    Finished my middle school education through many schools, where I expanded my knowledge in core subjects and explored new areas of interest. Engaged in various clubs and organizations that helped me develop leadership skills and a sense of community.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-4">
                                4. English Language Classes (2022 - Present)
                                <p className="milestone-description milestone-description-3">
                                    Currently enrolled in English language classes to improve my proficiency in reading, writing, and speaking. These classes have helped me enhance my communication skills and gain confidence in using English in both academic and social settings.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-5">
                                5. High School (2023 - Present)
                                <p className="milestone-description milestone-description-5">
                                    Currently pursuing my high school education, where I am focusing on advanced subjects and preparing for higher education. Actively involved in various extracurricular activities, including sports, arts, and community service, to develop a well-rounded skill set.
                                </p>
                            </h3>
                        </>
                    )}
                    {aboutJourney === "contentCreation" && (
                        <>
                            <h3 className="milestone-title milestone-title-1">
                                1. YouTube Channel (2017 - 2020)
                                <p className="milestone-description milestone-description-1">
                                    Launched a YouTube channel in 2017, where I created and shared videos on various topics, tutorials, vlogs and gaming videos. The channel helped me develop my video production skills and connect with an audience interested in similar content.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-2">
                                2. Retirement (2021 - 2024)
                                <p className="milestone-description milestone-description-2">
                                    Took a break from content creation to focus on personal growth and explore other interests. During this period, I reflected on my content creation journey and planned for future endeavors in the field.
                                </p>
                            </h3>
                            <h3 className="milestone-title milestone-title-3">
                                3. Comeback With A Twist (2025 - Present)
                                <p className="milestone-description milestone-description-3">
                                    Made a comeback to content creation in 2025 but into a new field, education. This time, I focused on creating educational content, tutorials, and informative videos to help others learn new skills and knowledge. The experience gained from my previous content creation journey has been invaluable in producing high-quality and engaging educational material.
                                    <br />
                                    <a className="milestone-tiktok-link" href="https://www.tiktok.com/@official.free.insight" target="_blank">@official.free.insight</a>
                                    This is my TikTok account where I share educational content and insights on various topics. Follow me for informative videos and tips on learning and personal development.
                                </p>
                            </h3>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About