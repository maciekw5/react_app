import { NextSection } from './TextSections/NextSection/NextSection'
import { ReactSection } from './TextSections/ReactSection/ReactSection'
import { TextSection } from './TextSections/TextSection/TextSection'
import { ViteSection } from './TextSections/ViteSection/ViteSection'
import nextImage from '../assets/next.jpg'
nextObj = {
    sectionId: 'Next',
    imgPath: nextImage,
    sectionTitle: 'Next - framework',
    sectionBox:
        "Next.js is a React framework that enables you to build fast and	efficient web applications with powerful features out of the box. It's designed to make development easier and improve performance by handling many complex tasks for you. Here's a closer look at what Next.js is, how it works, and what makes it valuable for front-end development:",
    listTitle: [
        'Server-Side Rendering SSR',
        'Static Site Generation SSG',
        'API Routes',
    ],
    listContent: [
        [
            'Unlike client-side rendering, where all rendering is done in the users browser, SSR renders parts of the webpage on the server before delivering it to the client.',
            'This leads to faster load times and better SEO, as the content is already available when the page loads, making it easier for search engines to index.',
        ],
        [
            "Next.js supports static site generation, which allows you to pre-render pages at build time. This approach is particularly effective for content that doesn't change frequently, like blogs or marketing pages.",
            'Pages generated statically are super fast because they are pre-built and served directly from a content delivery network CDN',
        ],
        [
            'Next.js allows you to create API routes as part of your application, enabling you to define serverless functions within the project itself. This can be helpful for handling form submissions, database interactions, and more.',
            "You don't need a separate backend server; everything is handled within the Next.js project.",
        ],
    ],
}
const Main = () => {
    return (
        <>
            <TextSection
                sectionId={next.sectionId}
                imgPath={next.imgPath}
                sectionTitle={next.sectionTitle}
                sectionBox={next.sectionBox}
                listTitle={next.listTitle}
                listContent={next.listContent}
            />
            <ReactSection />
            <NextSection />
            <ViteSection />
        </>
    )
}

export default Main
