import { ReactSection } from './TextSections/ReactSection/ReactSection';
import { TextSection } from './TextSections/TextSection/TextSection.jsx';
import { ViteSection } from './TextSections/ViteSection/ViteSection';
import { next } from '../../scripts/contentObjects.js'

const Main = () => {
	return (
		<>
			<ReactSection />
			<TextSection
				sectionId={next.sectionId}
				imgPath={next.imgPath}
				sectionTitle={next.sectionTitle}
				sectionBox={next.sectionBox}
				listTitle={next.listTitle}
				listContent={next.listContent}
			/>
			<ViteSection />
		</>
	);
};

export default Main;
