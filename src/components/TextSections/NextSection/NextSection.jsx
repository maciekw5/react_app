'use server'

import nextImage from '../../../assets/next.jpg'

export const NextSection = () => {
    return (
        <section id="next" className="section section-padding section-next">
            <div className="wrapper">
                <h2 className="section-title">Next - framework</h2>
                <div className="section-box">
                    <img
                        src={nextImage}
                        alt="Next image"
                        className="section-img"
                    />
                    <p className="section-box__text">
                        Next.js is a React framework that enables you to build
                        fast and efficient web applications with powerful
                        features out of the box. It&apos;s designed to make
                        development easier and improve performance by handling
                        many complex tasks for you. Here&apos;s a closer look at
                        what Next.js is, how it works, and what makes it
                        valuable for front-end development:
                    </p>

                    <ul className="section-box__list">
                        <h3 className="section-box__list-title">
                            1. Server-Side Rendering SSR
                        </h3>
                        <li className="section-box__list-item">
                            Unlike client-side rendering, where all rendering is
                            done in the user’s browser, SSR renders parts of the
                            webpage on the server before delivering it to the
                            client.
                        </li>
                        <li className="section-box__list-item">
                            This leads to faster load times and better
                            <span className="span-color">SEO</span>, as the
                            content is already available when the page loads,
                            making it easier for search engines to index.
                        </li>

                        <h3 className="section-box__list-title">
                            2. Static Site Generation SSG
                        </h3>
                        <li className="section-box__list-item">
                            Next.js supports static site generation, which
                            allows you to pre-render pages at build time. This
                            approach is particularly effective for content that
                            doesn&apos;t change frequently, like blogs or
                            marketing pages.
                        </li>
                        <li className="section-box__list-item">
                            Pages generated statically are super fast because
                            they are pre-built and served directly from a
                            content delivery network{' '}
                            <span className="span-color">CDN</span>.
                        </li>
                        <h3 className="section-box__list-title">
                            3. API Routes
                        </h3>
                        <li className="section-box__list-item">
                            Next.js allows you to create API routes as part of
                            your application, enabling you to define serverless
                            functions within the project itself. This can be
                            helpful for handling form submissions, database
                            interactions, and more.
                        </li>
                        <li className="section-box__list-item">
                            You don&apos;t need a separate backend server;
                            everything is handled within the Next.js project.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
