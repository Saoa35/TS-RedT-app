// declare module namespace {
export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
}

export interface ServerResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
}
// }
