import WeddingLabelTool from "./components/WeddingLabelTool";

export default function App() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px" }}>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#8B0000", margin: 0 }}>
          🪔 Wedding Label Designer
        </h1>
        <p style={{ fontSize: 13, color: "#666", margin: "4px 0 0" }}>
         
        </p>
      </div>
      <WeddingLabelTool />
    </div>
  );
}
