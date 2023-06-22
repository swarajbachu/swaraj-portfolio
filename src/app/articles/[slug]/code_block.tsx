import { useState } from "react";
import { FiCopy } from "react-icons/fi";



const CodeBlock = ({ children }:any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="w-full my-5 overflow-auto relative bg-gray-200 dark:bg-gray-800 p-5 rounded-md">
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 p-2 focus:outline-none text-gray-600
         hover:text-gray-800
         dark:text-gray-400 dark:hover:text-gray-200
         "
      >
        {copied ? "Copied!" : <FiCopy />}
      </button>
      <pre className=" md:text-sm text-lg">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;



