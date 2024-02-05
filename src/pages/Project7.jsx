import { useState } from "react";

function Project7() {
	const [directorName, setDirectorName] = useState("");
	const [movieName, setMovieName] = useState("");
	const [items, setItems] = useState([]);

	const addItem = () => {
    if(directorName.length<=0 && movieName.length<= 0) return
    setItems([{ directorName, movieName }, ...items]);
		setDirectorName("");
		setMovieName("");
	};

	const removeItem = (index) => {
		const modifyItems = [...items];
		modifyItems.splice(index, 1);
		setItems(modifyItems);
	};

	return (
		<>
			<h1 className='text-center font-bold text-4xl text-white pt-20'>Director and Movies</h1>

			<div className='flex justify-center mt-20 gap-4 m-2'>
				<input
					className='w-96'
					type='text'
					value={directorName}
					placeholder='Director Name'
					onChange={(e) => setDirectorName(e.target.value)}
				/>
				<input
					className='w-96'
					type='text'
					value={movieName}
					placeholder='Movie Name'
					onChange={(e) => setMovieName(e.target.value)}
				/>
				<button className='bg-green-600 p-3 w-20 text-white' onClick={addItem}>
					Add
				</button>
			</div>

			<div className='flex flex-col place-content-center justify-center mt-20'>
				{items.length <= 0 ? (
					<h1 className='text-center font-bold text-gray-500 text-2xl'>
						Nothing to display...
					</h1>
				) : (
					items.map((item, key) => (
						<div key={key} className='flex justify-center m-2 gap-4'>
							<div className='w-96 border border-white text-white p-2'>
								{item.directorName}
							</div>
							<div className='w-96 border border-white text-white p-2'>
								{item.movieName}
							</div>
							<button
								className='bg-red-600 p-3 w-20 text-white'
								onClick={() => removeItem(key)}>
								Remove
							</button>
						</div>
					))
				)}
			</div>
		</>
	);
}

export default Project7;
