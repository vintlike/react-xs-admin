import { FormattedMessage } from '@/components/FormattedMessage';
import Layout from '@/layouts/app/AppContainer';
import Authority from '@/layouts/Authority';
import {
  AppstoreOutlined,
  DatabaseOutlined,
  HomeOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
import type { RouteItem } from '@/router/route';
import {
  DetailsInfo,
  DetailsPage,
  DetailsParams,
  Home,
  Menu1_1,
  Menu1_2,
  Permissions,
  TestPermissionsA,
  TestPermissionsB
} from '../lazy/view';
import { ErrorElement, ErrorPage403, Login, Refresh } from '../lazy/whiteList';

export const defaultRoute: RouteItem[] = [
  {
    path: '/home',
    id: 'Home',
    element: <Home />,
    handle: {
      label: FormattedMessage({ id: 'layout.menu.home' }),
      icon: <HomeOutlined />
    }
  },
  {
    path: '/nested',
    id: 'Nested',
    redirect: '/nested/menu1',
    handle: {
      label: FormattedMessage({ id: 'layout.menu.nesting' }),
      icon: <AppstoreOutlined />
    },
    children: [
      {
        path: 'menu1',
        id: 'Menu1',
        redirect: '/nested/menu1/menu1-1',
        handle: { label: 'menu-1' },
        children: [
          {
            path: 'menu1-1',
            id: 'Menu1-1',
            element: <Menu1_1 />,
            handle: { label: 'menu-1-1' }
          },
          {
            path: 'menu1-2',
            id: 'Menu1-2',
            element: <Menu1_2 />,
            handle: { label: 'menu-1-2' }
          }
        ]
      }
    ]
  },
  {
    path: '/power',
    id: 'Power',
    redirect: '/power/permissions',
    handle: {
      label: FormattedMessage({ id: 'layout.menu.permissions' }),
      icon: <UserSwitchOutlined />
    },
    children: [
      {
        path: 'permissions',
        id: 'Permissions',
        element: <Permissions />,
        handle: {
          label: FormattedMessage({ id: 'layout.menu.permissionsPage' })
        }
      },
      {
        path: 'test-permissions-a',
        id: 'TestPermissionsA',
        element: <TestPermissionsA />,
        handle: {
          label: FormattedMessage({ id: 'layout.menu.testPermissionsPage1' })
        }
      },
      {
        path: 'test-permissions-b',
        id: 'TestPermissionsB',
        element: <TestPermissionsB />,
        handle: {
          label: FormattedMessage({ id: 'layout.menu.testPermissionsPage2' })
        }
      }
    ]
  },
  {
    path: '/details-page',
    id: 'DetailsPage',
    alwaysShow: false,
    handle: {
      label: FormattedMessage({ id: 'layout.menu.detailsPage' }),
      whiteList: true
    },
    children: [
      {
        path: '',
        id: 'DetailsList',
        element: <DetailsPage />,
        handle: {
          label: FormattedMessage({ id: 'layout.menu.detailsPage' }),
          icon: <DatabaseOutlined />
        }
      },
      {
        path: 'details-info',
        id: 'DetailsInfo',
        element: <DetailsInfo />,
        handle: { label: '详情页', hideSidebar: true }
      },
      {
        path: 'details-params/:id',
        id: 'DetailsParams',
        element: <DetailsParams />,
        handle: { label: '详情页', hideSidebar: true }
      }
    ]
  }
];

export const whiteList: RouteItem[] = [
  {
    path: '*',
    element: <ErrorPage403 />
  },
  {
    path: '/refresh/*',
    element: <Refresh />,
    handle: { label: '', hideSidebar: true, whiteList: true }
  }
];

export const baseRouter: RouteItem[] = [
  {
    path: '/',
    element: (
      <Authority>
        <Layout />
      </Authority>
    ),
    errorElement: <ErrorElement pageType="Layout" />,
    children: [...whiteList]
  },
  {
    path: '/login',
    element: <Login />
  }
];
