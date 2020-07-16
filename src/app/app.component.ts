import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';

export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-router-demo';
public breadcrumbs: IBreadCrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
        this.router.events.pipe(
            // filter((event: Event) => event instanceof NavigationEnd),
            filter((e): e is NavigationEnd => e instanceof NavigationEnd), 
            distinctUntilChanged(),
        ).subscribe(() => {
            this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        })
  }

buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {

let label =
  route.routeConfig && route.routeConfig.data
    ? route.routeConfig.data.breadcrumb
    : "";
let path =
  route.routeConfig && route.routeConfig.data ? route.routeConfig.path : "";

const lastRoutePart = path.split("/").pop();
const isDynamicRoute = lastRoutePart.startsWith(":");
if (isDynamicRoute && !!route.snapshot) {
  const paramName = lastRoutePart.split(":")[1];
  path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
  label = route.snapshot.params[paramName];
}

const nextUrl = path ? `${url}/${path}` : url;

const breadcrumb: IBreadCrumb = {
  label: label,
  url: nextUrl
};

const newBreadcrumbs = breadcrumb.label
  ? [...breadcrumbs, breadcrumb]
  : [...breadcrumbs];
if (route.firstChild) {
  //If we are not on our current path yet,
  //there will be more children to look after, to build our breadcumb
  return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
}
console.log(newBreadcrumbs);
return newBreadcrumbs;
  }
}
