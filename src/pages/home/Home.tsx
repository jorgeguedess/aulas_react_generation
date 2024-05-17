interface HomeProps {
  title: string;
  text: string;
}

function Home({ title, text }: HomeProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Home;
