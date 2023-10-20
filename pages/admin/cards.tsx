import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
} from "@roketid/windmill-react-ui";
import PageTitle from "admin/components/Typography/PageTitle";
import Layout from "admin/containers/Layout";
import Image from "next/image";

function Cards() {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const BrufenImage =
    "https://pharmacareonline.qa/cdn/shop/products/brufen-syrup-100.png?v=1673683170";

  const handleCardClick = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      // Make an API call to save the updated data to the database
      // Replace the 'YOUR_API_ENDPOINT' with the actual API endpoint
      await axios.put("YOUR_API_ENDPOINT", selectedCourse);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving course data:", error);
    }
  };

  const mockData = [
    {
      course_id: 1,
      course_name: "Brufen Training",
      course_description:
        "Learn about the uses and dosage of Brufen medication.",
      course_image: BrufenImage,
    },
    {
      course_id: 2,
      course_name: "Benuron Basics",
      course_description:
        "Understand the benefits and side effects of Benuron.",
      course_image: BrufenImage,
    },
    {
      course_id: 3,
      course_name: "Aspirin Awareness",
      course_description:
        "Comprehensive guide to the applications and risks of Aspirin.",
      course_image: BrufenImage,
    },
    {
      course_id: 4,
      course_name: "Paracetamol Proficiency",
      course_description:
        "Master the art of prescribing and administering Paracetamol.",
      course_image: BrufenImage,
    },
    // Add more courses as needed
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/get-courses/{client_id}");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Layout>
      <PageTitle>Courses</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-6">
        {mockData.map((course) => (
          <Card
            key={course.course_id}
            colored
            className="flex flex-col justify-center items-center text-gray-700 border-teal-400 border-2 cursor-pointer"
            onClick={() => handleCardClick(course)}
          >
            <CardBody>
              <p className="mb-4 font-semibold">{course.course_name}</p>
              <p>{course.course_description}</p>
            </CardBody>
            <Image
              src={course.course_image}
              alt="Course image"
              width={50}
              height={50}
              className="pb-4"
            />
          </Card>
        ))}
      </div>
      {isModalOpen && selectedCourse && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <Input
                value={(selectedCourse as any).course_name}
                onChange={(e) =>
                  setSelectedCourse({
                    ...(selectedCourse as any),
                    course_name: e.target.value,
                  })
                }
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter course description"
                crossOrigin={undefined}
              />
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <Textarea
                value={(selectedCourse as any).course_description}
                onChange={(e) =>
                  setSelectedCourse({
                    ...(selectedCourse as any),
                    course_description: e.target.value,
                  })
                }
                className="w-full h-24 px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter course description"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <Input
                value={(selectedCourse as any).course_image}
                onChange={(e) =>
                  setSelectedCourse({
                    ...(selectedCourse as any),
                    course_image: e.target.value,
                  })
                }
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter image URL"
                crossOrigin={undefined}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button layout="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </ModalFooter>
        </Modal>
      )}
    </Layout>
  );
}

export default Cards;
