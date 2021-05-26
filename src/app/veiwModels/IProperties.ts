import { Items } from "./Items";
import { PageInfo } from "./PageInfo";

export interface IProperties {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  regionCode:    string;
  pageInfo:      PageInfo;
  items:         Items[];
}








