export interface CompanyResponse {
  id: number;
  name: string;
  location: string;
  bio: string;
  image: string;
  contactPerson: string;
  contactInfo: string;
}

export interface CompanyRequest {
  name: string;
  location: string;
  bio: string;
  image: File | null;
  contactPerson: string;
  contactInfo: string;
}