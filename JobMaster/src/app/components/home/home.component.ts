import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Publish } from '../../models/publish.model';
import { PublishService } from '../../services/publish.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { JobCategory } from '../../models/job-category.model';
import { JobCategoryService } from '../../services/job-category.service';
import { Province } from '../../models/province.model';
import { ProvinceService } from '../../services/province.service';
import { FormsModule } from '@angular/forms';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, DatePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  publishs: Publish[] = [];
  jobCategories: JobCategory[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  provinces: Province[] = [];
  companies: Company[] = []; 
  company: String = '';

  constructor(
    private publishService: PublishService,
    private jobCategoriesService: JobCategoryService,
    private provinceService: ProvinceService,
    private companyService: CompanyService,
  ) {}

  ngOnInit(): void {
    this.getJobs();
    this.getJobCats();
    this.getProvinces();
    this.getCompanies();
  }

  getJobCats(): void {
    this.loading = true;
    this.jobCategoriesService.getAllJobCategories().subscribe(
      (jobCats) => {
        this.jobCategories = jobCats;
        this.loading = false;
        console.log(this.jobCategories);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Can not load job categories';
        console.error(error);
      }
    );
  }
  getJobs(): void {
    this.loading = true;
    this.publishService.getAllPublishes().subscribe(
      (publishs) => {
        this.publishs = publishs;
        this.loading = false;
        // console.log(this.publishs);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Can not load publish. ';
        console.error(error);
      }
    );
  }
  getProvinces(): void {
    this.loading = true;
    this.provinceService.getAllProvinces().subscribe(
      (provinces) => {
        this.provinces = provinces;
        this.loading = false;
        console.log(this.provinces);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Can not load provinces';
        console.error(error);
      }
    );
  }
  getCompanies(): void {
    this.loading = true;
    this.companyService.getAllCompanies().subscribe(
      (companies) => {
        this.companies = companies;
        this.loading = false;
        console.log(this.companies);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Can not load companies';
        console.error(error);
      }
    );
  }

}
