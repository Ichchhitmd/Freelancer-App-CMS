"use client";

import { Card } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard-layout";
import { Building2, Calendar, Users } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Companies",
      value: "24",
      icon: Building2,
      change: "+12%",
    },
    {
      title: "Total Events",
      value: "145",
      icon: Calendar,
      change: "+18%",
    },
    {
      title: "Active Users",
      value: "12",
      icon: Users,
      change: "+2%",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <h2 className="text-3xl font-bold">{stat.value}</h2>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}