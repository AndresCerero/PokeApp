import Newsletter from './Newsletter';
import useNewsletter from './useNewsletter';
import type {NewsletterSubscribeContainerProps} from './types';

const NewsletterContainer = (props: NewsletterSubscribeContainerProps) => {
  const useNewsletterprops = useNewsletter();
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Newsletter {...props} {...useNewsletterprops} />;
};

export default NewsletterContainer;
