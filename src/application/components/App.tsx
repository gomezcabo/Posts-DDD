import { usePosts } from "../hooks/use-posts";
import { usePost } from "../hooks/use-post";

const Loading = () => <div>Loading...</div>;
const Json = ({ item }: { item: unknown }) => (
  <pre className="whitespace-break-spaces text-xs">{JSON.stringify(item, null, 2)}</pre>
);

function App() {
  const postQuery = usePost(3);
  const postsQuery = usePosts();

  return (
    <div className="px-8 py-4 flex gap-5">
      <div className="w-1/2">
        <h1 className="text-2xl">Post</h1>
        {postQuery.isLoading && <Loading />}
        {postQuery.data && <Json item={postQuery.data} />}
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl">Posts</h1>
        {postsQuery.isLoading && <Loading />}
        {postsQuery.data && <Json item={postsQuery.data} />}
      </div>
    </div>
  );
}

export default App;
