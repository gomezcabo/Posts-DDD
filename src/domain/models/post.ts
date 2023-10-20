export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  popularity: "low" | "medium" | "high";
};
