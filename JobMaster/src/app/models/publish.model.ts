export interface Publish {
  PublishID: number;
  PublishTitle: string;
  Quantity: number;
  Sex: number; // 0: Nam, 1: Nữ, 2: Khác
  Description?: string;
  Requirements?: string;
  Nature?: string;
  LevelID?: number;
  EducationLevelID?: number;
  ExperienceID?: number;
  Salary?: string;
  FormID?: number;
  TryTime?: string;
  IndustryID?: number;
  WorkPlace?: string;
  CompanyID: number;
  UserID: number;
  SubmissionDeadline: Date;
}