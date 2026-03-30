// FILE: app/portfolio/[slug]/page.tsx
//
// PAGE: PROJECT DETAIL
//
// Página dinámica de cada proyecto.
// Lee el slug de la URL, busca el proyecto y muestra su título.
import ProjectDetailTemplate from "../../../components/portfolio/ProjectDetailTemplate";
import { portfolioProjects } from "../../../data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  // 👉 esperamos params y sacamos el slug

  const project = portfolioProjects.find((item) => item.slug === slug);
  // 👉 buscamos en el array el proyecto cuyo slug coincide con la URL

 if (!project) {
    return <div className="p-10">NO ENCONTRADO: {slug}</div>;
    // 👉 si no existe, muestra este mensaje
  }

  return <ProjectDetailTemplate project={project} />;
  // 👉 aquí ya no mostramos solo el título
  // 👉 aquí renderizamos TODA la plantilla
}