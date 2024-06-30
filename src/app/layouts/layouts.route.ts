import { Route } from "@angular/router";
import { MaindemoComponent } from "../Pages/maindemo/maindemo.component";
import { LayoutTwoComponent } from "../Pages/layout-two/layout-two.component";
import { LayoutThreeComponent } from "../Pages/layout-three/layout-three.component";
import { JobListComponent } from "../Pages/job-list/job-list.component";
import { JobListTwoComponent } from "../Pages/job-list-two/job-list-two.component";
import { JobsGridComponent } from "../Pages/jobs-grid/jobs-grid.component";
import { JobsGridTwoComponent } from "../Pages/jobs-grid-two/jobs-grid-two.component";
import { JobsGridFourComponent } from "../Pages/jobs-grid-four/jobs-grid-four.component";
import { JobsWithoutFilterComponent } from "../Pages/jobs-without-filter/jobs-without-filter.component";
import { OverviewComponent } from "../Pages/overview/overview.component";
import { PricingComponent } from "../Pages/pricing/pricing.component";
import { TeamComponent } from "../Pages/team/team.component";
import { ContactUsComponent } from "../Pages/contact-us/contact-us.component";
import { AboutUsComponent } from "../Pages/about-us/about-us.component";
import { DashboardComponent } from "../Pages/admin-dashboard/admin-dashboard.component";

export const LANDING_ROUTES: Route[] = [

  { path: '', component: MaindemoComponent },
  { path: 'layout-two', component: LayoutTwoComponent },
  { path: 'layout-three', component: LayoutThreeComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-list-two', component: JobListTwoComponent },
  { path: 'jobs-grid', component: JobsGridComponent },
  { path: 'jobs-grid-two', component: JobsGridTwoComponent },
  { path: 'jobs-grid-four', component: JobsGridFourComponent },
  { path: 'jobs-without-filter', component: JobsWithoutFilterComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'admin-dashboard', component: DashboardComponent },


]
