import React from "react";
import axios from "axios";

import { Input, Label, Textarea } from "@roketid/windmill-react-ui";
import { Button } from "@roketid/windmill-react-ui";
import PageTitle from "admin/components/Typography/PageTitle";

import Layout from "admin/containers/Layout";

const Create = () => {
  const handleClick = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf";

    fileInput.onchange = async (e) => {
      const file = (e.target as HTMLInputElement)?.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      // Assuming you have a way to get the user ID
      const userId = "user_id_placeholder";

      try {
        await axios.post(`/upload-pdf/${userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
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
          />
        </Label>

        <Label className="mt-4">
          <span>Description</span>
          <Textarea
            className="mt-1"
            rows={3}
            placeholder="Enter some long form content."
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
