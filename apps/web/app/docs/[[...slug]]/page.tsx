// import { allDocs, type Doc } from "contentlayer/generated";

interface Props {
  params: {
    slug: string[];
  };
}

// function getDoc({ params }: Props) {
//   const slug = params.slug?.join("/") || "";

//   return allDocs.find((doc) => doc.url === slug);
// }

// export function generateMetadata({ params }: Props): Metadata {
//   const doc = getDoc({ params });

//   if (!doc) return {};

//   return {
//     title: doc.title,
//     description: doc.description,
//     openGraph: {
//       type: "article",
//       title: doc.title,
//       description: doc.description,
//       images: "",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: doc.title,
//       description: doc.description,
//       images: [""],
//     },
//   };
// }

// export function generateStaticParams() {
//   return allDocs.map((doc) => ({ slug: doc.url.split("/") }));
// }

interface ContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ContentLayout({ title, description, children }: ContentLayoutProps) {
  return (
    <div className="">
      <div id="mainContent" className="py-8">
        {children}
      </div>
    </div>
  );
}

function DocFooter() {
  return <footer> Footer </footer>;
}
