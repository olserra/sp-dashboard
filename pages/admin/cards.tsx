import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
  Badge,
} from "@roketid/windmill-react-ui";
import PageTitle from "admin/components/Typography/PageTitle";
import Layout from "admin/containers/Layout";
import Image from "next/image";
import TrashIcon from "../../public/assets/img/trash.png";

interface Course {
  course_id: number;
  course_name: string;
  course_description: string;
  course_image: string;
  badges: string[];
}

const Cards = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

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
      const { course_id, client_id } = selectedCourse; // Destructure the course_id and client_id from selectedCourse
      await axios.put(
        `/update-course/${course_id}/${client_id}`,
        selectedCourse
      ); // Use backticks for string interpolation
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving course data:", error);
    }
  };

  const confirmDelete = async () => {
    try {
      const courseID = selectedCourse?.course_id; // Access course_id safely using optional chaining
      const clientID = selectedCourse?.client_id; // Replace 'YOUR_CLIENT_ID' with the actual client ID
      await axios.delete(`/delete-course/${courseID}/${clientID}`);
      console.log("Course deleted");
      // Add your code to handle the successful deletion of the course
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting course:", error);
      // Add your code to handle errors during the deletion process
    }
  };

  const handleDelete = async () => {
    setIsDeleteModalOpen(true);
  };

  const mockData = [
    {
      course_id: 1,
      course_name: "Brufen Training",
      course_description:
        "Learn about the uses and dosage of Brufen medication.",
      course_image: BrufenImage,
      badges: ["Oral", "Daily", "Pharma Industry", "Certification"],
    },
    {
      course_id: 2,
      course_name: "Benuron Basics",
      course_description:
        "Understand the benefits and side effects of Benuron.",
      course_image: BrufenImage,
      badges: ["Injection", "Weekly", "Pharma Industry", "Training"],
    },
    {
      course_id: 3,
      course_name: "Aspirin Awareness",
      course_description:
        "Comprehensive guide to the applications and risks of Aspirin.",
      course_image: BrufenImage,
      badges: ["Tablet", "Monthly", "Pharma Industry", "Course Material"],
    },
    {
      course_id: 4,
      course_name: "Paracetamol Proficiency",
      course_description:
        "Master the art of prescribing and administering Paracetamol.",
      course_image: BrufenImage,
      badges: ["Liquid", "As Needed", "Pharma Industry", "Training"],
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
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {mockData.map((course) => (
          <Card
            key={course.course_id}
            colored
            className="grid grid-cols-2 gap-4 text-gray-700 border-teal-400 border-2 cursor-pointer"
            onClick={() => handleCardClick(course)}
          >
            <div className="p-4">
              <p className="mb-4 font-semibold dark:text-white">
                {course.course_name}
              </p>
              <p className="dark:text-white">{course.course_description}</p>
              <div className="flex flex-wrap mt-4">
                {course.badges.map((badge, index) => {
                  const badgeTypes = [
                    "primary",
                    "neutral",
                    "success",
                    "danger",
                    "warning",
                  ];
                  const badgeType = badgeTypes[index % badgeTypes.length] as
                    | "primary"
                    | "neutral"
                    | "success"
                    | "danger"
                    | "warning";
                  return (
                    <Badge
                      type={badgeType}
                      key={badge}
                      className="min-w-max mr-2 mb-2"
                    >
                      {badge}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={course.course_image}
                alt="Course image"
                width={100}
                height={100}
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Badges (Up to 5 words separated by commas)
              </label>
              <Input
                value={(selectedCourse as any).badges.join(", ")}
                onChange={(e) =>
                  setSelectedCourse({
                    ...(selectedCourse as any),
                    badges: e.target.value
                      .split(",")
                      .map((badge) => badge.trim()),
                  })
                }
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter badges"
                crossOrigin={undefined}
              />
            </div>
          </ModalBody>
          <ModalFooter className="flex-row justify-between">
            <div
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <Image src={TrashIcon} alt="Delete" width={20} height={20} />
            </div>
            <div className="space-x-2">
              <Button layout="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </ModalFooter>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalBody>Are you sure you want to delete this course?</ModalBody>
          <ModalFooter className="flex-row justify-between">
            <Button
              layout="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmDelete}>Delete</Button>
          </ModalFooter>
        </Modal>
      )}
    </Layout>
  );
};

export default Cards;
