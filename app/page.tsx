import Image from 'next/image';

export default function Page() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image - now smaller */}
        <div className="w-full md:w-1/5"> {/* Reduced from md:w-1/2 */}
          <Image
            src="/my-photo.jpg"
            width={1080}
            height={1920}
            alt="Portfolio image of me"
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        {/* Text - now takes more space */}
        <div className="w-full md:w-2/3 text"> {/* Increased from md:w-1/2 */}
          <p className="text-lg leading-relaxed">
            Muying Zhao
          </p>
          <p className="text-lg leading-relaxed">
            muying.zhao31@gmail.com
          </p>
          <p className="text-lg leading-relaxed">
            Fake it till you make it!
          </p>
        </div>
      </div>
     
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <p className="text-lg leading-relaxed">
        Aspiring Software Developer with a strong foundation in full-stack development, data engineering, and machine learning. Experienced in building scalable systems, designing ETL pipelines, and developing interactive web applications. Skilled in Python, Java, JavaScript, SQL, and cloud technologies (AWS, Huawei Cloud). Passionate about writing clean, efficient code and solving complex problems through software developing and engineering.

          </p>
      </div>

    </section>
  )
}
