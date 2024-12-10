import { useMenuList } from '@/hooks/useMenuList';
import { findRouteByPath, getParentPaths } from '@/router/RouteUtil';
import { useAppSelector } from '@/store/hooks';
import { memo, useEffect, useMemo, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { MenuLayout } from '../AppStyle';

interface Props extends MenuProps {
  isSidebar?: boolean;
  isHome?: boolean;
  ignoreHide?: boolean;
}

const AppMenu = memo((props: Props) => {
  const { isHome, isSidebar, ignoreHide, mode = 'horizontal', ...rest } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { collapsed, sidebarMode } = useAppSelector(
    state => ({
      collapsed: state.app.collapsed,
      sidebarMode: state.app.sidebarMode,
    }),
    shallowEqual,
  );
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { menuList } = useMenuList();

  const selectOpenKey = useMemo(() => {
    if (sidebarMode === 'blend' && !isSidebar) {
      const routeKey = getParentPaths(pathname, menuList);
      return [routeKey[0]];
    } else {
      return [pathname];
    }
  }, [pathname, sidebarMode]);

  const menuItems = useMemo(() => {
    if (sidebarMode === 'blend') {
      if (isSidebar) {
        // path的父级路由组成的数组
        const parentPathArr = getParentPaths(pathname, menuList);
        // 当前路由的信息
        const parentRoute = findRouteByPath(parentPathArr[0], menuList);
        if (parentRoute) {
          if (parentRoute.children) {
            return parentRoute.children;
          } else {
            return [parentRoute];
          }
        }
        return [];
      } else {
        return menuList.map(i => {
          const { key, label, icon } = i;
          return {
            key,
            label,
            icon,
          };
        });
      }
    } else {
      return menuList;
    }
  }, [sidebarMode, menuList, pathname, isSidebar]);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    setOpenKeys(keys);
  };

  useEffect(() => {
    if (isSidebar) {
      if (!collapsed) {
        setOpenKeys(getParentPaths(pathname, menuList));
      } else {
        setOpenKeys([]);
      }
    }
  }, [collapsed, pathname, isSidebar]);

  return (
    <MenuLayout
      {...rest}
      mode={mode}
      openKeys={openKeys}
      selectedKeys={selectOpenKey}
      items={menuItems as MenuProps['items']}
      onClick={e => navigate(e.key)}
      // 注意这个属性 `onOpenChange`
      onOpenChange={onOpenChange}
      style={{ border: 'none' }}
    />
  );
});

export default AppMenu;
