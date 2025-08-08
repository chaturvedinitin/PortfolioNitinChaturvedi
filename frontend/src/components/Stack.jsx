import React from "react";

const skills = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "C", icon: "devicon-c-original colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
//   { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
//   { name: "Django", icon: "devicon-django-plain" },
//   { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "ExpressJS", icon: "devicon-express-original" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
//   { name: "Supabase", icon: "devicon-supabase-plain colored" },
//   { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
//   { name: "Railway", icon: "devicon-railway-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "Vercel", icon: "devicon-vercel-original" },
//   { name: "Firebase", icon: "devicon-firebase-plain colored" },
//   { name: "Docker", icon: "devicon-docker-plain colored" },
//   { name: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
//   { name: "Postman", icon: "devicon-postman-plain colored" },
];

export default function Stack() {
  return (
    <section className="">
      <h2 className="text-xl font-semibold mb-2 ml-[0.1rem]">
        Technical Skills &amp; Tools
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#232328]
                       border border-[#333] text-[10px] font-medium shadow-sm
                       hover:border-accent transition"
            style={{ minWidth: "fit-content" }}
          >
            <i className={`${skill.icon} text-lg`} title={skill.name}></i>
            <span className="text-[14px]">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
