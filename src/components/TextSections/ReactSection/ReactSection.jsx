'use server'

import reactImage from '../../../assets/react.jpg'

export const ReactSection = () => {
    return (
        <section id="react" className="section section-padding section-react">
            <div className="wrapper">
                <h2 className="section-title">Why you should use React?</h2>
                <div className="section-box">
                    <img
                        className="section-img"
                        src={reactImage}
                        alt="React image"
                    />
                    <p className="section-box__text">
                        React is a popular JavaScript library for building user
                        interfaces, especially single-page applications SPAs
                        where a lot of dynamic content needs to be updated
                        without reloading the page. Here are some reasons why
                        <span className="span-color">React</span> is widely used
                        and what makes it a powerful choice for front-end
                        development:
                    </p>

                    <ul className="section-box__list">
                        <h3 className="section-box__list-title">
                            1. Component-Based Architecture
                        </h3>
                        <li className="section-box__list-item">
                            React uses components, which are reusable pieces of
                            code that manage their own structure, state, and
                            behavior. This modular approach helps keep your code
                            organized and easier to manage.
                        </li>
                        <li className="section-box__list-item">
                            Each component can be{' '}
                            <span className="span-color">reused</span> in
                            multiple places across the application, making
                            development faster and reducing redundancy.
                        </li>

                        <h3 className="section-box__list-title">
                            2. Declarative Syntax
                        </h3>
                        <li className="section-box__list-item">
                            React allows you to describe what the UI should look
                            like rather than how to achieve it. By writing
                            components declaratively, React takes care of
                            efficiently updating the DOM based on state changes.
                        </li>
                        <li className="section-box__list-item">
                            This makes code easier to read and maintain since
                            you&apos;re describing what you want to display
                            without manually handling DOM manipulations.
                        </li>
                        <h3 className="section-box__list-title">
                            3. Virtual DOM for High Performance
                        </h3>
                        <li className="section-box__list-item">
                            React uses a virtual DOM an in-memory representation
                            of the real DOM to make updates efficient. Instead
                            of manipulating the actual DOM directly, React first
                            updates the virtual DOM, calculates the changes, and
                            then applies the minimum number of updates to the
                            real DOM.
                        </li>
                        <li className="section-box__list-item">
                            This leads to fast rendering and improved
                            performance, especially in applications with complex
                            user interactions and large datasets.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
