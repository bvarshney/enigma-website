import CategoryPage from "@/components/Blogs/CategoryPage";

export async function getServerSideProps(context) {
 
  const { category } = context.params;

  return {
    props: { category },
  };
}

export default CategoryPage;