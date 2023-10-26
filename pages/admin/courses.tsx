import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
  Select,
  Label,
} from "@roketid/windmill-react-ui";
import PageTitle from "admin/components/Typography/PageTitle";
import Layout from "admin/containers/Layout";
import Image from "next/image";
import TrashIcon from "../../public/assets/img/trash.png";
import response, { ITableData } from "utils/demo/tableData";

interface Course {
  id: number;
  name: string;
  category: string;
  questions: number;
  participants: number;
  averageTime: number;
  status: string;
  createdDate: string;
  content: {
    introduction: string;
    chapters: { title: string; content: string }[];
    quizzes: { question: string; options: string[]; answer: string }[];
  };
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false); // State for the carousel modal
  const [carouselContent, setCarouselContent] = useState<Course[]>([]); // State for the carousel content
  const [quizModalOpen, setQuizModalOpen] = useState(false); // State for the quiz modal
  const [page, setPage] = useState(1);
  const [data, setData] = useState<ITableData[]>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p: number) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const mockData: Course[] = [
    {
      id: 1,
      name: "Brufen Training",
      category: "Pain relief",
      questions: 2,
      participants: 120,
      averageTime: 35,
      status: "Active",
      createdDate: "2023-10-25",
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
        ],
      },
    },
    {
      id: 2,
      name: "Benuron Basics",
      category: "Gastro",
      questions: 2,
      participants: 90,
      averageTime: 40,
      status: "Active",
      createdDate: "2023-10-24",
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
        ],
      },
    },
    {
      id: 3,
      name: "Aspirin Awareness",
      category: "Nutrition",
      questions: 2,
      participants: 150,
      averageTime: 30,
      status: "Active",
      createdDate: "2023-10-23",
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
        ],
      },
    },
    {
      id: 4,
      name: "Paracetamol Proficiency",
      category: "Medical",
      questions: 2,
      participants: 100,
      averageTime: 45,
      status: "Active",
      createdDate: "2023-10-22",
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
        ],
      },
    },
    // Add more courses as needed
  ];

  const handleCourseClick = (course: Course) => {
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
    setQuizModalOpen(true);
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
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Course Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Questions</TableCell>
              <TableCell>Participants</TableCell>
              <TableCell>Avg. time (h)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {mockData.map((course, i) => (
              <TableRow
                key={i}
                onClick={() => handleCourseClick(course)}
                className="cursor-pointer"
              >
                <TableCell>
                  <div className="flex items-center text-sm">{course.name}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {course.category}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {course.questions}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {course.participants}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {course.averageTime}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {course.status}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {course.createdDate}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

      {isModalOpen && selectedCourse && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalBody>
            <div className="mb-4">
              <Label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </Label>
              <Input
                value={(selectedCourse as any).name}
                onChange={(e) =>
                  setSelectedCourse({
                    ...(selectedCourse as any),
                    name: e.target.value,
                  })
                }
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter course description"
                crossOrigin={undefined}
              />
            </div>

            <div className="mb-4">
              <Label className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </Label>
              <Input
                value={(selectedCourse as any).category}
                onChange={(e) =>
                  setSelectedCourse({
                    ...(selectedCourse as any),
                    category: e.target.value,
                  })
                }
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter course description"
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
          <ModalHeader>{carouselContent[currentIndex].name}</ModalHeader>
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

      {quizModalOpen && (
        <Modal isOpen={quizModalOpen} onClose={() => setQuizModalOpen(false)}>
          <ModalHeader>{carouselContent[currentIndex].name} Quiz</ModalHeader>
          <ModalBody>
            {carouselContent[currentIndex].content.quizzes.map(
              (quiz, index) => (
                <div key={index} className="mb-4">
                  <p className="pb-2">{quiz.question}</p>
                  {quiz.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={`option_${index}_${optionIndex}`}
                        name={`question_${index}`}
                        value={option}
                      />
                      <label
                        htmlFor={`option_${index}_${optionIndex}`}
                        className="ml-2"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )
            )}
          </ModalBody>
          <ModalFooter className="flex-row justify-end">
            <Button layout="primary" onClick={() => setQuizModalOpen(false)}>
              Submit
            </Button>
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

export default Courses;
