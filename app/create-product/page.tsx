import { Container } from "../components/shared/container";
import { CreatedProductForm } from "../components/shared/created-product-form";
import { Title } from "../components/shared/title";

const Page = () => {
  return (
    <Container>
      <Title text="Creating Products page" />
      <CreatedProductForm />
    </Container>
  );
};

export default Page;
