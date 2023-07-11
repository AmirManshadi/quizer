import QuestionCard from "../components";

export default function RootLayout() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <QuestionCard />
    </main>
  );
}
