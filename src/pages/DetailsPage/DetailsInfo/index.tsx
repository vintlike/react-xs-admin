import { useLocale } from '@/locales';
import { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useInfoPageTabs } from '../hooks/useInfoPageTabs';

const DatailsInfo = memo(() => {
  const [id, setId] = useState<string>();
  const [searchParams] = useSearchParams();
  const { handleTabs } = useInfoPageTabs();
  const intl = useLocale();

  useEffect(() => {
    setId(searchParams.get('id') || '');
    handleTabs('qurey', 'update', Number(searchParams.get('id')));
  }, []);
  return (
    <>
      {intl.formatMessage({ id: 'layout.menu.detailsPage' })}-{id}
    </>
  );
});

export default DatailsInfo;
