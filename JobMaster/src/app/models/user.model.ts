export interface User {
  UserID: number;
  UserName: string;
  PasswordHash: string;
  Email: string;
  FullName?: string;
  Phone?: string;
  Sex: number; // 0: Nam, 1: Nữ, 2: Khác
  DateOfBirth?: Date;
  Marital: number; // 0: Độc thân, 1: Đã kết hôn, 2: Đã ly hôn
  Country?: string;
  Address?: string;
  AttachedFile?: string;
  Role: 'Candidate' | 'Employer' | 'Admin';
  CreatedAt: Date;
  UpdatedAt: Date;
}