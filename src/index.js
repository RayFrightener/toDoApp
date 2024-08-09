import { handleFormSubmission } from "./formHandler";
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('toDoForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    } else {
        console.error('Form element not found');
    }
});