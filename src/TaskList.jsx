import { useState } from "react";

export default function TaskList () {
    // Create states to control the items in the list and how many are there
    const [tasks, updateTasks] = useState([])
    const [amount, updateAmount] = useState(0)


    return (
        <>
            <ul>

            </ul>
        </>
    );
};