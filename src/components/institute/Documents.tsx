import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "pdfjs-dist/web/pdf_viewer.css"; // PDF styles

// PDF.js worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function DocumentsPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const documents = [
    { title: "GST", fileUrl: "/files/gst.pdf" },
    { title: "PAN", fileUrl: "/files/pan.pdf" },
    { title: "Institute License", fileUrl: "/files/license.pdf" }
  ];

  if (selectedDoc) {
    const doc = documents.find((d) => d.title === selectedDoc);
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">{doc?.title} Viewer</h2>

        <button
          onClick={() => setSelectedDoc(null)}
          className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>

        <div className="border rounded-lg shadow-md p-4 bg-white max-w-4xl mx-auto overflow-auto">
          <Document file={doc?.fileUrl || ""}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <div
            key={doc.title}
            className="border rounded-lg shadow-sm p-4 flex flex-col items-center justify-between min-h-[120px]"
          >
            <div className="mb-4 font-semibold">{doc.title}</div>
            <button
              onClick={() => setSelectedDoc(doc.title)}
              className="w-full py-2 bg-[#6bb5a0] text-white rounded hover:bg-[#5aa28e] transition"
            >
              View {doc.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
