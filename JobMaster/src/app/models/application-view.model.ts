import { Application } from "./application.model";
import { Publish } from "./publish.model";
import { ApplicationStatus } from "./application-status.model";

export interface ApplicationView {
  application: Application;
  publish: Publish;
  applicationStatus: ApplicationStatus;
  }