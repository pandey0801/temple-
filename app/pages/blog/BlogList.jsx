import { Link } from "react-router-dom";
import blogs from "../../data/blogs.json";

export default function BlogList() {
    console.log("Blogs data:", blogs);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Puja Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map(blog => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
          >
            <img src={blog.image} alt={blog.title} className="rounded-md mb-4 h-48 w-full object-cover" />
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.summary}</p>
            <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
