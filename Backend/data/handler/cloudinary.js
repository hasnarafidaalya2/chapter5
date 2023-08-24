// cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dp9w7myzm",
    api_key: "772267891668827",
    api_secret: "Bdp0IJkrg0gSGM--3cUN6AlBdio",
    secure: true,
});

module.exports = cloudinary;
