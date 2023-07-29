//fs is a Node.js module that let's you read files from the file system.
import fs from "fs";
//path is a Node.js module that let's you manipulate file paths.
import path from "path";
//matter is a library that let's you parse the metadata in each markdown file.
import matter from "gray-matter";

const blogPostDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogPostDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(blogPostDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  console.log(allPostsData, "all posts")
  console.log(fileNames, "files names")
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}


//https://nextjs.org/learn/basics/data-fetching/blog-data