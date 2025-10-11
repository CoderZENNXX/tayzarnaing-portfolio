import "../CSS/About.css"
import { useState } from "react"

function About() {
    const [aboutJourney, setAboutJourney] = useState("coding")

    return (
        <div className="about" 
        style={{ background:
                    aboutJourney === "coding"
                    ? "linear-gradient(90deg, #8B5CF6, #00FFC6)"
                    : aboutJourney === "academics"
                    ? "linear-gradient(90deg, #8B5E3C, white)"
                    : "linear-gradient(90deg, #0EA5E9, #ddeeffff)",
                }}
        >
            <h1 className="about-title"  onClick={() => {
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
                <div className="milestones-container">
                    {aboutJourney === "coding" && (
                        <>
                            <h1 className="milestone-title milestone-title-1">
                                1. Scratch (2020 - 2021)
                                <p className="milestone-description milestone-description-1">
                                    In 2020, I began my coding journey with Scratch, a visual programming language designed for beginners. Scratch allows users to create interactive stories, games, and animations using a block-based interface. It is an excellent platform for learning the fundamentals of programming logic and concepts without the need to write complex code.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-2">
                                2. Python (2021 - 2022)
                                <p className="milestone-description milestone-description-2">
                                    In 2021, I started learning Python, a high-level, interpreted programming language known for its simplicity and readability. Python is widely used in various fields, including web development, data analysis, artificial intelligence, and scientific computing. Its extensive libraries and frameworks make it a versatile choice for both beginners and experienced developers.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-3">
                                3. Java (2022 - 2023)
                                <p className="milestone-description milestone-description-3">
                                    Although I learned Java in 2022, I didn't pursue it further. Java is a widely-used, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is commonly used for building enterprise-scale applications, mobile apps (especially Android), and large systems. Java's "write once, run anywhere" philosophy allows developers to create applications that can run on any device with a Java Virtual Machine (JVM).
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-4">
                                4. HTML & CSS (2023 - 2024)
                                <p className="milestone-description milestone-description-4">
                                    This was the start of my web development journey. HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for building web pages. HTML provides the structure and content of a webpage, while CSS is used to control the layout, design, and visual appearance. Together, they enable developers to create visually appealing and well-structured websites.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-5">
                                4. Bootstrap (2023 - 2024)
                                <p className="milestone-description milestone-description-5">
                                    I didn't learn Bootstrap in depth, but I used it a bit. Bootstrap is a popular front-end framework for developing responsive and mobile-first websites. It provides a collection of pre-designed components, such as buttons, forms, navigation bars, and modals, along with a grid system for creating flexible layouts. Bootstrap simplifies the web development process by offering a consistent design language and reducing the need for custom CSS.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-6">
                                5. JavaScript (2023 - 2024)
                                <p className="milestone-description milestone-description-6">
                                    This is where I fell in love with the web and started to take programming seriously. JavaScript is a versatile, high-level programming language that is primarily used for creating interactive and dynamic content on the web. It is an essential technology for front-end web development, allowing developers to enhance user experiences by adding features such as animations, form validation, and real-time updates. JavaScript can also be used on the server-side through environments like Node.js, making it a full-stack development language.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-7">
                                6. React JS (2024 - Present)
                                <p className="milestone-description milestone-description-7">
                                    Currently, I am learning React JS, a popular JavaScript library for building user interfaces, particularly single-page applications. React allows developers to create reusable UI components and manage the state of their applications efficiently. It uses a virtual DOM (Document Object Model) to optimize rendering performance and provides a declarative approach to building UIs. React is widely adopted in the web development community and is supported by a large ecosystem of tools and libraries.
                                </p>
                            </h1>
                        </>
                    )}
                    {aboutJourney === "academics" && (
                        <>
                            <h1 className="milestone-title milestone-title-1">
                                1. Early Basic Education (2015 - 2016)
                                <p className="milestone-description milestone-description-1">
                                    Completed my early education, where I developed a strong foundation in basic subjects such as mathematics, science, and language arts. Participated in various extracurricular activities that fostered my creativity and teamwork skills.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-2">
                                2. Self English Learning (2017 - Present)
                                <p className="milestone-description milestone-description-2">
                                    Began absorbing the English language unvoluntarily through various media such as books, movies, and online resources. This self-directed learning has significantly improved my vocabulary, comprehension, and communication skills over the years.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-3">
                                3. Middle School (2017 - 2023)
                                <p className="milestone-description milestone-description-3">
                                    Finished my middle school education through many schools, where I expanded my knowledge in core subjects and explored new areas of interest. Engaged in various clubs and organizations that helped me develop leadership skills and a sense of community.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-4">
                                4. English Language Classes (2022 - Present)
                                <p className="milestone-description milestone-description-3">
                                    Currently enrolled in English language classes to improve my proficiency in reading, writing, and speaking. These classes have helped me enhance my communication skills and gain confidence in using English in both academic and social settings.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-5">
                                5. High School (2023 - Present)
                                <p className="milestone-description milestone-description-5">
                                    Currently pursuing my high school education, where I am focusing on advanced subjects and preparing for higher education. Actively involved in various extracurricular activities, including sports, arts, and community service, to develop a well-rounded skill set.
                                </p>
                            </h1>
                        </>
                    )}
                    {aboutJourney === "contentCreation" && (
                        <>
                            <h1 className="milestone-title milestone-title-1">
                                1. YouTube Channel (2017 - 2020)
                                <p className="milestone-description milestone-description-1">
                                    Launched a YouTube channel in 2017, where I created and shared videos on various topics, tutorials, vlogs and gaming videos. The channel helped me develop my video production skills and connect with an audience interested in similar content.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-2">
                                2. Retirement (2021 - 2024)
                                <p className="milestone-description milestone-description-2">
                                    Took a break from content creation to focus on personal growth and explore other interests. During this period, I reflected on my content creation journey and planned for future endeavors in the field.
                                </p>
                            </h1>
                            <h1 className="milestone-title milestone-title-3">
                                3. Comeback With A Twist (2025 - Present)
                                <p className="milestone-description milestone-description-3">
                                    Made a comeback to content creation in 2025 but into a new field, education. This time, I focused on creating educational content, tutorials, and informative videos to help others learn new skills and knowledge. The experience gained from my previous content creation journey has been invaluable in producing high-quality and engaging educational material.
                                    <br />
                                    <a className="milestone-tiktok-link" href="https://www.tiktok.com/@official.free.insight" target="_blank">@official.free.insight</a>
                                    This is my TikTok account where I share educational content and insights on various topics. Follow me for informative videos and tips on learning and personal development.
                                </p>
                            </h1>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About