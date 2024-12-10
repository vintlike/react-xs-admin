import { useRouteList } from '@/hooks/useRouteList';
import { useAppSelector } from '@/store/hooks';
import { memo, useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import type { AsyncRouteType } from '@/store/modules/route';
import type { RouteObject } from 'react-router-dom';
import { baseRouter, whiteList } from './modules';
import { handlePowerRoute } from './RouteUtil';
import type { RouteItem } from './route';

const RouteView = memo(() => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const { handleRouteList } = useRouteList();

  // 为“/”根路由添加重定向
  const handleRedirect = (asyncRouter: AsyncRouteType[]) => {
    const routerList = handleRouteList(handlePowerRoute(asyncRouter));
    if (routerList.length) {
      routerList.push({
        path: '',
        element: <Navigate to={routerList[0].path || ''} />
      });
    }
    return [...routerList, ...whiteList];
  };

  const mapBaseRouter = (baseRouter: RouteItem[], asyncRouter: AsyncRouteType[]) => {
    return baseRouter.map((item) => {
      if (item.path === '/') {
        item.children = handleRedirect(asyncRouter);
      }
      return item;
    });
  };

  const [route, setRoute] = useState<RouteItem[]>(mapBaseRouter(baseRouter, asyncRouter));

  // 更新路由列表
  useEffect(() => {
    setRoute(mapBaseRouter(baseRouter, asyncRouter));
  }, [asyncRouter]);

  const routeElem = createBrowserRouter(route as RouteObject[]);

  return <RouterProvider router={routeElem} />;
});

export default RouteView;
