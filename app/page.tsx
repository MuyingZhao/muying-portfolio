import Image from 'next/image';

export default function Page() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        {/* Image - now smaller */}
        <div className="w-full md:w-1/4 pt-6"> {/* Reduced from md:w-1/2 */}
          <Image
            src="/my-photo.jpg"
            width={1080}
            height={1920}
            alt="Portfolio image of me"
            className="hidden md:block w-full h-auto rounded-full aspect-square object-cover"
          />
          <Image
            src="/my-photo.jpg"
            width={560}
            height={560}
            alt="Portfolio image of me"
            className="block md:hidden w-full h-auto rounded-full aspect-square object-cover"
          />
        </div>
        
        {/* Text Section - Enhanced Styling */}
<div className="w-full md:w-1/2 pt-8 space-y-6">
  <div className="mb-6">
    <p className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white tracking-tight">
      Milly Muying Zhao
    </p>
    <div className="w-16 h-1 bg-green-600 rounded-full mt-2"></div>
  </div>

  <div className="mb-6">
    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed flex items-center">
      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      Contact me: <span className="text-green-600 ml-1">muying.zhao31@gmail.com</span>
    </p>
  </div>

  <div className="relative">
    <p className="text-2xl md:text-3xl leading-relaxed text-green-600 dark:text-green-400 font-medium italic pl-6 border-l-4 border-green-500">
      "Fake it till you make it!"
    </p>
    <div className="absolute -left-1.5 top-2.5 w-4 h-4 bg-green-500 rounded-full"></div>
  </div>
</div>


<div className="flex flex-col w-full md:w-3/8 md:flex-column gap-8 pt-4 items-start">
  <div className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400 dark:border-indigo-500">
    <h3 className="font-bold text-blue-600 dark:text-blue-300 mb-4 flex items-center">
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      Professional Certifications
    </h3>
    
    <div className="space-y-4">
      <div className="flex items-start">
        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
        <p className="flex-1">
          <span className="font-semibold text-gray-800 dark:text-gray-100">AWS Certified Solutions Architect - Associate</span>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">(EC2, S3, CloudFormation, Lambda)</span>
        </p>
      </div>
      
      <div className="flex items-start">
        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
        <p className="flex-1">
          <span className="font-semibold text-gray-800 dark:text-gray-100">Microsoft Certified: Power BI Data Analyst Associate</span>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">(PowerBI, Power Automate, SQL, Excel)</span>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
      
<div className="flex flex-col md:flex-row gap-8 pt-6 items-start">
  <div className="relative w-full">
    <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <span className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></span>
      Recent Master’s graduate in <span className="font-semibold text-green-600 dark:text-green-400">Health Data Science</span> with a strong foundation in <span className="font-semibold text-green-600 dark:text-green-400">Computer Science</span>. Proficient in <span className="font-semibold text-green-600 dark:text-green-400">Python, R, JavaScript, multiple development tools Git and Kanban</span>, and data tools <span className="font-semibold text-green-600 dark:text-green-400">Power BI, SQL and Tableau</span>.
      Familiar with <span className="font-semibold text-green-600 dark:text-green-400">Cloud Platform AWS, docker, and Kafka</span>.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      I have built 3 projects in Data Analysis(2 years), using R, SQL, Excel, Tableau, and Power BI(Certified), and I also have Intern and Project experience in Software Developing(3 years), using Git, Python(Flask), JaveScript, docker, CSS/HTML, Next.JS and Kanban. In addition, I also explore Machine Learning technologies and data pipeline (4 years) through research and projects, including Pandas, NumPy, Tensorflow, PyTorch, and Scikit-Learn. 
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      My Greatest Strength is <span className="font-semibold text-green-600 dark:text-green-400">learning technologies quickly(I love it!!!), adaptability and collaboration</span>, and I have a <span className="font-semibold text-green-600 dark:text-green-400">natural analytical mind for everything and also a Lego builder to add bricks</span>.
      I am very passionate about using my technologies in real world to provide solutions, whether it is data-driven decision-making or building a full-stack project, I hope that my work can make the world a little bit better.
      And most importantly, I value having fun and being <span className="font-semibold text-green-600 dark:text-green-400">collaborative, inclusive, and proactive</span> while I do it!
    </p>
  </div>
  
</div>


    </section>
  )
}
