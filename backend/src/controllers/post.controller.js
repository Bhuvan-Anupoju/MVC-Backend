import Post from "../models/post.model.js";

// Create a new post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age)
      return res.status(400).json({ message: "Must need all the fields" });
    const post = await Post.create({
      name,
      description,
      age,
    });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error", error });
  }
};

// Read or Get  all the posts
const getPosts = async (req, res) => {
  try {
    const getPosts = await Post.find();
    res.status(200).json(getPosts);
  } catch (error) {
    res.status(500).josn({ message: "Internal server error" });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    // basic validation to check if the body is empty

    // {name:x , description:y , age:z} -> [name, description, age]
    // {} -> truthy value
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No data provided for updation" });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error", error });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error", error });
  }
};

export { createPost, getPosts, updatePost, deletePost };
