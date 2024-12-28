import React, { useEffect, useState } from "react";
import videoSrc from "./images/background.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshayak8"
        );
        const data = await response.json();

        if (data.status === "ok") {
          setPosts(data.items);
        } else {
          console.error("Failed to fetch Medium posts.");
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    };

    fetchMediumPosts();
  }, []);

  // Function to extract the first image from the description
  const extractThumbnail = (description) => {
    const regex = /<img[^>]+src="([^">]+)"/;
    const match = description.match(regex);
    return match ? match[1] : null; // Return image URL or null
  };

  // Function to get the shortened description, preserving HTML tags
  const getShortenedDescription = (description, limit = 380) => {
    const text = description.replace(/<[^>]*>/g, ""); // Remove all HTML tags
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  // Function to handle share button click
  const handleShare = (postLink) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this blog!",
          url: postLink,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="blog-section">
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {posts.length > 0 ? (
        posts.map((post) => {
          const thumbnail = extractThumbnail(post.description); // Extract thumbnail from description
          const shortDescription = getShortenedDescription(post.description); // Shorten description
          const postId = post.guid; // Unique identifier for each post

          return (
            <div key={postId} className="blog-post">
              <div className="title_thumbnail">
                {/* Blog Title and Link */}
                <h2>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h2>

                {/* Blog Thumbnail */}
                {thumbnail && (
                  <img
                    src={thumbnail}
                    alt={post.title}
                    className="blog-thumbnail"
                  />
                )}
              </div>
              <div className="date_dis">
                {/* Blog Publication Date */}
                <h2 className="publish-date">
                  Published date: {new Date(post.pubDate).toLocaleDateString()}
                </h2>

                {/* Blog Description (shortened) */}
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: shortDescription }}
                ></p>
                <div className="readmore">
                  <div>
                    {/* Read More Button */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="read-more-btn">Read More</button>
                    </a>
                  </div>
                  <div>
                    {/* Share Button */}
                    <button
                      className="share-btn"
                      onClick={() => handleShare(post.link)}
                    >
                      <FontAwesomeIcon icon={faShareNodes} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading posts...</h1>
      )}
    </div>
  );
}

export default Blog;
