import React from 'react';
import { useParams } from 'react-router-dom';
import GetAll from './GetAll';

export default function GetById() {
  const { id } = useParams();

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('doctorName', event.target.doctorName.value);
    formData.append('doctorSpecialist', event.target.doctorSpecialist.value);
    formData.append('fileName', event.target.fileName.value);
    formData.append('fileDescription', event.target.fileDescription.value);
    formData.append('File', event.target.image.files[0]);

    try {
      const response = await fetch('https://localhost:7043/api/Doctor', {
        method: 'POST',
        body: formData,
      });

      // Log the response details for debugging
      console.log(response.status); // Log the status code
      console.log(response.statusText); // Log the status text
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>hii i am doctor get by {id}</h1>

      <h1>My Form</h1>
      <form onSubmit={handlesubmit}>
        {/* Text Inputs */}
        <div>
          <label htmlFor="doctorName">doctorName:</label>
          <input type="text" id="doctorName" name="doctorName" />
        </div>

        <div>
          <label htmlFor="doctorSpecialist">doctorSpecialist:</label>
          <input type="text" id="doctorSpecialist" name="doctorSpecialist" />
        </div>

        <div>
          <label htmlFor="fileName">fileName:</label>
          <input type="text" id="fileName" name="fileName" />
        </div>

        <div>
          <label htmlFor="fileDescription">FileDescription:</label>
          <input type="text" id="fileDescription" name="fileDescription" />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpeg, .jpg, .png, .gif, .bmp, .svg"
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <GetAll/>
    </>
  );
}
