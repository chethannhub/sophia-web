'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const comparisonData = [
  {
    name: 'Search',
    engagement: 85,
    conversion: 78,
    reach: 70,
    cost: 65,
  },
  {
    name: 'Display',
    engagement: 65,
    conversion: 45,
    reach: 95,
    cost: 40,
  },
  {
    name: 'Shopping',
    engagement: 88,
    conversion: 82,
    reach: 60,
    cost: 72,
  },
  {
    name: 'Video',
    engagement: 75,
    conversion: 55,
    reach: 90,
    cost: 60,
  },
  {
    name: 'App',
    engagement: 70,
    conversion: 68,
    reach: 50,
    cost: 55,
  },
]

const comparisonTable = [
  {
    metric: 'Average CPC',
    search: '$1.50 - $3.00',
    display: '$0.50 - $1.50',
    shopping: '$0.50 - $2.00',
    video: '$0.25 - $1.00',
  },
  {
    metric: 'Best For',
    search: 'High intent',
    display: 'Brand awareness',
    shopping: 'E-commerce',
    video: 'Engagement',
  },
  {
    metric: 'Setup Time',
    search: '1-2 days',
    display: '2-3 days',
    shopping: '3-5 days',
    video: '2-3 days',
  },
  {
    metric: 'ROI Timeline',
    search: '1-2 weeks',
    display: '2-4 weeks',
    shopping: '1-2 weeks',
    video: '2-6 weeks',
  },
]

export default function AdComparison() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2 className="section-title">Compare Ad Types</h2>
          <p className="text-muted-foreground">
            See how different Google Ads types perform across key metrics
          </p>
        </div>

        {/* Chart */}
        <div className="mb-16 p-6 rounded-xl border border-border/50 bg-card/50">
          <h3 className="font-bold text-lg mb-6">Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="engagement" fill="var(--color-chart-1)" name="Engagement" />
              <Bar dataKey="conversion" fill="var(--color-chart-2)" name="Conversion" />
              <Bar dataKey="reach" fill="var(--color-chart-3)" name="Reach" />
              <Bar dataKey="cost" fill="var(--color-chart-4)" name="Cost Efficiency" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-4 px-4 font-bold">Metric</th>
                <th className="text-left py-4 px-4 font-bold">Search</th>
                <th className="text-left py-4 px-4 font-bold">Display</th>
                <th className="text-left py-4 px-4 font-bold">Shopping</th>
                <th className="text-left py-4 px-4 font-bold">Video</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
                >
                  <td className="py-4 px-4 font-medium">{row.metric}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{row.search}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{row.display}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{row.shopping}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{row.video}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
