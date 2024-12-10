import { FooterLayout } from './AppStyle';
import { Copyright } from './components/Copyright';

interface Props {
  children?: React.ReactNode | null;
  style?: React.CSSProperties;
  className?: string;
}

export const AppFooter: React.FC<Props> = props => {
  const { style, className, ...rest } = props;
  return (
    <FooterLayout {...rest} className="app-footer" style={style}>
      <Copyright />
    </FooterLayout>
  );
};
