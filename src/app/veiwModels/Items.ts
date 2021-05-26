import { ID } from "./Id";
import { snippet } from "./Snippet";

export interface Items {
  kind:    string;
  etag:    string;
  id:      ID;
  snippet: snippet;
}
