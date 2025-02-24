"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard-layout";
import { Building2, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Companies() {
  const companies = [
    {
      id: 1,
      name: "Elegant Events",
      type: "Event Planning",
      events: 12,
      location: "New York, NY",
    },
    {
      id: 2,
      name: "Wedding Dreams",
      type: "Wedding Planning",
      events: 8,
      location: "Los Angeles, CA",
    },
    // Add more sample companies as needed
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
          <Link href="/dashboard/companies/add">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Company
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <Card key={company.id} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">{company.type}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Location:</span> {company.location}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Total Events:</span> {company.events}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}