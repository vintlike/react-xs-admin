import { setStoreMultiTabs } from '@/store/modules/route';
import { useDispatch } from 'react-redux';
import type { MultiTabsType } from '@/store/modules/route';

export const useInfoPageTabs = () => {
  const dispatch = useDispatch();
  const handleTabs = (pateType: 'qurey' | 'params', type: 'add' | 'update', id: number) => {
    let tabs: MultiTabsType;

    if (pateType === 'params') {
      tabs = {
        key: `/details-page/details-params/${id}`,
        label: `Params-${id}`,
        localeLabel: `layout.menu.detailsPage`
      };
    } else {
      tabs = {
        key: `/details-page/details-info?id=${id}`,
        label: `-${id}`,
        localeLabel: `layout.menu.detailsPage`
      };
    }
    dispatch(setStoreMultiTabs({ type, tabs }));
  };

  return { handleTabs };
};