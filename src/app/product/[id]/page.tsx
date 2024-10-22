interface ProductProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Product(props: ProductProps) {
  const params = await props.params;
  return <h1>Product {params.id}</h1>;
}
