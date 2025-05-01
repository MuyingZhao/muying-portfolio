import { BlogPosts } from 'app/components/posts'
import { Projects } from 'app/components/projects';
import { Education } from 'app/components/education';
import { Experience } from './components/experience';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Muying Zhao Portfolio
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image - now smaller */}
        <div className="w-full md:w-1/3"> {/* Reduced from md:w-1/2 */}
          <Image
            src="/my-photo.jpg"
            width={1080}
            height={1920}
            alt="Portfolio image of me"
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        {/* Text - now takes more space */}
        <div className="w-full md:w-2/3"> {/* Increased from md:w-1/2 */}
          <p className="text-lg leading-relaxed">
            Recent Master's graduate in Health Data Science with a strong foundation in Computer Science. 
            Proficient in Python, R, Java, and multiple software development tools. Experienced in machine learning, 
            data analysis, and software engineering.
          </p>
        </div>
      </div>
      <div><p></p></div>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <p className="text-lg leading-relaxed">
            Recent Master's graduate in Health Data Science with a strong foundation in Computer Science. 
            Proficient in Python, R, Java, and multiple software development tools. Experienced in machine learning, 
            data analysis, and software engineering.
          </p>
      </div>

      <div className="my-8">
        <Projects />
      </div>

      <div className="my-8">
        <Experience />
      </div>

      <div className="my-8">
        <Education />
      </div>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
