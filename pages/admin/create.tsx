import React, { useState } from "react";
import axios from "axios";

import { Input, Label, Textarea } from "@roketid/windmill-react-ui";
import { Button } from "@roketid/windmill-react-ui";
import PageTitle from "admin/components/Typography/PageTitle";

import Layout from "admin/containers/Layout";

const Create = () => {
  const [productImageURL, setProductImageURL] = useState("");
  const [labels, setLabels] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [targetCompany, setTargetCompany] = useState("");
  const [targetIndustry, setTargetIndustry] = useState("");
  const [product, setProduct] = useState("");

  const handleImageChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setProductImageURL(e.target.value);
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

  const handleTargetRoleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTargetRole(e.target.value);
  };

  const handleTargetCompanyChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTargetCompany(e.target.value);
  };

  const handleTargetIndustryChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTargetIndustry(e.target.value);
  };

  const handleProductChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setProduct(e.target.value);
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
      formData.append("productImageURL", productImageURL); // Append the image URL
      formData.append("labels", labels); // Append the labels
      formData.append("courseName", courseName); // Append the course name
      formData.append("description", description); // Append the description
      formData.append("targetRole", targetRole); // Append the target role
      formData.append("targetCompany", targetCompany); // Append the target company
      formData.append("targetIndustry", targetIndustry); // Append the target industry
      formData.append("product", product); // Append the product

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
          <span>Course name:</span>
          <Input
            className="mt-1"
            placeholder="Brufen 400mg"
            crossOrigin={undefined}
            onChange={handleCourseNameChange}
          />
        </Label>

        <Label className="mt-4">
          <span>Description:</span>
          <Textarea
            className="mt-1"
            rows={3}
            placeholder="Enter some long form content."
            onChange={handleDescriptionChange}
          />
        </Label>

        <Label className="mt-4">
          <span>Labels (up to 5, separated by comma):</span>
          <Input
            className="mt-1"
            value={labels}
            onChange={handleLabelsChange}
            placeholder="Enter labels separated by comma"
            crossOrigin={undefined}
          />
        </Label>

        <Label className="mt-4">
          <span>Target Role:</span>
          <Input
            className="mt-1"
            placeholder="Enter the target role"
            onChange={handleTargetRoleChange}
            crossOrigin={undefined}
          />
        </Label>

        <Label className="mt-4">
          <span>Target Company:</span>
          <Input
            className="mt-1"
            placeholder="Enter the target company"
            onChange={handleTargetCompanyChange}
            crossOrigin={undefined}
          />
        </Label>

        <Label className="mt-4">
          <span>Target Industry:</span>
          <Input
            className="mt-1"
            placeholder="Enter the target industry"
            onChange={handleTargetIndustryChange}
            crossOrigin={undefined}
          />
        </Label>

        <Label className="mt-4">
          <span>Product name:</span>
          <Input
            className="mt-1"
            placeholder="Enter the product"
            onChange={handleProductChange}
            crossOrigin={undefined}
          />
        </Label>

        <Label className="mt-4">
          <span>Product Image URL:</span>
          <Input
            className="mt-1"
            value={productImageURL}
            onChange={handleImageChange}
            placeholder="Enter the image URL"
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
