import React, { useState, useEffect } from "react";
import Editornavbar from "../components/EditorNavbar";
import Editor from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";

const Editior = () => {
  const [tab, setTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const changeTheme = () => {
    const navbar = document.querySelector(".Editornavbar");
    if (isLightMode) {
      if (navbar) navbar.style.background = "#141414";
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      if (navbar) navbar.style.background = "#f4f4f4";
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  const run = () => {
    const html = htmlCode;
    const css = `<style>${cssCode}</style>`;
    const js = `<script>${jsCode}</script>`;
    const iframe = document.getElementById("iframe");

    if (iframe) {
      iframe.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      run();
    }, 200);
    return () => clearTimeout(debounce);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div>
      <Editornavbar />
      <div className="flex">
        <div className={`left ${isExpanded ? "w-full" : "w-1/2"}`}>
          <div className="tabs flex items-center justify-between h-[50px] px-[40px] w-full gap-2 bg-[#1A1919]">
            <div className="tabs flex items-center gap-2">
              <div
                onClick={() => setTab("html")}
                className={`tab cursor-pointer p-[6px] px-[10px] text-[15px] ${
                  tab === "html" ? "bg-[#333]" : "bg-[#1e1e1e]"
                }`}
              >
                HTML
              </div>
              <div
                onClick={() => setTab("css")}
                className={`tab cursor-pointer p-[6px] px-[10px] text-[15px] ${
                  tab === "css" ? "bg-[#333]" : "bg-[#1e1e1e]"
                }`}
              >
                CSS
              </div>
              <div
                onClick={() => setTab("js")}
                className={`tab cursor-pointer p-[6px] px-[10px] text-[15px] ${
                  tab === "js" ? "bg-[#333]" : "bg-[#1e1e1e]"
                }`}
              >
                JavaScript
              </div>
            </div>

            <div className="flex items-center gap-2">
              <i
                className="text-[20px] cursor-pointer"
                onClick={changeTheme}
              >
                <MdLightMode />
              </i>
              <i
                className="text-[20px] cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <AiOutlineExpandAlt />
              </i>
            </div>
          </div>

          {tab === "html" ? (
            <Editor
              onChange={(value) => setHtmlCode(value || "")}
              height="80vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="html"
              value={htmlCode}
            />
          ) : tab === "css" ? (
            <Editor
              onChange={(value) => setCssCode(value || "")}
              height="80vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="css"
              value={cssCode}
            />
          ) : (
            <Editor
              onChange={(value) => setJsCode(value || "")}
              height="80vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language="javascript"
              value={jsCode}
            />
          )}
        </div>
        {!isExpanded && (
          <iframe
            id="iframe"
            className="w-1/2 min-h-[82vh] bg-[#fff] text-black"
            title="output"
          />
        )}
      </div>
    </div>
  );
};

export default Editior;
