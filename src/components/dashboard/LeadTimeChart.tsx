import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockLeadTimeData } from '@/data/mockData';

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export function LeadTimeChart() {
  const chartData = mockLeadTimeData.map(item => ({
    name: item.projectName,
    planned: item.plannedDuration,
    actual: item.actualDuration,
    variance: item.variance,
    efficiency: item.efficiency
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-muted-foreground">
            Planned: {data.planned} days
          </p>
          <p className="text-sm text-muted-foreground">
            Actual: {data.actual} days
          </p>
          <p className={`text-sm font-medium ${
            data.variance < 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            Variance: {data.variance > 0 ? '+' : ''}{data.variance} days
          </p>
          <p className="text-sm text-muted-foreground">
            Efficiency: {data.efficiency}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Lead Time Analysis</CardTitle>
        <CardDescription>
          Planned vs actual duration for recent projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="planned" name="Planned" fill={COLORS[0]} opacity={0.7} />
            <Bar dataKey="actual" name="Actual" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}