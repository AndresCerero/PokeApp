export interface NewsletterSubscribeContainerProps {
  title: string;
  placeholder: string;
  buttonlabel: string;
  successMessage: string;
  retryButtonLabel: string;
}

export interface UseNewsletterSubscribeProps {
  email: string;
  success: boolean;
  emailList: string[];
  setEmail: (value: React.SetStateAction<string>) => void;
  handleSubmit: () => void;
  handleRetry: () => void;
}

export type NewsletterProps = NewsletterSubscribeContainerProps & UseNewsletterSubscribeProps;

//3 types |Content||
