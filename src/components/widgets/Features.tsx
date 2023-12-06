import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features = ({ header, items, columns, isBeforeContent, isAfterContent, id, isDark = false }: FeaturesProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    isDark={isDark}
    containerClass={`scroll-mt-16 max-w-6xl ${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${
      isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''
    }`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={2}
      containerClass={`pb-6 ${columns === 2 ? 'max-w-5xl' : ''}`}
      panelClass={`flex max-w-full ${columns === 2 ? 'sm:max-w-md mx-auto' : ''}`}
      iconClass="h-12 w-12 flex items-center justify-center rounded-md text-white bg-primary-900 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="justify-start"
    />
  </WidgetWrapper>
);

export default Features;
