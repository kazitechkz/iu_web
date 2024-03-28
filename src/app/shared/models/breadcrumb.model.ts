import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export  class BreadcrumbModel{
  constructor(title:string,icon:IconDefinition|null, route:string|null) {
    this.title = title;
    this.icon = icon;
    this.route = route;
  }
  title:string;
  icon:IconDefinition|null;
  route:string|null;
}
