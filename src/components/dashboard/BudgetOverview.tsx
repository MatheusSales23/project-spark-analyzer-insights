import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProjects } from '@/data/mockData';

export function BudgetOverview() {
  const budgetData = mockProjects.map(project => ({
    name: project.name.split(' ')[0], // Shortened name for chart
    budget: project.budget,
    spent: project.spent,
    remaining: project.budget - project.spent,
    utilization: Math.round((project.spent / project.budget) * 100)
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-muted-foreground">
            Budget: ${data.budget.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">
            Spent: ${data.spent.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">
            Remaining: ${data.remaining.toLocaleString()}
          </p>
          <p className="text-sm font-medium">
            Utilization: {data.utilization}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>
          Budget allocation and spending across projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={budgetData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="budget" 
              stackId="1" 
              stroke="hsl(var(--chart-1))" 
              fill="hsl(var(--chart-1))" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="spent" 
              stackId="2" 
              stroke="hsl(var(--chart-2))" 
              fill="hsl(var(--chart-2))" 
              fillOpacity={0.8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}