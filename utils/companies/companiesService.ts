import { CompanyRequest } from "@/types/companies/companyTypes";

export const fetchCompany = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch company with ID ${id}`);
  }

  return response.json();
};

export const fetchAllCompanies = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`);

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  return response.json();
};

export const deleteCompany = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to delete company: ${errorText}`);
  }

  return response.json();
};

export const createCompany = async (companyData: CompanyRequest) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(companyData),
  });

  if (!response.ok) {
    throw new Error("Failed to create company");
  }

  return response.json();
};
