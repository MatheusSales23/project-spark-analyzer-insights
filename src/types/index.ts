export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'member';
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'on-hold' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  estimatedHours: number;
  actualHours: number;
  budget: number;
  spent: number;
  progress: number;
  teamMembers: string[];
  manager: string;
  client?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignee?: string;
  estimatedHours: number;
  actualHours: number;
  startDate?: Date;
  endDate?: Date;
  dependencies: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface LeadTimeData {
  projectId: string;
  projectName: string;
  plannedDuration: number;
  actualDuration: number;
  variance: number;
  efficiency: number;
  bottlenecks: string[];
  stages: {
    name: string;
    planned: number;
    actual: number;
    startDate: Date;
    endDate: Date;
  }[];
}

export interface DashboardMetrics {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalBudget: number;
  spentBudget: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  teamUtilization: number;
  averageLeadTime: number;
  onTimeDelivery: number;
}