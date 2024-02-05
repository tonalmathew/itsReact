import { useState, useRef, useEffect } from "react";
import { marked } from "marked";
import styles from "./Project1.module.css";

function Project1() {
	const [markdown, setMarkdown] = useState("# Enter text here!");
	const [isMdCopied, setIsMdCopied] = useState(false);
	const [isHtmlCopied, setIsHtmlCopied] = useState(false);
	const textAreaRef = useRef(null);

	const handleCopyClick = async (val) => {
		try {
			if (val === "md") {
				await navigator.clipboard.writeText(textAreaRef.current.value);
				setIsMdCopied(true);
			} else {
				await navigator.clipboard.writeText(marked.parse(markdown));
        setIsHtmlCopied(true)
			}
			console.log("Text copied to clipboard");
		} catch (err) {
			console.error("Unable to copy to clipboard", err);
		}
	};

	useEffect(() => {
		if (isMdCopied) {
			setTimeout(() => {
				setIsMdCopied(false);
			}, 5000);
		}
		if (isHtmlCopied) {
			setTimeout(() => {
				setIsHtmlCopied(false);
			}, 5000);
		}
	}, [isMdCopied, isHtmlCopied]);

	return (
		<>
    <h1 className="text-center font-bold text-4xl text-green-400 m-5 italic">Markdown -&gt; HTML </h1>
			<div className='flex flex-col lg:flex-row gap-4 h-svh lg:m-4 mt-8'>
				<div className='grow w-full h-full relative'>
					<button
						type='button'
						onClick={() => handleCopyClick("md")}
						className='bg-gray-600 hover:bg-gray-800 text-white p-1 border-none rounded-md absolute top-2 right-2 mt-1'
						id='copyBtn'>
						{isMdCopied ? (
							<svg
								className='h-6 w-6'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M5.5 12.5L10.167 17L19.5 8'
									stroke='#00c04b'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
								/>
							</svg>
						)}
					</button>
					<textarea
						id='textId'
						ref={textAreaRef}
						value={markdown}
						onChange={(e) => setMarkdown(e.target.value)}
						className={`${styles.fontFamily} text-white rounded-lg w-full h-full bg-gray-700 resize-none text-base p-2 focus:outline-none`}
					/>
				</div>
				<hr className='w-full lg:w-1 lg:h-full bg-white' />
				<div className='text-white grow w-full h-full relative bg-gray-700 rounded-lg p-2 overflow-auto'>
					<button
						type='button'
						onClick={() => handleCopyClick("html")}
						className='bg-gray-600 hover:bg-gray-800 text-white p-1 border-none rounded-md absolute top-2 right-2 mt-1'
						id='copyBtn'>
						{isHtmlCopied ? (
							<svg
								className='h-6 w-6'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M5.5 12.5L10.167 17L19.5 8'
									stroke='#00c04b'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
								/>
							</svg>
						)}
					</button>
					<pre>{marked.parse(markdown)}</pre>
				</div>
			</div>
		</>
	);
}

export default Project1;
