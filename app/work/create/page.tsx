"use client";
import { useState, useEffect } from "react";
import {
  Plus,
  X,
  Save,
  Code,
  Globe,
  Image as ImageIcon,
  Layers,
  Terminal,
  Upload,
  Check,
} from "lucide-react";

const CreateProject = () => {
  // Color presets mapping to specific tailwind strings required by your schema
  const colorOptions = [
    { name: "Blue", value: "bg-blue-500 hover:bg-blue-600", hex: "#3b82f6" },
    {
      name: "Dark Blue",
      value: "bg-blue-600 hover:bg-blue-700",
      hex: "#2563eb",
    },
    { name: "Red", value: "bg-red-500 hover:bg-red-600", hex: "#ef4444" },
    { name: "Green", value: "bg-green-600 hover:bg-green-700", hex: "#16a34a" },
    {
      name: "Yellow",
      value: "bg-yellow-500 hover:bg-yellow-600",
      hex: "#eab308",
    },
    {
      name: "Purple",
      value: "bg-purple-500 hover:bg-purple-600",
      hex: "#a855f7",
    },
    { name: "Cyan", value: "bg-cyan-500 hover:bg-cyan-600", hex: "#06b6d4" },
    { name: "Black", value: "bg-black hover:bg-gray-800", hex: "#000000" },
    {
      name: "Orange",
      value: "bg-orange-500 hover:bg-orange-600",
      hex: "#f97316",
    },
    { name: "Pink", value: "bg-pink-500 hover:bg-pink-600", hex: "#ec4899" },
  ];

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: null as File | null,
    source: "",
    link: "",
  });

  // Separate state for the actual image file preview (Blob URL)
  const [imagePreview, setImagePreview] = useState("");

  // Tech Stack State
  const [technologies, setTechnologies] = useState([]);
  const [currentTech, setCurrentTech] = useState({
    name: "",
    color: colorOptions[0].value,
  });

  // Submission State
  const [submittedData, setSubmittedData] = useState(null);

  // Clean up object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    // Store the file temporarily
    setFormData((prev) => ({ ...prev, img: file }));
  };

  const uploadImage = async (file) => {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    return data.url; // e.g. /uploads/173567123123-cat.png
  };

  const handleTechChange = (e) => {
    setCurrentTech((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleColorSelect = (colorValue) => {
    setCurrentTech((prev) => ({ ...prev, color: colorValue }));
  };

  const addTechnology = () => {
    if (!currentTech.name.trim()) return;
    setTechnologies([...technologies, { ...currentTech }]);
    setCurrentTech((prev) => ({ ...prev, name: "" }));
  };

  const removeTechnology = (indexToRemove) => {
    setTechnologies(technologies.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedImageUrl = "";

    // Upload image if a file was chosen
    if (formData.img instanceof File) {
      uploadedImageUrl = await uploadImage(formData.img);
    }

    const newProject = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      img: uploadedImageUrl, // <- use URL from server
      source: formData.source,
      link: formData.link,
      technologies: technologies,
    };

    const payload = [newProject];

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const res = await response.json();

      setSubmittedData(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8 font-sans text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: The Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-900 dark:bg-black text-white p-6 flex items-center gap-3">
            <Layers className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Create Project</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Project Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Full Stack E-Commerce"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the project..."
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                required
              />
            </div>

            {/* Image Upload Section */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Project Image
              </label>

              <div
                className={`border-2 border-dashed rounded-lg p-6 transition-colors relative text-center group ${
                  imagePreview
                    ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center gap-3 text-gray-500 dark:text-gray-300">
                  {imagePreview ? (
                    <div className="relative w-full h-32 mb-2">
                      <img
                        src={imagePreview}
                        alt="Selected"
                        className="w-full h-full object-contain rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                        <span className="font-medium text-sm">
                          Click to Change
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Upload className="w-6 h-6 text-gray-400 dark:text-gray-300" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Click to upload
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-300">
                          {" "}
                          or drag and drop
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        SVG, PNG, JPG or GIF
                      </p>
                    </>
                  )}
                </div>
              </div>

              {formData.img && (
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-mono bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-100 dark:border-blue-800">
                  <Check className="w-3 h-3" />
                  <span>File ready: {formData.img.name}</span>
                </div>
              )}
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Code className="w-4 h-4" /> Source Code
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Live Demo Link
                </label>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://myproject.com"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Technologies Builder */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600 space-y-4">
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                Tech Stack Builder
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={currentTech.name}
                    onChange={handleTechChange}
                    placeholder="Tech Name (e.g. React)"
                    className="flex-1 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:border-blue-500"
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTechnology())
                    }
                  />
                  <button
                    type="button"
                    onClick={addTechnology}
                    className="bg-gray-900 dark:bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>

                {/* Color Picker Swatches */}
                <div className="space-y-2">
                  <span className="text-xs text-gray-500 dark:text-gray-300 font-medium">
                    Badge Color
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((option) => (
                      <button
                        key={option.name}
                        type="button"
                        onClick={() => handleColorSelect(option.value)}
                        title={option.name}
                        className={`w-8 h-8 rounded-full border-2 transition-all transform hover:scale-110 ${
                          currentTech.color === option.value
                            ? "border-gray-800 dark:border-white ring-2 ring-gray-300 dark:ring-gray-100 scale-110"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: option.hex }}
                      >
                        {currentTech.color === option.value && (
                          <Check className="w-4 h-4 text-white mx-auto drop-shadow-md" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Tags List */}
              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                  {technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`${tech.color} text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow-sm transition-colors`}
                    >
                      {tech.name}
                      <button
                        type="button"
                        onClick={() => removeTechnology(idx)}
                        className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" /> Submit Project
            </button>
          </form>
        </div>

        {/* Right Column: Live Preview & JSON Output */}
        <div className="space-y-6">
          {/* Visual Card Preview */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <EyeIcon /> Card Preview
            </h3>
            <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-gray-50 dark:bg-gray-700 flex justify-center">
              <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full relative flex items-center justify-center text-gray-400">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="w-12 h-12" />
                  )}
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
                    {formData.title || "Project Title"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                    {formData.description ||
                      "Project description will appear here..."}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.length > 0 ? (
                      technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`${tech.color} text-[10px] text-white px-2 py-1 rounded-md`}
                        >
                          {tech.name}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        No technologies added
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JSON Output */}
          <div className="bg-gray-900 dark:bg-black rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gray-800 dark:bg-gray-900 px-6 py-3 border-b border-gray-700 flex justify-between items-center">
              <span className="text-gray-300 font-mono text-sm flex items-center gap-2">
                <Code className="w-4 h-4 text-green-400" /> JSON Payload
              </span>
              {submittedData && (
                <span className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  Submitted Successfully
                </span>
              )}
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-xs md:text-sm text-gray-300 dark:text-gray-200 leading-relaxed">
                {JSON.stringify(
                  submittedData || [
                    {
                      id: "...",
                      title: formData.title || "...",
                      description: formData.description || "...",
                      technologies: technologies,
                      img: formData.img ? "Will be uploaded on submit" : "...",
                      source: formData.source || "...",
                      link: formData.link || "...",
                    },
                  ],
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple icon component for local use
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-500"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default CreateProject;