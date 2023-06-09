const Post = require("../../database/post-matkul");

async function getPosts(req, res) {
  const data = await Post.find({});
  res.send(data);
}
async function getOnePost(req, res) {
  const id = req.params.id;
  const data = await Post.findById(id); // bisa pakai => Post.find({ _id: id });
  res.send(data);
}
async function addPosts(req, res) {
  const postData = {
    kode: req.body.kode,
    nama: req.body.nama,
    sks: req.body.sks,
    kelas: req.body.kelas,
  };
  const post = new Post(postData);
  const respose = await post.save();
  res.send(respose);
}
async function updateOne(req, res) {
  const id = req.params.id;
  const postData = {
    kode: req.body.kode,
    nama: req.body.nama,
    sks: req.body.sks,
    kelas: req.body.kelas,
  };
  const response = await Post.findByIdAndUpdate(id, postData); // bisa pakai => Post.updateOne({ _id: id }, postData);
  res.send(response);
}
async function deleteOne(req, res) {
  const id = req.params.id;
  const response = await Post.findByIdAndDelete(id); // bisa pakai => Post.deleteOne({ _id: id });
  res.send(response);
}

module.exports = {
  getPosts,
  addPosts,
  getOnePost,
  updateOne,
  deleteOne,
};