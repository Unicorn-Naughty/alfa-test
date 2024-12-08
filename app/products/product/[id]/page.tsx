

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = async ({ params }: {params : any}) => {
  const { id } = await params;
 
  return (
    <div>
      {id}
    </div>
  );
};

export default Page;
