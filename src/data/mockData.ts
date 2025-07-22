import { Project, Task, LeadTimeData, DashboardMetrics } from '@/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Modern e-commerce solution with React and Node.js',
    status: 'in-progress',
    priority: 'high',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-04-15'),
    estimatedHours: 800,
    actualHours: 520,
    budget: 150000,
    spent: 98000,
    progress: 65,
    teamMembers: ['1', '2', '3'],
    manager: '1',
    client: 'TechCorp Inc.',
    tags: ['React', 'Node.js', 'MongoDB'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-03-20')
  },
  {
    id: '2',
    name: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    status: 'completed',
    priority: 'critical',
    startDate: new Date('2023-10-01'),
    endDate: new Date('2024-01-31'),
    estimatedHours: 1200,
    actualHours: 1150,
    budget: 250000,
    spent: 235000,
    progress: 100,
    teamMembers: ['1', '4', '5', '6'],
    manager: '1',
    client: 'SecureBank',
    tags: ['Flutter', 'Firebase', 'Security'],
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: '3',
    name: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence',
    status: 'planning',
    priority: 'medium',
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-07-01'),
    estimatedHours: 600,
    actualHours: 0,
    budget: 120000,
    spent: 0,
    progress: 0,
    teamMembers: ['2', '7'],
    manager: '2',
    client: 'DataViz Corp',
    tags: ['React', 'D3.js', 'Python'],
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-20')
  },
  {
    id: '4',
    name: 'CRM System Upgrade',
    description: 'Legacy CRM system modernization and feature enhancement',
    status: 'on-hold',
    priority: 'low',
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-05-01'),
    estimatedHours: 400,
    actualHours: 120,
    budget: 80000,
    spent: 25000,
    progress: 30,
    teamMembers: ['3', '8'],
    manager: '2',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-03-10')
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    projectId: '1',
    title: 'Setup project architecture',
    description: 'Initialize project structure and configure build tools',
    status: 'done',
    priority: 'high',
    assignee: '1',
    estimatedHours: 16,
    actualHours: 14,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-01-17'),
    dependencies: [],
    tags: ['setup', 'architecture'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-17')
  },
  {
    id: '2',
    projectId: '1',
    title: 'Implement user authentication',
    description: 'Create login, register, and password reset functionality',
    status: 'in-progress',
    priority: 'high',
    assignee: '2',
    estimatedHours: 40,
    actualHours: 25,
    startDate: new Date('2024-01-18'),
    dependencies: ['1'],
    tags: ['auth', 'security'],
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-03-20')
  },
  {
    id: '3',
    projectId: '1',
    title: 'Design product catalog',
    description: 'Create responsive product listing and detail pages',
    status: 'review',
    priority: 'medium',
    assignee: '3',
    estimatedHours: 60,
    actualHours: 58,
    startDate: new Date('2024-02-01'),
    dependencies: ['1'],
    tags: ['ui', 'catalog'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-15')
  }
];

export const mockLeadTimeData: LeadTimeData[] = [
  {
    projectId: '1',
    projectName: 'E-commerce Platform',
    plannedDuration: 90,
    actualDuration: 65,
    variance: -25,
    efficiency: 128,
    bottlenecks: ['API Integration', 'Third-party Reviews'],
    stages: [
      { name: 'Planning', planned: 10, actual: 8, startDate: new Date('2024-01-15'), endDate: new Date('2024-01-23') },
      { name: 'Design', planned: 20, actual: 18, startDate: new Date('2024-01-24'), endDate: new Date('2024-02-11') },
      { name: 'Development', planned: 45, actual: 32, startDate: new Date('2024-02-12'), endDate: new Date('2024-03-15') },
      { name: 'Testing', planned: 10, actual: 5, startDate: new Date('2024-03-16'), endDate: new Date('2024-03-21') },
      { name: 'Deployment', planned: 5, actual: 2, startDate: new Date('2024-03-22'), endDate: new Date('2024-03-24') }
    ]
  },
  {
    projectId: '2',
    projectName: 'Mobile Banking App',
    plannedDuration: 120,
    actualDuration: 122,
    variance: 2,
    efficiency: 98,
    bottlenecks: ['Security Audit', 'App Store Review'],
    stages: [
      { name: 'Planning', planned: 15, actual: 16, startDate: new Date('2023-10-01'), endDate: new Date('2023-10-16') },
      { name: 'Design', planned: 25, actual: 28, startDate: new Date('2023-10-17'), endDate: new Date('2023-11-14') },
      { name: 'Development', planned: 60, actual: 58, startDate: new Date('2023-11-15'), endDate: new Date('2024-01-12') },
      { name: 'Testing', planned: 15, actual: 15, startDate: new Date('2024-01-13'), endDate: new Date('2024-01-28') },
      { name: 'Deployment', planned: 5, actual: 5, startDate: new Date('2024-01-29'), endDate: new Date('2024-01-31') }
    ]
  }
];

export const mockDashboardMetrics: DashboardMetrics = {
  totalProjects: 4,
  activeProjects: 1,
  completedProjects: 1,
  totalBudget: 600000,
  spentBudget: 358000,
  totalTasks: 24,
  completedTasks: 8,
  overdueTasks: 3,
  teamUtilization: 78,
  averageLeadTime: 95,
  onTimeDelivery: 85
};