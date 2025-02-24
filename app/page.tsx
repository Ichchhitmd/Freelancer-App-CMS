"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Welcome to EventCMS</h1>
          <p className="text-muted-foreground">Manage your events and companies efficiently</p>
        </div>
        
        <div className="space-y-4">
          <Button 
            className="w-full" 
            size="lg"
            onClick={() => router.push('/login')}
          >
            Login to Dashboard
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            Your complete event management solution
          </p>
        </div>
      </Card>
    </div>
  );
}