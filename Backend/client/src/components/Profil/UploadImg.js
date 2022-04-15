import React, { useState } from "react";

const UploadImg = () => {
  const [file, setFile] = useState();
  const handlePicture = (e) => {
    e.preventDefaults();
  };
  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        name="file"
        id="file"
        accept=".jpg, .png, .jpeg"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default UploadImg;
