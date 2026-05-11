/* ═══════════════════════════════════════════════════
   navConfig.js  —  Single source of truth for
   sidebar navigation + route definitions.
   Both Sidebar and App.jsx import from here.
═══════════════════════════════════════════════════ */

export const NAV = [
  {
    icon: '⊞',
    label: 'Dashboard',
    path: '/',
  },
  {
    icon: '👥',
    label: 'User Management',
    path: null,           // parent — no direct route
    children: [
      { label: 'Students',     path: '/users/students'     },
      { label: 'Instructors',  path: '/users/instructors'  },
      { label: 'Institutions', path: '/users/institutions' },
    ],
  },
  {
    icon: '📚',
    label: 'Course Management',
    path: '/courses',
  },
  {
    icon: '✅',
    label: 'Course Verification',
    path: '/course-verify',
  },
  {
    icon: '🔐',
    label: 'Role Management',
    path: '/roles',
  },
  {
    icon: '💰',
    label: 'Settlements',
    path: '/settlements',
  },
  {
    icon: '📊',
    label: 'Revenue',
    path: '/revenue',
  },
  {
    icon: '💳',
    label: 'Subscription Plans',
    path: '/subscriptions',
  },
  {
    icon: '🧪',
    label: 'Virtual Labs',
    path: '/virtual-labs',
  },
  {
    icon: '🏫',
    label: 'New Institutes',
    path: '/new-institutes',
  },
  {
    icon: '🔔',
    label: 'Notifications',
    path: '/notifications',
  },
];
