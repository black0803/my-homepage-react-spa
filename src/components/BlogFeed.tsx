import {useEffect, useState} from 'react';
import {Calendar, ExternalLink} from 'lucide-react';

interface Post {
  title: string;
  url: string;
  date: string;
}

export function BlogFeed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [blogView, setBlogView] = useState<Boolean>(false);
    useEffect(() => {
        console.log("Fetching blog posts...");
        fetch('https://blog.nobeledgar3.cloud/feed.json')
            .then(response => response.json())
            .then(data => {
                setPosts(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
                setLoading(false);
            });
        console.log("Fetched posts:", posts);
    }, []);

    if (loading) {
        return <div>Loading blog posts...</div>;
    }

return (
    <section className="mt-5 mb-5">
      <h3 className="text-xl font-bold mb-4 mt-4">Latest from the Blog</h3>
      <div className="space-y-4">
        {blogView && posts?.map((post) => (
          <a 
            key={post.url} 
            href={`https://${post.url}`}
            target="_blank"
            className="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 break-words">
                {post.title}
              </h4>
              <ExternalLink size={16} className="text-slate-400" />
            </div>
            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString()}
            </p>
          </a>
        ))}
        {!blogView && posts.slice(0, 3)?.map((post) => (
          <a 
            key={post.url} 
            href={`https://${post.url}`}
            target="_blank"
            className="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 break-words">
                {post.title}
              </h4>
              <ExternalLink size={16} className="text-slate-400" />
            </div>
            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-6 mb-6 flex justify-center">
        {!blogView && (<button onClick={() => setBlogView(!blogView)}>View All Posts</button>)}
        {blogView && (<button onClick={() => setBlogView(!blogView)}>Hide Posts</button>)}
      </div>
    </section>
  );
}