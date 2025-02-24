"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard-layout";
import { Building2, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCompanies, useDeleteCompany } from "@/hooks/companies/useCompanies";
import Image from "next/image";
import { toast } from "sonner";
import { CompanyResponse } from "@/types/companies/companyTypes";

export default function Companies() {
  const { data: companies, isLoading } = useCompanies();

  console.log(companies);
  const { mutate: deleteCompany, isPending: isDeleting } = useDeleteCompany();

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this company?")) {
      deleteCompany(id, {
        onSuccess: () => {
          toast.success("Company deleted successfully");
        },
        onError: (error) => {
          toast.error("Failed to delete company");
        },
      });
    }
  };

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

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies?.map((company: CompanyResponse) => (
              <Card key={company.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {company.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/${company.image}`}
                        alt={company.name}
                        className="w-12 h-12 rounded-full object-cover"
                        width={48}
                        height={48}
                      />
                    )}
                    {!company.image && (
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{company.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {company.location}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="hover:bg-red-400 bg-red-500"
                    onClick={() => handleDelete(company.id)}
                    disabled={isDeleting}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Bio:</span> {company.bio}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Contact:</span>{" "}
                    {company.contactPerson}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Contact Info:</span>{" "}
                    {company.contactInfo}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
