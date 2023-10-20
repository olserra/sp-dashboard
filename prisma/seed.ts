import { prisma } from "../prisma/prisma";

async function seed() {
  try {
    // Create user data
    const user1 = await prisma.user.create({
      data: {
        name: "Otavio",
        email: "otavio@boostio.ai",
        role: "ADMIN",
      },
    });

    // Create post data
    await prisma.post.createMany({
      data: [
        {
          userId: user1.id,
          title: "Unlocking Business Success with a Decision-Making Tool",
          content: `In the ever-evolving business landscape, making informed decisions is key to staying ahead of the competition and achieving long-term success. However, the complexity and abundance of data can often make decision-making a challenging task. That's where a powerful decision-making tool comes into play.

            Introducing Boostio's Decision-Making Tool, the game-changer that empowers businesses to unlock their true potential. Built on the foundations of Artificial General Intelligence (AGI), our tool leverages advanced algorithms and machine learning to provide valuable insights, recommendations, and strategies tailored to your specific needs.
            
            Imagine having a trusted advisor at your fingertips, capable of analyzing vast amounts of data, identifying patterns, and predicting outcomes with exceptional accuracy. Boostio's Decision-Making Tool does just that, enabling you to make well-informed choices that drive your business forward.
            
            Whether you're faced with strategic dilemmas, market uncertainties, or operational challenges, our tool offers unparalleled support. It helps you navigate through complexities, explore different scenarios, and uncover hidden opportunities that propel your business to new heights.
            
            Boostio's Decision-Making Tool is designed to be user-friendly, intuitive, and adaptable to your unique requirements. It streamlines the decision-making process, saving you time, effort, and resources. With a user-friendly interface and comprehensive analytics, you can easily visualize data, assess risks, and make confident decisions.
            
            Don't let the fear of uncertainty hold you back. Embrace the power of Boostio's Decision-Making Tool and unlock the true potential of your business. Gain a competitive edge, seize opportunities, and drive growth with precision and confidence.
            
            Take your business to the next level with Boostio - the name synonymous with cutting-edge technology and transformative solutions.`,
          image: `https://cdn.analyticsvidhya.com/wp-content/uploads/2023/05/1.jpg`,
          published: true,
          date: "02/05/2023",
        },
        {
          userId: user1.id,
          title: "Boosting Productivity with AI: The Future of Work",
          content: `As we step into the era of digital transformation, organizations are constantly seeking ways to optimize productivity and efficiency. In this fast-paced and technology-driven landscape, harnessing the power of Artificial Intelligence (AI) has become imperative for staying competitive and embracing the future of work.

            Boostio presents a groundbreaking solution that revolutionizes productivity and empowers businesses to thrive in the digital age. Our AI-powered platform unlocks new realms of efficiency, seamlessly integrating cutting-edge technologies with human capabilities.
            
            Imagine a workforce that is augmented by AI, working in perfect harmony to achieve unparalleled levels of productivity. Boostio's AI-driven tools and algorithms understand your unique business challenges, automate routine tasks, and provide valuable insights, enabling you to focus on high-impact activities.
            
            With Boostio, you can tap into the full potential of your workforce. AI algorithms analyze vast amounts of data, identifying patterns, trends, and anomalies that might go unnoticed by human eyes. This valuable intelligence fuels informed decision-making, enhances operational efficiency, and drives innovation.
            
            From intelligent process automation to predictive analytics, Boostio equips you with the tools to optimize your business processes, streamline workflows, and unlock hidden opportunities. The future of work is here, and it's powered by Boostio.
            
            Our platform integrates seamlessly with your existing systems, allowing for a smooth transition and maximum ROI. We understand that every business is unique, which is why our AI models are customizable and adaptable to your specific needs. With Boostio, you can embrace the future of work with confidence.
            
            Stay ahead of the curve and be at the forefront of productivity with Boostio. Experience the transformative power of AI, boost your team's performance, and unlock unprecedented levels of efficiency.`,
          image: `https://images.mktw.net/im-801168?width=700&height=499`,
          published: true,
          date: "05/06/2023",
        },
        {
          userId: user1.id,
          title: "Enhancing Collaboration: AI-driven Knowledge Management",
          content: `In today's fast-paced business environment, effective collaboration and knowledge sharing are crucial for driving innovation and staying competitive. Boostio introduces a groundbreaking solution that leverages the power of Artificial Intelligence (AI) to enhance collaboration and revolutionize knowledge management.

            Boostio's AI-driven knowledge management platform empowers teams to seamlessly capture, organize, and access valuable insights and information. Say goodbye to information silos and endless searching for critical data. With Boostio, knowledge is at your fingertips, enabling teams to make faster, more informed decisions.
            
            Our advanced AI algorithms understand the nuances of language and context, enabling natural language querying and dialogue-based information retrieval. Whether it's finding the latest research, extracting key insights from customer conversations, or uncovering hidden patterns in data, Boostio's knowledge management platform ensures that critical information is readily available when you need it.
            
            Collaboration is taken to new heights with Boostio's intelligent features. Real-time collaboration tools enable teams to work together seamlessly, regardless of geographical boundaries. Brainstorm, share ideas, and co-create with ease, all within a centralized platform designed to foster collaboration and innovation.
            
            Boostio's AI-powered knowledge management also unlocks the full potential of your organization's collective expertise. The platform captures and analyzes unstructured data from various sources, such as internal documents, customer interactions, and external research. Insights are generated, patterns are identified, and recommendations are provided, all with the aim of driving continuous improvement and innovation.
            
            With Boostio's knowledge management platform, you can harness the power of collective intelligence, leveraging the knowledge and expertise of your entire organization. From new hires to seasoned veterans, everyone can contribute and benefit from the shared knowledge ecosystem.
            
            Experience the power of Boostio's AI-driven knowledge management and transform the way your teams collaborate, innovate, and make decisions. Unlock the true potential of your organization's knowledge and elevate collaboration to new heights.`,
          image: `https://document360.com/wp-content/uploads/2021/05/ai_in_knowledge_management_Document360_v2-scaled.jpg`,
          published: true,
          date: "14/07/2022",
        },
      ],
    });

    console.log("Seed data created successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
