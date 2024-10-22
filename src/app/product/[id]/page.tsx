interface ProductProps {
  params: Promise<{
    id: string;
  }>;
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function Product(props: ProductProps) {
  const params = await props.params;
  return <h1>Product {params.id}</h1>;
}
