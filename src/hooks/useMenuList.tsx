import { useRouteList } from '@/hooks/useRouteList';
import { handlePowerRoute } from '@/router/RouteUtil';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

export const useMenuList = () => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const { routeListToMenu } = useRouteList();

  const menuList = useMemo(() => {
    return routeListToMenu(handlePowerRoute(asyncRouter));
  }, [asyncRouter]);

  return { menuList };
};
