'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const NormalLevel = () => {
    const [scoreCount, setScoreCount] = useState(0);
    const [floorCount, setFloorCount] = useState(1);
    const [selectedBox, setSelectedBox] = useState(null);
    const [flippedBox, setFlippedBox] = useState(null);
    const [boxContent, setBoxContent] = useState('');
    const [boxes, setBoxes] = useState([
        { name: 'Box1', content: 'Gem' },
        { name: 'Box2', content: 'Gem' },
        { name: 'Box3', content: 'Gem' },
        { name: 'Box4', content: 'Gem' }
    ]);

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Function to handle box click
    const handleBoxClick = (index, box) => {
        if (index === flippedBox) return; // Prevent flipping the same box twice
        setSelectedBox(boxes[index].name);
        setFlippedBox(index);
        setBoxContent(box.content)
    }

    const [selectedBox2, setSelectedBox2] = useState(null);
    const [flippedBox2, setFlippedBox2] = useState(null);
    const [boxContent2, setBoxContent2] = useState('');
    const [boxes2, setBoxes2] = useState([
        { name2: 'Box1', content2: 'Gem' },
        { name2: 'Box2', content2: 'Gem' },
        { name2: 'Box3', content2: 'Gem' },
        { name2: 'Box4', content2: 'Gem' }
    ]);


    // Function to shuffle an array
    const shuffleArray2 = (array2) => {
        for (let i = array2.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array2[i], array2[j]] = [array2[j], array2[i]];
        }
        return array2;
    };

    // Function to handle box click
    const handleBoxClick2 = (index2, box2) => {
        if (index2 === flippedBox2) return; // Prevent flipping the same box twice
        setSelectedBox2(boxes[index2].name);
        setFlippedBox2(index2);
        setBoxContent2(box2.content2)
    }

    const [selectedBox3, setSelectedBox3] = useState(null);
    const [flippedBox3, setFlippedBox3] = useState(null);
    const [boxContent3, setBoxContent3] = useState('');
    const [boxes3, setBoxes3] = useState([
        { name3: 'Box2', content3: 'Gem' },
        { name3: 'Box1', content3: 'Gem' },
        { name3: 'Box3', content3: 'Gem' },
        { name3: 'Box4', content3: 'Gem' }
    ]);
    // Function to shuffle an array
    const shuffleArray3 = (array3) => {
        for (let i = array3.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array3[i], array3[j]] = [array3[j], array3[i]];
        }
        return array3;
    };

    // Function to handle box click
    const handleBoxClick3 = (index3, box3) => {
        if (index3 === flippedBox3) return; // Prevent flipping the same box twice
        setSelectedBox3(boxes3[index3].name3);
        setFlippedBox3(index3);
        setBoxContent3(box3.content3)
    }


    useEffect(() => {
        const shuffledBoxes = shuffleArray([...boxes]); // Call shuffleArray to shuffle the boxes
        const randomIndex = Math.floor(Math.random() * shuffledBoxes.length);
        shuffledBoxes[randomIndex].content = 'Bomb';
        setBoxes(shuffledBoxes);

        const shuffledBoxes2 = shuffleArray2([...boxes2]); // Call shuffleArray to shuffle the boxes
        const randomIndex2 = Math.floor(Math.random() * shuffledBoxes2.length);
        shuffledBoxes2[randomIndex2].content2 = 'Bomb';
        setBoxes2(shuffledBoxes2);

        const shuffledBoxes3 = shuffleArray3([...boxes3]); // Call shuffleArray to shuffle the boxes
        const randomIndex3 = Math.floor(Math.random() * shuffledBoxes3.length);
        shuffledBoxes3[randomIndex3].content3 = 'Bomb';
        setBoxes3(shuffledBoxes3);
    }, []);

    useEffect(() => {
        if (boxContent === "Gem" && floorCount === 1) {
            setTimeout(() => {
                setFloorCount(2);
                setScoreCount(10)
            }, 1000);

        }
    }, [boxContent, floorCount]);

    useEffect(() => {
        if (boxContent2 === "Gem" && floorCount === 2) {
            setTimeout(() => {
                setFloorCount(3);
                setScoreCount(20)
            }, 1000);
        } else if (boxContent2 === "Bomb" && floorCount === 2) {
            setSelectedBox('')
            setBoxContent('')
        }
    }, [boxContent2, floorCount, boxContent]);

    useEffect(() => {
        if (boxContent3 === "Gem" && floorCount === 3) {
            setTimeout(() => {
                setFloorCount(4);
                setScoreCount(30)
            }, 1000);
        } else if (boxContent3 === "Bomb" && floorCount === 3) {
            setSelectedBox2('')
            setBoxContent2('')
        }
    }, [boxContent3, floorCount, boxContent2]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (boxContent === "Bomb" || boxContent2 === "Bomb" || boxContent3 === "Bomb") {
                window.location.reload();
            }
        }, 3000); // Adjust the time interval (in milliseconds) as needed

        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }, [boxContent, boxContent2, boxContent3]);
    return (
        <>
            <section className="bg-gray-700 h-screen text-white ps-20">
                <h1 className="text-center font-bold text-2xl pt-5">TOWER-QUEST</h1>
                <h1 className="text-center font-bold text-lg pt-5">Normal Level</h1>
                <div className="flex items-center justify-around py-10">
                    <div>
                        <h1 className="text-4xl">Your Score is: {scoreCount}</h1>
                        {floorCount === 4 ? <h1>{scoreCount === 30 ? 'Congratulation!! you completed the normal level' : 'Sorry!! Not enough score. Please try again.'}</h1> : null}
                    </div>
                    <div className={`flex flex-col gap-y-2 justify-center ${floorCount === 1 ? 'visible' : 'hidden duration-1000'}`}>
                        <h1>1st Floor</h1>
                        {boxes.map((box, index) => {
                            return (
                                <>
                                    <div key={index} onClick={() => handleBoxClick(index, box)} className={`box ${index === flippedBox ? 'flipped' : ''} ${index === flippedBox && box.content === "Bomb" ? 'bg-red-500' : 'bg-green-500'} ${index === flippedBox ? '' : 'bg-indigo-500'}`}>
                                        <div className="content">{index === flippedBox ? box.content : box.name}</div>
                                    </div>
                                </>
                            )
                        })}

                    </div>

                    <div className={`flex flex-col gap-y-5 justify-center ${floorCount === 2 ? 'visible delay-[5s]' : 'hidden'}`}>
                        <h1>2nd Floor</h1>
                        {boxes2.map((box2, index2) => {
                            return (
                                <>
                                    <div key={index2} onClick={() => handleBoxClick2(index2, box2)} className={`box2 ${index2 === flippedBox2 ? 'flipped2' : ''} ${index2 === flippedBox2 && box2.content2 === "Bomb" ? 'bg-red-500' : 'bg-green-500'} ${index2 === flippedBox2 ? '' : 'bg-indigo-500'}`}>
                                        <div className="content2">{index2 === flippedBox2 ? box2.content2 : box2.name2}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className={`flex flex-col gap-y-5 justify-center ${floorCount === 3 ? 'visible transition duration-[3s]' : 'hidden'}`}>
                        <h1>3rd Floor</h1>
                        {boxes3.map((box3, index3) => {
                            return (
                                <>
                                    <div key={index3} onClick={() => handleBoxClick3(index3, box3)} className={`box3 ${index3 === flippedBox3 ? 'flipped3' : ''} ${index3 === flippedBox3 && box3.content3 === "Bomb" ? 'bg-red-500' : 'bg-green-500'} ${index3 === flippedBox3 ? '' : 'bg-indigo-500'}`}>
                                        <div className="content3">{index3 === flippedBox3 ? box3.content3 : box3.name3}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className={` bg-gray-700 text-white ${floorCount === 4 ? 'hidden' : 'visible'}`}>
                        {selectedBox2 && <p> You have selected {selectedBox2}</p>}
                        {boxContent2.length < 1 ? null :
                            <div>
                                {boxContent2 === "Bomb" ? <p className="text-red-600">Sorry!! You lost the game.</p> : <p className="text-green-600">Congratulation!! Your reached 3rd floor.</p>}
                            </div>
                        }
                    </div>

                    <div className={` bg-gray-700 text-white ${floorCount === 3 || floorCount === 4 ? 'hidden' : 'visible'}`}>
                        {selectedBox && <p> You have selected {selectedBox}</p>}
                        {boxContent.length < 1 ? null :
                            <div>
                                {boxContent === "Bomb" ? <p className="text-red-600">Sorry!! You lost the game.</p> : <p className="text-green-600">Congratulation!! Your reached 2nd floor.</p>}
                            </div>
                        }
                    </div>
                </div>
                <Link href='/'>Back to home page</Link>
            </section>
        </>
    );
}

export default NormalLevel
