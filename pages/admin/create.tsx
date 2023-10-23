import React, { useState } from "react";
import axios from "axios";

import { Input, Label, Textarea } from "@roketid/windmill-react-ui";
import { Button } from "@roketid/windmill-react-ui";
import PageTitle from "admin/components/Typography/PageTitle";

import Layout from "admin/containers/Layout";

const Create = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [labels, setLabels] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setImageUrl(e.target.value);
  };

  const handleLabelsChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLabels(e.target.value);
  };

  const handleCourseNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCourseName(e.target.value);
  };

  const handleDescriptionChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDescription(e.target.value);
  };

  const handleClick = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf";

    fileInput.onchange = async (e) => {
      const file = (e.target as HTMLInputElement)?.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("imageUrl", imageUrl); // Append the image URL
      formData.append("labels", labels); // Append the labels
      formData.append("courseName", courseName); // Append the course name
      formData.append("description", description); // Append the description

      // Assuming you have a way to get the user ID
      const userId = 123;

      try {
        await axios.post(
          "https://us-central1-flow-b60e6.cloudfunctions.net/upload_pdf/123456",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // Handle the success scenario here
      } catch (error) {
        // Handle the error scenario here
        console.error("Error occurred while uploading the file", error);
      }
    };

    fileInput.click();
  };

  return (
    <Layout>
      <PageTitle>Create a course</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Course name</span>
          <Input
            className="mt-1"
            placeholder="Brufen 400mg"
            crossOrigin={undefined}
            onChange={handleCourseNameChange}
          />
        </Label>

        <Label className="mt-4">
          <span>Description</span>
          <Textarea
            className="mt-1"
            rows={3}
            placeholder="Enter some long form content."
            onChange={handleDescriptionChange}
          />
        </Label>

        <Label className="mt-4">
          <span>Image URL</span>
          <Input
            className="mt-1"
            value={imageUrl}
            onChange={handleImageChange}
            placeholder="Enter the image URL"
            crossOrigin={undefined}
          />
        </Label>

        <Label className="mt-4">
          <span>Labels (up to 5, separated by comma)</span>
          <Input
            className="mt-1"
            value={labels}
            onChange={handleLabelsChange}
            placeholder="Enter labels separated by comma"
            crossOrigin={undefined}
          />
        </Label>

        <div className="pt-4">
          <Button
            className="bg-teal-400 hover:bg-teal-500 focus:outline-none"
            onClick={handleClick}
          >
            Upload PDF
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
