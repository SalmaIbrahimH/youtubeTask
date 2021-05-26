export interface Thumbnails {
  default: Default;
  medium:  Default;
  high:    Default;
}
export interface Default {
  url:    string;
  width:  number;
  height: number;
}
