"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/dashboard-layout";
import { useCreateCompany } from "@/hooks/companies/useCompanies";
import { CompanyRequest } from "@/types/companies/companyTypes";

export default function AddCompany() {
  const router = useRouter();
  const [formData, setFormData] = useState<CompanyRequest>({
    name: "",
    location: "",
    bio: "",
    image: null,
    contactPerson: "",
    contactInfo: "",
  });

  const { mutate: createCompany, isPending } = useCreateCompany();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createCompany(formData, {
      onSuccess: () => {
        router.push('/dashboard/companies');
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <Card className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Add New Company</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Bio</label>
              <Textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Image</label>
              <Input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Person</label>
              <Input
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Number</label>
              <Input
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? 'Adding...' : 'Add Company'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}