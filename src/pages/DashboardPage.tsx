import {
  FolderOpen,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { LeadTimeChart } from '@/components/dashboard/LeadTimeChart';
import { ProjectStatusChart } from '@/components/dashboard/ProjectStatusChart';
import { BudgetOverview } from '@/components/dashboard/BudgetOverview';
import { mockDashboardMetrics } from '@/data/mockData';

export default function DashboardPage() {
  const metrics = mockDashboardMetrics;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your project portfolio and key performance metrics
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Projects"
          value={metrics.totalProjects}
          subtitle={`${metrics.activeProjects} active, ${metrics.completedProjects} completed`}
          icon={FolderOpen}
          trend={{ value: 12, isPositive: true }}
        />
        
        <MetricCard
          title="Total Budget"
          value={`$${(metrics.totalBudget / 1000).toFixed(0)}k`}
          subtitle={`$${(metrics.spentBudget / 1000).toFixed(0)}k spent (${Math.round((metrics.spentBudget / metrics.totalBudget) * 100)}%)`}
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        
        <MetricCard
          title="Task Completion"
          value={`${Math.round((metrics.completedTasks / metrics.totalTasks) * 100)}%`}
          subtitle={`${metrics.completedTasks}/${metrics.totalTasks} tasks completed`}
          icon={CheckCircle}
          trend={{ value: 15, isPositive: true }}
        />
        
        <MetricCard
          title="Avg Lead Time"
          value={`${metrics.averageLeadTime} days`}
          subtitle={`${metrics.onTimeDelivery}% on-time delivery`}
          icon={Clock}
          trend={{ value: -5, isPositive: false }}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Overdue Tasks"
          value={metrics.overdueTasks}
          subtitle="Require immediate attention"
          icon={AlertTriangle}
          className="border-destructive/20"
        />
        
        <MetricCard
          title="Team Utilization"
          value={`${metrics.teamUtilization}%`}
          subtitle="Current capacity usage"
          icon={Users}
          trend={{ value: 3, isPositive: true }}
        />
        
        <MetricCard
          title="Budget Efficiency"
          value={`${Math.round((metrics.spentBudget / metrics.totalBudget) * 100)}%`}
          subtitle="Budget utilization rate"
          icon={TrendingUp}
          trend={{ value: 7, isPositive: true }}
        />
        
        <MetricCard
          title="Delivery Rate"
          value={`${metrics.onTimeDelivery}%`}
          subtitle="Projects delivered on time"
          icon={Target}
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <LeadTimeChart />
        <ProjectStatusChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        <BudgetOverview />
      </div>
    </div>
  );
}