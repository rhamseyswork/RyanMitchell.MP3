import asyncHandler from '../middleware/asyncHandler.js'; // Import async handler middleware
import Links from '../models/linksModel.js'; // Import Mongoose model for links (adjust path as necessary)

//@desc Fetch all links
//@route GET /api/links
//@access Public
const getLinks = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? {name: { $regex: req.query.keyword, $options: 'i' }} : {};
  const links = await Links.find({...keyword})
  res.status(200).json({links}); // Send response with status 200 and JSON array of links
});

//@desc Fetch a link by ID
//@route GET /api/links/:id
//@access Public
const getLinksById = asyncHandler(async (req, res) => {
  const link = await Links.findById(req.params.id); // Find a link by its ID
  if (link) {
    res.json(link); // If found, send JSON response with the link object
  } else {
    res.status(404); // If link not found, respond with 404 Not Found status
    throw new Error('Link not found');
  }
});

//@desc Create a link
//@route POST /api/links
//@access Private/Admin
const createLink = asyncHandler(async (req, res) => {
  const { title, url, img, color } = req.body; // Destructure title, url, img from request body
  const link = new Links({ title, url, img, color }); // Create a new instance of Links model

  const createdLink = await link.save(); // Save the new link to the database
  res.status(201).json(createdLink); // Respond with status 201 Created and JSON of created link
});

//@desc Update a link
//@route PUT /api/links/:id
//@access Private/Admin
const updateLink = asyncHandler(async (req, res) => {
  const { title, url, img, color } = req.body; // Destructure title, url, img from request body
  const link = await Links.findById(req.params.id); // Find the link by ID

  if (link) {
    link.title = title; // Update title of the link
    link.url = url; // Update URL of the link
    link.img = img; // Update image of the link
    link.color = color; 

    const updatedLink = await link.save(); // Save the updated link to the database
    res.json(updatedLink); // Respond with JSON of updated link
  } else {
    res.status(404); // If link not found, respond with 404 Not Found status
    throw new Error('Link not found');
  }
});

//@desc Delete a link
//@route DELETE /api/links/:id
//@access Private/Admin
const deleteLink = asyncHandler(async (req, res) => {
  const link = await Links.findById(req.params.id); // Find the link by ID

  if (link) {
    await link.remove(); // Remove the link from the database
    res.json({ message: 'Link removed' }); // Respond with JSON message indicating link removal
  } else {
    res.status(404); // If link not found, respond with 404 Not Found status
    throw new Error('Link not found');
  }
});

export { getLinks, getLinksById, createLink, updateLink, deleteLink };
