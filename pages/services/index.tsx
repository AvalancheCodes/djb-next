import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ServicesHero from "../../components/hero/services/services-hero";
import LightFeaturesBoard from "../../components/features/light-board/light-features-board";
import { FC } from "react";

interface IProps {
  services: any[];
}

const Services: FC<IProps> = ({ services }) => {
  return (
    <>
      <ServicesHero />
      <LightFeaturesBoard features={services} />
    </>
  );
};

export const getStaticProps = async (context: any): Promise<any> => {
  const filesPath = path.join(process.cwd(), "content", "services");
  const files = fs.readdirSync(filesPath);
  const summaries = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(filesPath, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return frontMatter;
  });

  const services = summaries;
  return {
    props: {
      services,
    },
  };
};

export default Services;
