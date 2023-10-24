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
  content: {
    introduction: string;
    chapters: { title: string; content: string }[];
    quizzes: { question: string; options: string[]; answer: string }[];
  };
}

const Cards = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false); // State for the carousel modal
  const [carouselContent, setCarouselContent] = useState<Course[]>([]); // State for the carousel content
  const BrufenImage =
    "https://pharmacareonline.qa/cdn/shop/products/brufen-syrup-100.png?v=1673683170";

  const mockData: Course[] = [
    {
      course_id: 1,
      course_name: "Brufen Training",
      course_description:
        "Learn about the uses and dosage of Brufen medication.",
      course_image: BrufenImage,
      badges: ["Oral", "Daily", "Pharma Industry", "Certification"],
      content: {
        introduction:
          "This course provides a comprehensive overview of Brufen medication.",
        chapters: [
          {
            title: "Chapter 1",
            content: `If you are taking the over-the-counter product, read all directions on the product package before taking this medication. If your doctor has prescribed this medication, read the Medication Guide provided by your pharmacist before you start taking ibuprofen and each time you get a refill. If you have any questions, ask your doctor or pharmacist. Take this medication by mouth, usually every 4 to 6 hours with a full glass of water (8 ounces/240 milliliters) unless your doctor directs you otherwise. Do not lie down for at least 10 minutes after taking this drug. If you have stomach upset while taking this medication, take it with food, milk, or an antacid. The dosage is based on your medical condition and response to treatment.`,
          },
          {
            title: "Chapter 2",
            content:
              "Do not lie down for at least 10 minutes after taking this drug. If you have stomach upset while taking this medication, take it with food, milk, or an antacid. The dosage is based on your medical condition and response to treatment. If you are taking the over-the-counter product, read all directions on the product package before taking this medication. If your doctor has prescribed this medication, read the Medication Guide provided by your pharmacist before you start taking ibuprofen and each time you get a refill.",
          },
          // Add more chapters as needed
        ],
        quizzes: [
          {
            question: "What are the common uses of Brufen?",
            options: [
              "Pain relief",
              "Fever reduction",
              "Inflammation management",
            ],
            answer: "Pain relief",
          },
          {
            question: "How often should Brufen be taken?",
            options: ["Once a day", "Twice a day", "As needed"],
            answer: "As needed",
          },
          // Add more quiz questions as needed
        ],
      },
    },
    {
      course_id: 2,
      course_name: "Benuron Basics",
      course_description:
        "Understand the benefits and side effects of Benuron.",
      course_image: BrufenImage,
      badges: ["Injection", "Weekly", "Pharma Industry", "Training"],
      content: {
        introduction:
          "Benuron Basics is a foundational course that covers the basics of using Benuron...",
        chapters: [
          {
            title: "Chapter 1",
            content: "Introduction to Benuron and its applications...",
          },
          {
            title: "Chapter 2",
            content: "Understanding the potential side effects of Benuron...",
          },
          // Add more chapters as needed
        ],
        quizzes: [
          {
            question: "What is the primary application of Benuron?",
            options: ["Pain relief", "Allergy management", "Antibiotic"],
            answer: "Pain relief",
          },
          {
            question: "How frequently should Benuron be administered?",
            options: ["Weekly", "As needed", "Twice a day"],
            answer: "As needed",
          },
          // Add more quiz questions as needed
        ],
      },
    },
    {
      course_id: 3,
      course_name: "Aspirin Awareness",
      course_description:
        "Comprehensive guide to the applications and risks of Aspirin.",
      course_image: BrufenImage,
      badges: ["Tablet", "Monthly", "Pharma Industry", "Course Material"],
      content: {
        introduction:
          "Aspirin Awareness is designed to provide a comprehensive understanding of the applications and risks associated with Aspirin...",
        chapters: [
          {
            title: "Chapter 1",
            content: "Exploring the history and development of Aspirin...",
          },
          {
            title: "Chapter 2",
            content: "Understanding the potential benefits of Aspirin...",
          },
          // Add more chapters as needed
        ],
        quizzes: [
          {
            question: "What is the primary benefit of Aspirin?",
            options: ["Pain relief", "Blood thinning", "Antibiotic"],
            answer: "Blood thinning",
          },
          {
            question: "How frequently is Aspirin recommended for use?",
            options: ["Daily", "Monthly", "As needed"],
            answer: "As needed",
          },
          // Add more quiz questions as needed
        ],
      },
    },
    {
      course_id: 4,
      course_name: "Paracetamol Proficiency",
      course_description:
        "Master the art of prescribing and administering Paracetamol.",
      course_image: BrufenImage,
      badges: ["Liquid", "As Needed", "Pharma Industry", "Training"],
      content: {
        introduction:
          "Paracetamol Proficiency provides in-depth training on the proper prescription and administration of Paracetamol...",
        chapters: [
          {
            title: "Chapter 1",
            content: "Understanding the various forms of Paracetamol...",
          },
          {
            title: "Chapter 2",
            content:
              "Dosage instructions and considerations for different patient groups...",
          },
          // Add more chapters as needed
        ],
        quizzes: [
          {
            question: "What is the common form of Paracetamol for children?",
            options: ["Tablet", "Liquid", "Injection"],
            answer: "Liquid",
          },
          {
            question:
              "How should the dosage of Paracetamol be adjusted for elderly patients?",
            options: ["Increased", "Decreased", "Remain the same"],
            answer: "Decreased",
          },
          // Add more quiz questions as needed
        ],
      },
    },
    // Add more courses as needed
  ];

  const handleCardClick = (course: Course) => {
    // Logic for opening the carousel modal
    setCarouselContent(mockData); // Assuming mockData is the content for the carousel
    setIsCarouselModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTakeQuiz = () => {
    // Logic for closing the carousel modal
    setIsCarouselModalOpen(false);
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

  const handleDelete = async () => {
    setIsDeleteModalOpen(true);
    try {
      const courseID = selectedCourse?.course_id; // Access course_id safely using optional chaining
      const clientID = selectedCourse?.client_id; // Replace 'YOUR_CLIENT_ID' with the actual client ID
      await axios.delete(`/delete-course/${courseID}/${clientID}`);
      console.log("Course deleted");
      // Add your code to handle the successful deletion of the course
      setIsDeleteModalOpen(false);
      // Fetch the updated list of courses after deletion
      const response = await axios.get("/get-courses/{client_id}");
      setCourses(response.data);
      setSelectedCourse(null); // Reset the selectedCourse state
    } catch (error) {
      console.error("Error deleting course:", error);
      // Add your code to handle errors during the deletion process
    }
  };

  const handleEdit = () => {
    setIsCarouselModalOpen(false); // Close the carousel modal
    setIsModalOpen(true); // Open the edit modal
    setSelectedCourse(carouselContent[currentIndex]); // Set the selectedCourse state
  };

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
        {mockData.map((course: Course) => (
          <Card
            key={course.course_id}
            colored
            className="grid grid-cols-2 gap-4 text-gray-700 border-gray-300 border cursor-pointer shadow-md"
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
      {isCarouselModalOpen && (
        <Modal
          isOpen={isCarouselModalOpen}
          onClose={() => setIsCarouselModalOpen(false)}
        >
          <ModalHeader>{carouselContent[currentIndex].course_name}</ModalHeader>
          <ModalBody>
            <div>
              <p className="pb-4">
                {carouselContent[currentIndex].content.introduction}
              </p>
              <h2 className="pb-4">
                {
                  carouselContent[currentIndex].content.chapters[currentChapter]
                    .title
                }
              </h2>
              <p>
                {
                  carouselContent[currentIndex].content.chapters[currentChapter]
                    .content
                }
              </p>
            </div>
          </ModalBody>
          <ModalFooter className="flex-row justify-between">
            <div>
              <Button
                layout="outline"
                onClick={() =>
                  setCurrentChapter((prev) => Math.max(prev - 1, 0))
                }
                className="mr-2"
              >
                &lt; Previous
              </Button>
              {currentChapter ===
              carouselContent[currentIndex].content.chapters.length - 1 ? (
                <Button layout="primary" onClick={handleTakeQuiz}>
                  Take quiz
                </Button>
              ) : (
                <Button
                  layout="outline"
                  onClick={() =>
                    setCurrentChapter((prev) =>
                      Math.min(
                        prev + 1,
                        carouselContent[currentIndex].content.chapters.length -
                          1
                      )
                    )
                  }
                  className="mr-2"
                >
                  Next &gt;
                </Button>
              )}
              <Button layout="link" onClick={handleEdit} className="underline">
                Edit
              </Button>
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
            <Button onClick={handleDelete}>Delete</Button>
          </ModalFooter>
        </Modal>
      )}
    </Layout>
  );
};

export default Cards;
