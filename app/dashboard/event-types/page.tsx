"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/dashboard-layout";
import { PlusCircle, Tag, X } from "lucide-react";

export default function EventTypes() {
  const [newType, setNewType] = useState("");
  const [eventTypes, setEventTypes] = useState([
    { id: "wedding", name: "Wedding" },
    { id: "mehendi", name: "Mehendi" },
    { id: "reception", name: "Reception" },
    { id: "sangeet", name: "Sangeet" },
  ]);

  const handleAddType = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newType.trim()) return;

    const id = newType.toLowerCase().replace(/\s+/g, '-');
    setEventTypes([...eventTypes, { id, name: newType }]);
    setNewType("");
  };

  const handleDeleteType = (id: string) => {
    setEventTypes(eventTypes.filter(type => type.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Event Types</h1>
        </div>

        <Card className="p-6">
          <form onSubmit={handleAddType} className="flex gap-4 mb-6">
            <Input
              placeholder="Enter new event type"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              className="max-w-sm"
            />
            <Button type="submit">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Type
            </Button>
          </form>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((type) => (
              <Card key={type.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Tag className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{type.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => handleDeleteType(type.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}