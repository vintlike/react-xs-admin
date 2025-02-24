import { useLocale } from '@/locales';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { useInfoPageTabs } from './hooks/useInfoPageTabs';

const DateilsPage = () => {
  const navigate = useNavigate();
  const intl = useLocale();

  const { handleTabs } = useInfoPageTabs();
  const qureyChange = (pateType: 'qurey' | 'params', i: number) => {
    let path = `/details-page/details-info?id=${i}`;
    if (pateType === 'params') {
      path = `/details-page/details-params/${i}`;
    }
    handleTabs(pateType, 'add', i);
    navigate(path);
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Button key={item} style={{ marginRight: 12 }} onClick={() => qureyChange('qurey', item)}>
              {intl.formatMessage({ id: 'layout.menu.detailsPage' })}-{item}
            </Button>
          );
        })}
      </div>
      <div style={{ marginTop: 12 }}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Button key={item} style={{ marginRight: 12 }} onClick={() => qureyChange('params', item)}>
              {intl.formatMessage({ id: 'layout.menu.detailsPage' })}Params-{item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default DateilsPage;
