export interface Company {
  CompanyID: number;
  CompanyName: string;
  Description?: string;
  Website?: string;
  Location?: string;
  Country?: string;
  IndustryID?: number;
  EmployeeCount?: number;
  Logo?: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}