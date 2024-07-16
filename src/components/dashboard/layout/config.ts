import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  {
    key: 'users',
    title: 'Users',
    icon: 'users',
    items: [
      { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
      { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
    ],
  },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
