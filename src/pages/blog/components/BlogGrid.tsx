import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/mocks/blog';

export default function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = blogPosts.filter((post) => {
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q)
    );
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search the blog"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-12 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-gray-400">
            <i className="ri-search-line text-lg"></i>
          </div>
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {visible.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors group"
                >
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h2 className="font-display font-bold text-lg text-primary-400 group-hover:text-primary-300 transition-colors mb-2 leading-snug">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-xs text-gray-400 mb-3">
                      By {post.author} &middot; {post.date}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors whitespace-nowrap"
                    >
                      Read More <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {hasMore && (
              <div className="text-center">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="px-10 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <i className="ri-search-line text-4xl mb-3 block"></i>
            <p className="text-lg font-medium">No posts found for &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-sm mt-1">Try a different search term.</p>
          </div>
        )}
      </div>
    </section>
  );
}
