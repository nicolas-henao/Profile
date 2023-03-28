import React, { useState, useEffect, useRef } from "react";
import AvatarEditor from "react-avatar-editor";

export const ImageProfile = () => {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showEditor, setShowEditor] = useState(true);
  const inputRef = useRef();

	useEffect(() => {
    const savedImage = localStorage.getItem('profile-image');
    if (savedImage) {
      setCroppedImage(savedImage);
      setShowEditor(false);
    }
  }, []);

  function handleImageChange(event) {

		setImage(null);
    setEditor(null);
    setCroppedImage(null);
    setShowEditor(true);

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => setImage(reader.result));
    reader.readAsDataURL(file);

		localStorage.removeItem('profile-image');
  }

  function handleSave() {
    if (editor) {
      const canvas = editor.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
				const croppedImageUrl = URL.createObjectURL(blob)
        setCroppedImage(croppedImageUrl);
        setShowEditor(false);
				localStorage.setItem('profile-image', croppedImageUrl)
      }, "image/jpeg, image/jpeg, image/png");
    }
  }

	function handleCancel() {
		setShowEditor(false)  
	}

  function handleButtonClick () {
    inputRef.current.click();
  };


  return (
    <div>
      <input type="file" ref={inputRef} style={{display:"none"}} onChange={handleImageChange} />
      <button onClick={handleButtonClick}>Choose File</button>
      {showEditor && image && (
        <AvatarEditor
          ref={setEditor}
          image={image}
          width={250}
          height={250}
          border={0}
          borderRadius={125}
          scale={1}
        />
      )}
      {!showEditor && croppedImage && (
        <img className="" src={croppedImage} alt="Imagen recortada" />
      )}
			{showEditor && (
				<button className="btn-save" onClick={handleSave}>Guardar</button>
			)}
			{showEditor && (
				<button className="btn-cancel" onClick={handleCancel}>Cancelar</button>
			)}
    </div>
  );
};
