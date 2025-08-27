"use client";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";


export default function Home() {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost:CardProps) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        + New Post
      </button>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />

      {/* Posts list */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Add one!</p>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 bg-white shadow"
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
