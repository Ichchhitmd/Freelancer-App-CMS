"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard-layout";
import { Calendar, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Events() {
  const events = [
    {
      id: 1,
      name: "Sarah & John's Wedding",
      type: "Wedding",
      date: "2024-06-15",
      company: "Elegant Events",
      location: "Central Park, NY",
    },
    {
      id: 2,
      name: "Maya's Mehendi Ceremony",
      type: "Mehendi",
      date: "2024-05-20",
      company: "Wedding Dreams",
      location: "Beverly Hills, CA",
    },
    // Add more sample events as needed
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <Link href="/dashboard/events/add">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.type}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Company:</span> {event.company}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}