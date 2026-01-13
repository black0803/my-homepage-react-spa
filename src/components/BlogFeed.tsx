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
      <h3 className="text-2xl font-bold mb-6 dark:text-white">Latest from the Blog</h3>
      <div className="space-y-4">
        {posts.slice(0, 3)?.map((post) => (
          <a 
            key={post.url} 
            href={`https://${post.url}`}
            target="_blank"
            className="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600">
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
    </section>
  );
}