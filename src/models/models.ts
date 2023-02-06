declare module namespace {
  export interface Item {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
  }

  export interface RootObject {
    total_count: number;
  }
}
