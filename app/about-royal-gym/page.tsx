import Breadcrumb from "@/components/Banner/Breadcrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Royal Gym | Royal Gym AE",
  description: "The biggest ladies Only Gym in Al Ain",
  openGraph: {
    title: "About Royal Gym | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    url: `${process.env.FRONTEND_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.FRONTEND_URL}/logos/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Royal Gym AE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Royal Gym | Royal Gym AE",
    description: "The biggest ladies Only Gym in Al Ain",
    images: [`${process.env.FRONTEND_URL}/logos/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/about-royal-gym`,
  },
};

const About = () => {
  return (
    <>
      <Breadcrumb title="About Royal Gym" list={["Home", "About Royal Gym"]} />
      <div className="templateContainer overflow-hidden py-6 lg:py-12 space-y-6">
        <p className="paraDesign" data-aos="fade-left">
          Our journey began in the heart of Al Ain in Al Ain Ladies Club in
          2017, where we created a unique fitness destination designed to
          inspire and empower women. Set in a space that reflects its roots, our
          gym has become known for its dynamic atmosphere, cutting-edge design,
          motivating vibe, and a commitment to fitness freedom.
        </p>
        <p className="paraDesign" data-aos="fade-right">
          Born from a vision to unite individuals of all fitness levels and
          backgrounds, Royal Gym is more than a gym – it’s a community. We
          believe there’s no single path to fitness; instead, we embrace
          diversity, knowing it brings strength and true transformation.
        </p>
        <p className="paraDesign" data-aos="fade-left">
          Our state-of-the-art facilities cater to every need, from strength
          training to functional fitness, cardio to conditioning, and more.
          Whether you’re a general fitness enthusiast, an athlete, a
          powerlifter, a weightlifter, or a fan of specialized workouts you’ll
          find your place here.
        </p>
        <p className="paraDesign" data-aos="fade-right">
          What sets Royal Gym apart is our vibrant community – a collective of
          passionate individuals who see exercise as an essential part of life.
          We cultivate a supportive and motivating environment where members
          come together to celebrate milestones and inspire one another.
        </p>
        <p className="paraDesign" data-aos="fade-left">
          At Royal Gym, passion drives everything we do. Join us and be part of
          a community where fitness is a way of life.
        </p>
        <hr />
        <h2 className="text-right text-3xl font-semibold text-templatePrimary">
          قصة رويال جيم
        </h2>
        <p className="paraDesign !text-right" data-aos="fade-right">
          بدأت رحلتنا في قلب مدينة العين داخل نادي العين للسيدات في عام 2017،
          حيث قمنا بإنشاء وجهة فريدة للياقة البدنية تهدف إلى إلهام وتمكين
          النساء. في مساحة تعكس جذورها، أصبح نادينا معروفًا بأجوائه الديناميكية
          وتصميمه العصري وروحه المحفزة والتزامه بالحرية في ممارسة الرياضة.
        </p>
        <p className="paraDesign !text-right" data-aos="fade-left">
          وُلِد رويال جيم من رؤية تجمع الأفراد من جميع مستويات اللياقة
          والخلفيات، ليصبح أكثر من مجرد نادٍ رياضي – إنه مجتمع. نحن لا نؤمن
          بوجود طريق واحد للياقة، بل نؤمن بأن التنوع هو مصدر القوة والتحول
          الحقيقي.
        </p>
        <p className="paraDesign !text-right" data-aos="fade-right">
          تتميز مرافقنا الحديثة بتلبية جميع الاحتياجات، بدءًا من تدريب القوة
          واللياقة الوظيفية إلى تمارين الكارديو والتكييف وغير ذلك الكثير. سواء
          كنتِ من عشاق اللياقة العامة، أو رياضية، أو رافعة أثقال، أو من محبي
          التدريبات المتخصصة، ستجدين مكانك هنا.
        </p>
        <p className="paraDesign !text-right" data-aos="fade-left">
          ما يميز رويال جيم هو مجتمعنا النابض بالحياة – مجموعة من الأفراد
          الشغوفين الذين يعتبرون التمارين جزءًا أساسيًا من الحياة. نحن نحرص على
          توفير بيئة داعمة ومحفزة، حيث يجتمع الأعضاء للاحتفال بالإنجازات وإلهام
          بعضهم البعض.
        </p>
        <p className="paraDesign !text-right" data-aos="fade-right">
          في رويال جيم، الشغف هو المحرك لكل ما نقوم به. انضمي إلينا وكوني جزءًا
          من مجتمع يجعل اللياقة أسلوب حياة.
        </p>
      </div>
    </>
  );
};

export default About;
