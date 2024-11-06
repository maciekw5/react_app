/* eslint-disable react/prop-types */
export const TextSection = (props) => {
    const {
        sectionId,
        imgPath,
        sectionTitle,
        sectionBox,
        listTitle,
        listContent,
    } = props

    return (
        <section
            id={sectionId}
            className="section section-padding section-react"
        >
            <div className="wrapper">
                <h2 className="section-title">{sectionTitle}</h2>
                <div className="section-box">
                    <img
                        className="section-img"
                        src={imgPath}
                        alt={`${sectionId} Image`}
                    />
                    <p className="section-box__text">{sectionBox}</p>

                    <ul className="section-box__list">
                        <h3 className="section-box__list-title">
                            1. {listTitle[0]}
                        </h3>
                        <li className="section-box__list-item">
                            {listContent[0][0]}
                        </li>
                        <li className="section-box__list-item">
                            {listContent[0][1]}
                        </li>
                        <h3 className="section-box__list-title">
                            2. {listTitle[1]}
                        </h3>
                        <li className="section-box__list-item">
                            {listContent[1][0]}
                        </li>
                        <li className="section-box__list-item">
                            {listContent[1][1]}
                        </li>
                        <h3 className="section-box__list-title">
                            3. {listTitle[2]}
                        </h3>
                        <li className="section-box__list-item">
                            {listContent[2][0]}
                        </li>
                        <li className="section-box__list-item">
                            {listContent[2][1]}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
